# import requests
# import json

# url = "https://yh-finance.p.rapidapi.com/stock/v2/get-cash-flow"

# querystring = {"symbol":"aapl","region":"US"}

# headers = {
# 	"X-RapidAPI-Key": "2c1bb36bc9msh1d26faa4230b73ap148512jsna77f5c4762cd",
# 	"X-RapidAPI-Host": "yh-finance.p.rapidapi.com"
# }

# response = requests.request("GET", url, headers=headers, params=querystring)

# data = json.loads(response.content)
# cashflow_data = data['cashflowStatementHistory']['cashflowStatements']
# cashflowList = [[] for _ in range(len(cashflow_data)+1)]

# keyList = ['endDate', 'investments', 'changeToLiabilities', 'totalCashflowsFromInvestingActivities', 'netBorrowings', 'totalCashFromFinancingActivities', 'changeInCash','repurchaseOfStock', 'changeToOperatingActivities', 'totalCashFromOperatingActivities', 'depreciation', 'netIncome','dividendsPaid','otherCashflowsFromInvestingActivities', 'otherCashflowsFromFinancingActivities','changeToInventory', 'changeToAccountReceivables', 'capitalExpenditures']
# for i in range(len(keyList)):
#     cashflowList[0].append(keyList[i])

# index = 1
# for i in cashflow_data:
#     for j in range(len(keyList)):
#         cashflowList[index].append(i[keyList[j]]['fmt'])
#     index+=1
# print(cashflowList)

import requests

# replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
url = 'https://www.alphavantage.co/query?function=CASH_FLOW&symbol=IBM&apikey=8YYV8RAUMPILRH5D'
r = requests.get(url)
data = r.json()

index = 1
for i in cashflow_data:
    for j in range(len(keyList)):
        cashflowList[index].append(i[keyList[j]]['fmt'])
    index+=1
print(data)
