from django.http import JsonResponse
from . import ratios, companyList, combined
import cgitb

cgitb.enable()

# Create your views here.
def getRoutes(request):
    return JsonResponse("henlo", safe=False)

def getCashflow(request):
    key = request.GET.get('companyKeyValue')
    obj = combined.Cashflow()
    return JsonResponse(obj.getData(key), safe=False)

def getBalanceSheet(request):
    key = request.GET.get('companyKeyValue')
    obj = combined.BalanceSheet()
    return JsonResponse(obj.getData(key), safe=False)

def getRatio(request):
    key = request.GET.get('companyKeyValue')
    return JsonResponse(ratios.ratio(key), safe=False)

def getProfile(request):
    key = request.GET.get('companyKeyValue')
    obj = combined.Profile()    
    return JsonResponse(obj.getData(key), safe=False)

def getQuarter(request):
    key = request.GET.get('companyKeyValue')
    obj = combined.Quarter()
    return JsonResponse(obj.getData(key), safe=False)

def getProfitLoss(request):
    key = request.GET.get('companyKeyValue')
    obj = combined.Profit()
    return JsonResponse(obj.getData(key), safe=False)

def getCompanyList(request):
    return JsonResponse(companyList.json_obj, safe=False)

def getPrice(request):
    key = request.GET.get('companyKeyValue')
    obj = combined.Price()
    return JsonResponse(obj.getData(key), safe=False)

