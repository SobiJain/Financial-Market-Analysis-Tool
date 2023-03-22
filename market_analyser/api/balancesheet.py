import requests
from . import cashflow

def balancesheet(key):
# replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    url = f'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol={key}&apikey={cashflow.sendKey()}'
    r = requests.get(url)
    data = r.json()
    return data