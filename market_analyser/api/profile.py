
import requests
import json

url_profile = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=8YYV8RAUMPILRH5D"

response_profile = requests.request("GET", url_profile)

data_profile = json.loads(response_profile.content)


