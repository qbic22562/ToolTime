from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import ToolsAPI, RentalsAPI


urlpatterns = [
    path('tools', ToolsAPI.as_view()),
    path('rentals', RentalsAPI.as_view())
]