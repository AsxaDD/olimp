"""TEST URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth.forms import *
from django.urls import path, include
from django.contrib.auth import views as auth_views
from main import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('main.urls')),
    path('', views.mainPageRender, name='mainPageRender'),
    path('themes/graphs/', views.graphs, name='graphs'),
    path('api/check-user/', views.checkUser, name='check'),
    path('api/check_acmp_tasks/', views.return_acmpTasks, name='checkacmp'),
    path('api/get_event', views.ReturnEvent.as_view(), name='returnEvent'),
    path('api/<str:news_type>/', views.handleNews),

    path('accounts/AsxaD4/', views.TEST__USER, name='user'),
]
