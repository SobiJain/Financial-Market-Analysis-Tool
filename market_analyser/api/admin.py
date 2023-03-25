from django.contrib import admin

# Register your models here.

from .models import User, Wishlist

admin.site.register(User)
admin.site.register(Wishlist)