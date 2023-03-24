from dataclasses import field
from rest_framework import serializers
from django.contrib.auth.models import User as authUser
from rest_framework.authtoken.views import Token
from .models import Wishlist, User

class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = ('id', 'user', 'item')

    def create(self, validated_data):
        user = User.objects()
        return Wishlist.objects.create(user=user, item=validated_data.get('key'))

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password']

        extra_kwargs = {'password':{
            'write_only':True,
            'required':True
        }}

    def create(self, validated_data):
        user = authUser.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        User.objects.create(username=validated_data.get('username'), password=validated_data.get('password'))
        return user    
    

    