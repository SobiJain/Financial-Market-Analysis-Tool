from django.shortcuts import render
from django.http import JsonResponse
from . import cashflow, balancesheet, ratios, profile, quarter, profit_loss, consolidation

# Create your views here.
def getRoutes(request):
    return JsonResponse("henlo", safe=False)

def getCashflow(request):
    return JsonResponse(cashflow.data, safe=False)

def getBalanceSheet(request):
    return JsonResponse(balancesheet.data, safe=False)

def getRatio(request):
    return JsonResponse(ratios.annualROE, safe=False)

def getProfile(request):
    return JsonResponse(profile.data_profile, safe=False)

def getQuarter(request):
    return JsonResponse(quarter.data_quarter, safe=False)

def getProfitLoss(request):
    return JsonResponse(profit_loss.data_profitnloss, safe=False)

def getAllData(request):
    return JsonResponse(consolidation.json_obj, safe=False)
