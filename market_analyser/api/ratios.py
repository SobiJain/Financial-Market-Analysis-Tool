from . import cashflow
from . import balancesheet

# import cashflow
# import balancesheet

balancesheetData = balancesheet.data
cashflowData = cashflow.data
length = len(balancesheetData['annualReports'])
roeList = []
for i in range(length):
    roeList.append({'roe': float(cashflowData['annualReports'][i]['netIncome'])/float(balancesheetData['annualReports'][i]['totalShareholderEquity'])})

annualROE = {'annualROE': roeList}
#djd
print(annualROE)
