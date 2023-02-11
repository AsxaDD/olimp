from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from main.models import *


class MyUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = MyUser
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    myuser = MyUserSerializer(many=False, required=False)
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'myuser']

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'


class RuNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = RuNews
        fields = '__all__'

class EngNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EngNews
        fields = '__all__'