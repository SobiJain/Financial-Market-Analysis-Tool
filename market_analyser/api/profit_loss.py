
import requests
import json

def profit(key):

    url_profitnloss = f"https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol={key}&apikey=8YYV8RAUMPILRH5D"

    response_profitnloss = requests.request("GET", url_profitnloss)

    data_profitnloss = json.loads(response_profitnloss.content)
    return data_profitnloss


