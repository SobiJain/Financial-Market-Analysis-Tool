from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.TextField(max_length=100)

class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    item = models.CharField(max_length=10, unique=False)