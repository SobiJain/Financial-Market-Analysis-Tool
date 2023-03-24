from django.urls import path, include
from .views import UserViewSet, WishlistViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserViewSet)
router.register('wishlist', WishlistViewSet )


urlpatterns = [
    path('api/', include(router.urls)),
]
