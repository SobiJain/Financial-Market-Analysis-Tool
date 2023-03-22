
import requests
import json
from . import cashflow


def summary(key):
    url_profile = f"https://www.alphavantage.co/query?function=OVERVIEW&symbol={key}&apikey={cashflow.sendKey()}"

    response_profile = requests.request("GET", url_profile)

    data_profile = json.loads(response_profile.content)
    return data_profile


