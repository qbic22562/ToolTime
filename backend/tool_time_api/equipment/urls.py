from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import ToolsListAPI, ToolsDetailAPI, RentalsListAPI, RentalsDetailAPI
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('api/tools', ToolsListAPI.as_view()),
    path('api/tools/<int:pk>/', ToolsDetailAPI.as_view()),
    path('api/rentals', RentalsListAPI.as_view()),
    path('api/rentals/<int:pk>/', RentalsDetailAPI.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)