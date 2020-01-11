from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import ToolsAPI, RentalsAPI


urlpatterns = [
    path('api/tools', ToolsAPI.as_view()),
    path('api/rentals', RentalsAPI.as_view())
]