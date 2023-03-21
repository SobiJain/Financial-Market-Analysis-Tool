
# import requests
# import json

# url_balanceSheet = "https://yh-finance.p.rapidapi.com/stock/v2/get-balance-sheet"
# url_cashflow = "https://yh-finance.p.rapidapi.com/stock/v2/get-cash-flow"
# querystring = {"symbol":"aapl","region":"US"}

# headers = {
# 	"X-RapidAPI-Key": "2c1bb36bc9msh1d26faa4230b73ap148512jsna77f5c4762cd",
# 	"X-RapidAPI-Host": "yh-finance.p.rapidapi.com"
# }

# response_balanceSheet = requests.request("GET", url_balanceSheet, headers=headers, params=querystring)
# response_cashflow = requests.request("GET", url_cashflow, headers=headers, params=querystring)

# data_balanceSheet = json.loads(response_balanceSheet.content)
# data_cashflow = json.loads(response_cashflow.content)


# balance_sheet_data = data_balanceSheet["balanceSheetHistory"]['balanceSheetStatements']
# cashflow_data = data_cashflow['cashflowStatementHistory']['cashflowStatements']


# roeList = [[] for _ in range(len(cashflow_data)+1)]
# roeList[0].append('endDate')
# roeList[0].append('ROE %')
# print(roeList)

# index = 1

# for i in balance_sheet_data:
#     for j in cashflow_data:
#         if i['endDate']['fmt']==j['endDate']['fmt']:
#             roeList[index].append(i['endDate']['fmt'])
#             roeList[index].append((float(i['totalStockholderEquity']['raw'])/float(j['netIncome']['raw']))*100)
#     index+=1
# print(roeList)

from . import cashflow
from . import balancesheet

# import cashflow
# import balancesheet

balancesheetData = balancesheet.data
cashflowData = cashflow.data

print(balancesheetData['annualReports'])

length = len(balancesheetData['annualReports'])
roeList = []

for i in range(length):
    roeList.append({'roe': float(cashflowData['annualReports'][i]['netIncome'])/float(balancesheetData['annualReports'][i]['totalShareholderEquity'])})

annualROE = {'annualROE': roeList}

