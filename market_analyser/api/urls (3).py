from django.urls import path
from . import views

urlpatterns = [
    # path('', views.getRoutes, name="routes"),
    path('', views.home, name='home'),
    path('signup', views.signup, name='signup'),
    path('activate/<uidb64>/<token>', views.activate, name='activate'),
    path('signin', views.signin, name='signin'),
    path('signout', views.signout, name='signout'),

    
    path('cashflow', views.getCashflow, name="cashflow"),
    path('balancesheet', views.getBalanceSheet, name="balancesheet"),
    path('ratio', views.getRatio, name="ratio"),
    path('profile', views.getProfile, name="profile"),
    path('quarter', views.getQuarter, name="quarter"),
    path('profitloss', views.getProfitLoss, name="profitloss"),
    path('companies',views.getCompanyList,name='companies'),
]