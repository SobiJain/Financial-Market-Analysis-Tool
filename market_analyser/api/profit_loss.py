
import requests
import json

url_profitnloss = "https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=8YYV8RAUMPILRH5D"

response_profitnloss = requests.request("GET", url_profitnloss)

data_profitnloss = json.loads(response_profitnloss.content)


