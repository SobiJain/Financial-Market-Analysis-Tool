
import requests
import json


def summary(key):
    url_profile = f"https://www.alphavantage.co/query?function=OVERVIEW&symbol={key}&apikey=8YYV8RAUMPILRH5D"

    response_profile = requests.request("GET", url_profile)

    data_profile = json.loads(response_profile.content)
    return data_profile


