from django.contrib import admin
from .models import Wishlist, User

class UserAdmin(admin.ModelAdmin):
    user_list = ('name', 'token')

class WishlistAdmin(admin.ModelAdmin):
    wishlist = ('user', 'item')

# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Wishlist, WishlistAdmin)