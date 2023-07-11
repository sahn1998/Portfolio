from django.http import JsonResponse
from ..database.models import DataFrame
import json
import pandas as pd

def save_dataframe(request):
    name = request.POST.get('name')
    dataframe_data = request.POST.get('dataframe_data')

    # Convert the JSON string to a Python dictionary
    dataframe_dict = json.loads(dataframe_data)

    # Create a DataFrame instance and save it
    df = DataFrame(name=name, dataframe_data=dataframe_dict)
    df.save()

    return JsonResponse({'message': 'DataFrame saved successfully'})

def get_dataframe(request, dataframe_id):
    try:
        # Retrieve the DataFrame instance
        df = DataFrame.objects.get(id=dataframe_id)

        # Convert the JSON data back to a DataFrame
        dataframe_data = df.dataframe_data
        dataframe = pd.DataFrame(dataframe_data)

        # Perform any required operations on the dataframe
        # ...

        # Return the dataframe as JSON
        return JsonResponse({'dataframe': dataframe.to_json(orient='records')})
    except DataFrame.DoesNotExist:
        return JsonResponse({'error': 'DataFrame not found'}, status=404)