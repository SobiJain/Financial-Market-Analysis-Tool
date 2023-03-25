from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager


class User(models.Model):

    email = models.EmailField(max_length=100, unique=True)
    otp = models.CharField(max_length=6)
    verified = models.BooleanField()
    password = models.CharField(max_length=50,unique=True)
    
    def __str__(self):
        return self.email
    
class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    item = models.CharField(max_length=10, unique=False)