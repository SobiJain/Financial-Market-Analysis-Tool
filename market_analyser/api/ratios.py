from . import cashflow
from . import balancesheet

# import cashflow
# import balancesheet
def ratio(key):
    balancesheetData = balancesheet.balancesheet(key)
    cashflowData = cashflow.cash(key)

    # length = len(balancesheetData['annualReports'])
    roeList = []

    # for i in range(length):
    #     roeList.append({'roe': float(cashflowData['annualReports'][i]['netIncome'])/float(balancesheetData['annualReports'][i]['totalShareholderEquity'])})

    annualROE = {'annualROE': roeList}
    return(annualROE)

