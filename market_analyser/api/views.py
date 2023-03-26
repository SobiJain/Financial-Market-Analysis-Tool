from django.http import JsonResponse
from . import companyList, combined
import cgitb
from django.conf import settings

from .models import User, Wishlist
import bcrypt
import math
import random
import json
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
import jwt

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


def get_otp():
    digits = [i for i in range(0, 10)]
    random_str = ""
    for i in range(6):
        index = math.floor(random.random() * 10)
        random_str += str(digits[index])

    return random_str

@csrf_exempt
def register(request):
    
    try:
        user = json.loads(request.body.decode('utf-8'))
        email, password, otp = user["email"], user["password"], get_otp()
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')
        user = User(email=email, password=hashed_password, otp=otp, verified=False)
        print("user mila?", email, hashed_password)
        user.save()

        subject = 'Confirm your email address'
        message = render_to_string('verification.html', {
            'email': email,
            'activation_link': f"http://localhost:3000/verify?email={email}&otp={otp}"
        })
        from_email = settings.EMAIL_HOST_USER
        recipient_list = [email]

        send_mail(subject, "", from_email, recipient_list, html_message=message,fail_silently=False)

        return JsonResponse({'success': True}, status=200, safe=False)

    except:
        return JsonResponse({'success': False}, status=400, safe=False)
    
@csrf_exempt
def verify(request):
    try:
        verification = json.loads(request.body.decode('utf-8'))

        email, otp = verification["email"],  verification["otp"]

        db_user = User.objects.get(email=email, otp=otp, verified=False)

        if db_user is None:
            return JsonResponse({'success': False}, status=400, safe=False)

        db_user.verified = True
        db_user.save()
        return JsonResponse({'success': True}, status=200, safe=False)

    except:
        return JsonResponse({'success': False}, status=400, safe=False)
    
@csrf_exempt 
def login(request):
    
    try:
        user = json.loads(request.body.decode('utf-8'))
        email, input_password =  user["email"], user["password"]
        db_user = User.objects.get(email=email)
        if db_user is None:
            return JsonResponse({'success': False, "message":'Invalid Credentials'}, status=400, safe=False)
        
        if not db_user.verified:
            return JsonResponse({'success': False, "message":'Please Verify your email'}, status=401, safe=False)

        hashed_password = db_user.password

        if bcrypt.checkpw(input_password.encode('utf-8'), hashed_password.encode('utf-8')):
            payload = {"email":db_user.email}
            secret_key = settings.JWT_SECRET_KEY
            token = jwt.encode(payload, secret_key, algorithm="HS256")
            try:
                token = token.decode('utf-8')
            except:
                token = str(token)
            return JsonResponse({'success': True, 'token': token}, status=200, safe=False)

        return JsonResponse({'success': False, "message":'Invalid Credentials'}, status=400, safe=False)

    except:
        return JsonResponse({'success': False, "message":'Invalid Credentials'}, status=400, safe=False)

@csrf_exempt 
def forgot(request):
    try:
        user = json.loads(request.body.decode('utf-8'))
        email, otp =  user["email"], get_otp()
        db_user = User.objects.get(email=email, verified=True)
        if db_user is None:
            return JsonResponse({'success': False}, status=400, safe=False)
        db_user.otp = otp
        db_user.save()
        subject = 'Reset Password'
        message = render_to_string('reset.html', {
            'email': email,
            'activation_link': f"http://localhost:3000/reset?email={email}&otp={otp}"
        })
        from_email = settings.EMAIL_HOST_USER
        recipient_list = [email]

        # Send email
        send_mail(subject, "", from_email, recipient_list, html_message=message,fail_silently=False)

        return JsonResponse({'success': True}, status=200, safe=False)

    except:
        return JsonResponse({'success': False}, status=400, safe=False)
        
@csrf_exempt
def reset(request):
    try:
        verification = json.loads(request.body.decode('utf-8'))
        email, new_password, otp =  verification["email"], verification["new_password"], verification["otp"]
        db_user = User.objects.get(email=email, otp=otp, verified=True)
        if db_user is None:
            return JsonResponse({'success': False}, status=400, safe=False)
        
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(new_password.encode('utf-8'), salt).decode('utf-8')
        db_user.password = hashed_password
        db_user.save()

        return JsonResponse({'success': True}, status=200, safe=False)

    except:
        return JsonResponse({'success': False}, status=400, safe=False)
    
@csrf_exempt
def wishlist(request):
    try:
        wishlist = json.loads(request.body.decode('utf-8'))
    
        email, compan, state = wishlist["email"], wishlist["company"], wishlist["state"]
        user = User.objects.get(email=email)
        wishlist = Wishlist.objects.filter(user = user, item = compan)
        wishlist_json = serializers.serialize('json',wishlist)
        print(state, " ", wishlist_json)
        if (state=='true' and len(wishlist_json)==2) :
            wishItem = Wishlist(user=user, item = compan)
            wishItem.save()
        elif (state=='false' and len(wishlist_json)>2):
            wishItem = Wishlist.objects.get(user=user, item = compan)
            wishItem.delete()

        return JsonResponse({'success': True}, status=200, safe=False)
    except :
        return JsonResponse({'success': False}, status=400, safe=False)
    
@csrf_exempt
def getwishlist(request):
    try:
        email = request.GET.get('email')
        wishlist = Wishlist.objects.filter(user = User.objects.get(email=email))
        wishlist_json = serializers.serialize('json',wishlist)
        print(wishlist_json)
        return JsonResponse(wishlist_json, status=200, safe=False)
    except :
        return JsonResponse({'success': False}, status=400, safe=False)
    
@csrf_exempt
def isWishlisted(request):
    try:
        email = request.GET.get('email')
        item =  request.GET.get('company')
        user = User.objects.get(email=email)
        wishlist = Wishlist.objects.filter(user = user, item = item)
        wishlist_json = serializers.serialize('json',wishlist)
        if len(wishlist_json)==2:
            return JsonResponse({'resp': "Yes"}, status=200, safe=False)
        else:
            return JsonResponse({'resp': "No"}, status=200, safe=False)
    except :
        return JsonResponse({'success': False}, status=400, safe=False)