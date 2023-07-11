#%%
import get_data_and_merge
import dataframe_processing
import map_data
#%%
get_data_and_merge.main()
#%%
seoul_df = dataframe_processing.main()
sample_map = map_data.main(seoul_df)
sample_map
# %%
