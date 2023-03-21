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

def getCompanyList(request):
    return JsonResponse(companyList.json_obj, safe=False)

@csrf_exempt
@api_view(['POST',])
def sendCompanyName(request):
    print(request.body)
    return Response(status=status.HTTP_201_CREATED)
