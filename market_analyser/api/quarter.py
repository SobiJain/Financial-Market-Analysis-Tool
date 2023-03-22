
import requests
import json

def quarter(key):
    url_quarter = f"https://www.alphavantage.co/query?function=EARNINGS&symbol={key}&apikey=8YYV8RAUMPILRH5D"

    response_quarter = requests.request("GET", url_quarter)

    data_quarter = json.loads(response_quarter.content)
    return data_quarter

