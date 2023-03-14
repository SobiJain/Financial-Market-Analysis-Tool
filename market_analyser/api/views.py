from django.shortcuts import render
from django.http import JsonResponse
from . import cashflow, balancesheet, ratios, profile, quarter, profit_loss  

# Create your views here.
def getRoutes(request):
    return JsonResponse("henlo", safe=False)

def getCashflow(request):
    return JsonResponse(cashflow.cashflowList, safe=False)

def getBalanceSheet(request):
    return JsonResponse(balancesheet.balanceSheetList, safe=False)

def getRatio(request):
    return JsonResponse(ratios.roeList, safe=False)

def getProfile(request):
    return JsonResponse(profile.data_profile, safe=False)

def getQuarter(request):
    return JsonResponse(quarter.data_quarter, safe=False)

def getProfitLoss(request):
    return JsonResponse(profit_loss.data_profitnloss, safe=False)
