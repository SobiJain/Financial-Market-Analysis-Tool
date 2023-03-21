
import requests
import json

url_quarter = "https://www.alphavantage.co/query?function=EARNINGS&symbol=IBM&apikey=8YYV8RAUMPILRH5D"

response_quarter = requests.request("GET", url_quarter)

data_quarter = json.loads(response_quarter.content)

