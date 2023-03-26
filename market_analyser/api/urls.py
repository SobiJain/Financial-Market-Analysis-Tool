from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('cashflow', views.getCashflow, name="cashflow"),
    path('balancesheet', views.getBalanceSheet, name="balancesheet"),
    path('profile', views.getProfile, name="profile"),
    path('quarter', views.getQuarter, name="quarter"),
    path('profitloss', views.getProfitLoss, name="profitloss"),
    path('companies',views.getCompanyList,name='companies'),
    path('price', views.getPrice, name='price'),

    path('register', views.register, name='register'),
    path('verify', views.verify, name='verify'),
    path('login', views.login, name='login'),
    path('forgot', views.forgot, name='forgot'),
    path('reset', views.reset, name='reset'),
    path('wishlist', views.wishlist, name='wishlist'),
    path('getwishlist', views.getwishlist, name='getwishlist'),
    path('iswishlist', views.isWishlisted, name='iswishlist'),
]