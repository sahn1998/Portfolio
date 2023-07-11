import json
import pandas as pd
from django.db import models

class DataFrame(models.Model):
    name = models.CharField(max_length=100)
    dataframe_data = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)

    def save_dataframe(self, dataframe):
        self.dataframe_data = dataframe.to_json()
        self.save()

    def get_dataframe(self):
        return pd.read_json(self.dataframe_data)