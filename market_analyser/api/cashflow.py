import requests

def cash(key):
    # replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    url = f'https://www.alphavantage.co/query?function=CASH_FLOW&symbol={key}&apikey=8YYV8RAUMPILRH5D'
    r = requests.get(url)
    data = r.json()
    return data
