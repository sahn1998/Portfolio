import os
import pandas as pd
import geopandas as gpd
import numpy as np
import keys

class SeoulDataProcessor:
    @staticmethod
    def read_geography_data(file_path):
        kr_dong_geo = gpd.read_file(file_path)
        kr_dong_geo.crs = "EPSG:5179"
        kr_dong_geo["EMD_CD"] = kr_dong_geo["EMD_CD"].astype(np.int64)
        return kr_dong_geo

    @staticmethod
    def preprocess_geo_dataframe(df):
        df = df[df["EMD_CD"].astype(pd.StringDtype()).str.startswith(keys.KOREA_STATE_CODE_PREFIX["Seoul"])] # seoul geography data frame
        df = df.drop("EMD_KOR_NM", axis=1)
        df = df.rename({'EMD_CD': '법정동코드'}, axis=1)
        return df

    @staticmethod
    def preprocess_code_dataframe(df):
        df.reset_index(inplace=True)
        df = df.iloc[1:, :]
        df["법정동"] = df["법정동명"].str.rsplit().str[-1]
        df.loc[:, "법정동코드"] = df["법정동코드"].astype(pd.StringDtype()).str[:-2].astype(np.int64)
        return df

    @staticmethod
    def merge_dataframes(geo_df, code_df, housing_df):
        merged_df = geo_df.merge(code_df, on="법정동코드")
        merged_df = merged_df.merge(housing_df, on="법정동")
        return merged_df
    
def main():
    path = './SeoulData/'
    seoul_processor = SeoulDataProcessor()
    geo_df = seoul_processor.read_geography_data("./KoreaMapData/kr_dong.shp")
    geo_df = seoul_processor.preprocess_geo_dataframe(geo_df)

    seoul_housing_df = pd.read_csv(os.path.join(path, "Seoul.csv"), dtype={'층': str}).groupby(['법정동'], as_index=False)["거래금액"].mean()
    code_df = pd.read_excel('./KoreaMapData/seoul_code.xls', index_col=0)
    code_df = seoul_processor.preprocess_code_dataframe(code_df)

    seoul_merged_df = seoul_processor.merge_dataframes(geo_df, code_df, seoul_housing_df)
    return seoul_merged_df