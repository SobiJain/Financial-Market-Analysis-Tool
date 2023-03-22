
import requests
import json
from . import cashflow

def profit(key):

    url_profitnloss = f"https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol={key}&apikey={cashflow.sendKey()}"

    response_profitnloss = requests.request("GET", url_profitnloss)

    data_profitnloss = json.loads(response_profitnloss.content)
    return data_profitnloss


