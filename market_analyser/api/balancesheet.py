# import requests
# import json
# from django.http import HttpResponse
# from django.shortcuts import render



# url = "https://yh-finance.p.rapidapi.com/stock/v2/get-balance-sheet"

# querystring = {"symbol":"aapl","region":"US"}

# headers = {
# 	"X-RapidAPI-Key": "2c1bb36bc9msh1d26faa4230b73ap148512jsna77f5c4762cd",
# 	"X-RapidAPI-Host": "yh-finance.p.rapidapi.com"
# }

# response = requests.request("GET", url, headers=headers, params=querystring)

# data = json.loads(response.content)

# keyList = ['endDate', 'totalLiab', 'otherLiab', 'totalAssets', 'otherAssets', 'retainedEarnings','cash','treasuryStock', 'shortLongTermDebt', 'longTermInvestments', 'netTangibleAssets', 'shortTermInvestments', 'netReceivables', 'longTermDebt', 'inventory', 'totalStockholderEquity'  ]
# balance_sheet_data = data["balanceSheetHistory"]['balanceSheetStatements']
# balanceSheetList = [[] for _ in range(len(balance_sheet_data)+1)]

# for i in range(len(keyList)):
#     balanceSheetList[0].append(keyList[i])

# index = 1
# for i in balance_sheet_data:
    
#     for j in range(len(keyList)):
#         balanceSheetList[index].append(i[keyList[j]]['fmt'])
#     index+=1

# print(balanceSheetList)

# def company_info(request):
#     data = {
#         'balance_sheet': balanceSheetList
#     }
#     return render(request, "src\components\Display\BalanceSheet.js", data)
    

import requests

# replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
url = 'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=8YYV8RAUMPILRH5D'
r = requests.get(url)
data = r.json()

print(data)