from rest_framework import serializers
from rest_framework import viewsets
from .serializers import UserSerializer, WishlistSerializer
from django.contrib.auth.models import User
from .models import Wishlist
from rest_framework.authentication import TokenAuthentication


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class WishlistViewSet(viewsets.ModelViewSet):
    queryset = Wishlist.objects.all()
    serializer_class = WishlistSerializer
