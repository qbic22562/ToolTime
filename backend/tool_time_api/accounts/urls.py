from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UsersViewSet
from knox import views as knox_views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('api/users', UsersViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox-logout'),
]