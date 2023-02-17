from django.urls import path
from .views import *
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('api/get_event', ReturnEvent.as_view(), name='returnEvent'),
    path('api/<str:news_type>/', handleNews),
    path('api/create_article', csrf_exempt(create_article)),
]
