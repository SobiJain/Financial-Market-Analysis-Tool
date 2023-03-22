import requests

def sendKey():
    return "E4RZZFV65NX33A70"

def cash(key):
    # replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    url = f'https://www.alphavantage.co/query?function=CASH_FLOW&symbol={key}&apikey={sendKey()}'
    r = requests.get(url)
    data = r.json()
    return data
