from rest_framework import serializers
from rest_framework import viewsets
from .serializers import UserSerializer
from django.contrib.auth.models import User

from rest_framework.authentication import TokenAuthentication


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
