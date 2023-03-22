from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from . import cashflow, balancesheet, ratios, profile, quarter, profit_loss, companyList
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from environ import environ
import cgitb

cgitb.enable()

# Create your views here.
def getRoutes(request):
    return JsonResponse("henlo", safe=False)

def getCashflow(request):
    key = request.GET['companyKeyValue']
    return JsonResponse(cashflow.cash(key), safe=False)

def getBalanceSheet(request):
    key = request.GET['companyKeyValue']
    return JsonResponse(balancesheet.balancesheet(key), safe=False)

def getRatio(request):
    key = request.GET['companyKeyValue']
    return JsonResponse(ratios.ratio(key), safe=False)

def getProfile(request):
    key = request.GET['companyKeyValue']
    print(profile.summary(key))
    return JsonResponse(profile.summary(key), safe=False)

def getQuarter(request):
    print(request.GET.get('companyKeyValue'))
    key = request.GET.get('companyKeyValue')
    return JsonResponse(quarter.quarter(key), safe=False)

def getProfitLoss(request):
    key = request.GET['companyKeyValue']
    return JsonResponse(profit_loss.profit(key), safe=False)

def getCompanyList(request):
    return JsonResponse(companyList.json_obj, safe=False)

@csrf_exempt
@api_view(['POST',])
def sendCompanyName(request):
    print(request.body)
    return Response(status=status.HTTP_201_CREATED)
