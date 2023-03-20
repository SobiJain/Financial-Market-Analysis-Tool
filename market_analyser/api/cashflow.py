import requests

# replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
url = 'https://www.alphavantage.co/query?function=CASH_FLOW&symbol=IBM&apikey=8YYV8RAUMPILRH5D'
r = requests.get(url)
data = r.json()

print(data)