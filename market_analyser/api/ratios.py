from . import combined

# import cashflow
# import balancesheet
def ratio(key):
    balancesheet = combined.BalanceSheet()
    cashflow = combined.Cashflow()

    balancesheetData = balancesheet.getData(key)
    cashflowData = cashflow.getData(key)

    roeList = []

    # for i in range(length):
    #     roeList.append({'roe': float(cashflowData['annualReports'][i]['netIncome'])/float(balancesheetData['annualReports'][i]['totalShareholderEquity'])})

    annualROE = {'annualROE': roeList}
    return(annualROE)

