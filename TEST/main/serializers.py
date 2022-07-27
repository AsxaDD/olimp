from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from main.models import MyUser

class MyUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = MyUser
        fields = '__all__'

class UserSerializer(serializers.HyperlinkedModelSerializer):
    myuser = MyUserSerializer(many=False, required=False)
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'myuser']

