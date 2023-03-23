from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('cashflow', views.getCashflow, name="cashflow"),
    path('balancesheet', views.getBalanceSheet, name="balancesheet"),
    path('ratio', views.getRatio, name="ratio"),
    path('profile', views.getProfile, name="profile"),
    path('quarter', views.getQuarter, name="quarter"),
    path('profitloss', views.getProfitLoss, name="profitloss"),
    path('companies',views.getCompanyList,name='companies'),
    path('price', views.getPrice, name='price')
]