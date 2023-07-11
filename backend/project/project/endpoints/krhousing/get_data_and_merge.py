import requests
import os
import pandas as pd
import bs4
import keys

class KoreaDataGovAPI:
    def __init__(self, api_url, api_key):
        self.api_url = api_url
        self.api_key = api_key

    def call_api(self, params):
        response = requests.get(self.api_url, params=params)
        content = response.text
        return content


class HousingPriceData:
    def __init__(self, city, city_code):
        self.city = city
        self.city_code = city_code
        self.dataframes = []

    def create_dataframe(self, content):
        xml_obj = bs4.BeautifulSoup(content, 'lxml-xml')
        rows = xml_obj.findAll('item')

        row_list = []  # values
        name_list = []  # column names
        value_list = []  # dummy list for values

        for i in range(0, len(rows)):
            columns = rows[i].find_all()
            for j in range(0, len(columns)):
                if i == 0:
                    name_list.append(columns[j].name)
                value_list.append(columns[j].text)
            row_list.append(value_list)
            value_list = []

        housing_price_df = pd.DataFrame(row_list, columns=name_list)
        housing_price_df["주소"] = housing_price_df[['법정동', '지번']].apply(' '.join, axis=1)
        housing_price_df.drop(['거래유형', '해제사유발생일', '해제여부', '중개사소재지'], axis=1, inplace=True)

        for col in housing_price_df:
            housing_price_df[col] = housing_price_df[col].astype(pd.StringDtype()).str.strip().replace(',', '',
                                                                                                        regex=True)

        housing_price_df["거래금액"] = housing_price_df["거래금액"].astype(float)

        return housing_price_df

    def get_month_year_range(self, start_month, start_year, end_month, end_year):
        date_range = []
        ym_start = 12 * start_year + start_month - 1
        ym_end = 12 * end_year + end_month - 1
        for ym in range(ym_start, ym_end):
            y, m = divmod(ym, 12)
            y, m = str(y), str(m + 1)
            if len(m) == 1:
                m = "0" + m
            date_range.append(str(y) + str(m))
        return date_range

    def fetch_data(self, api):
        appended_df = []
        for date in self.get_month_year_range(2, 2016, 4, 2023):
            params = {
                'serviceKey': api.api_key,
                'LAWD_CD': self.city_code,
                'DEAL_YMD': date
            }
            api_content = api.call_api(params)
            housing_price_df = self.create_dataframe(api_content)
            appended_df.append(housing_price_df)
        appended_housing_price_df = pd.concat(appended_df)
        self.dataframes.append(appended_housing_price_df)


class DataMerger:
    @staticmethod
    def merge_csv_files_in_directory(path, output_file):
        data_collection = []
        for filename in os.listdir(path):
            if filename.endswith('.csv'):
                file_path = os.path.join(path, filename)
                df = pd.read_csv(file_path)
                data_collection.append(df)
        merged_data_df = pd.concat(data_collection)
        merged_data_df.to_csv(output_file, index=False)
        
    @staticmethod

    @staticmethod
    def save_dataframes_to_csv(df, city, path):
        df.to_csv(os.path.join(path, f"{city}.csv"))

def main():
    api = KoreaDataGovAPI(keys.API_URL, keys.API_SECOND_KEY)
    path = './SeoulData/'

    housing_data_merge = DataMerger()
    data_need_to_be_merged = []
    for city, city_code in keys.SEOUL_CITY_CODES.items():
        if not f"{city}.csv" in os.listdir(path):
            housing = HousingPriceData(city, city_code)
            housing.fetch_data(api)
            housing_data_merge.save_dataframes_to_csv(housing.dataframes[0], city, path)
            data_need_to_be_merged.append(housing.dataframes[0])

    if "Seoul.csv" in os.listdir(path):
        data_need_to_be_merged.append(pd.read_csv(os.path.join(path, "Seoul.csv")))
        merged_data_df = pd.concat(data_need_to_be_merged)
        merged_data_df.to_csv(os.path.join(path, "Seoul.csv"))
    else:
        data_merger = DataMerger()
        data_merger.merge_csv_files_in_directory(path, os.path.join(path, "Seoul.csv"))
        
    