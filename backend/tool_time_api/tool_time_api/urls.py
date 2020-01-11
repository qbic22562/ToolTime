from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('equipment.urls')),
    path('', include('accounts.urls'))
]
