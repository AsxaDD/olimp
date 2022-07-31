import json

from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.views import LoginView
from django.http import Http404, HttpResponse, JsonResponse
from django.urls import reverse
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.decorators import api_view
from main.serializers import UserSerializer, MyUserSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from .utils import *
from django.http import HttpResponseRedirect
from django.shortcuts import render, resolve_url

from .forms import RegForm, LoginForm


@api_view(('GET', 'POST',))
def regView(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = RegForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            try:
                validate_password(form.cleaned_data["password"])
            except:
                return Response({"Error": "Weak password"}, status=status.HTTP_400_BAD_REQUEST)

            user = User.objects.create_user(form.cleaned_data["username"])
            user.set_password(form.cleaned_data["password"])
            user.first_name = form.cleaned_data["first_name"]
            user.last_name = form.cleaned_data["last_name"]
            user.save()
            login(request, user)
            return HttpResponseRedirect('/')
    # if a GET (or any other method) we'll create a blank form
    else:
        form = RegForm()
    return render(request, 'templates/registration/reg.html', {'form': form})

def loginView(request):
    if request.method == 'POST':

        form = LoginForm(request.POST)

        if form.is_valid():
            user = authenticate(request, username=form.cleaned_data['username'], password=form.cleaned_data['password'])
            if user is not None:
                login(request, user)
                return HttpResponseRedirect('/')
    else:
        form = LoginForm()
    return render(request, 'registration/login.html', {'form': form})


class UserList(APIView):
    """
    List all users, or create a new user.
    """
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(JSONRenderer().render(serializer.data))

    def post(self, request):
        '''

        КРАЙНЕ СЫРОЙ ОБРАБОТЧИК ВХОДЯЩИХ ДАННЫХ!
        Необходимо сделать проверку корректности пароля,
        проверку на уникальный юзернейм

        '''

        try:
            validate_password(request.data["password"])
        except:
            return Response({"Error": "Weak password"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(request.data["username"])
        user.set_password(request.data["password"])
        user.save()
        return Response(request.data, status=status.HTTP_201_CREATED)



# class CurrentUser(APIView):
#     """
#     List all snippets, or create a new snippet.
#     Если GET-запрос, отправить в ответ шаблон
#     пользовательской страницы
#     Если POST-запрос, обновить информацию о пользователе
#     """
#     def get_user(self, pk):
#         try:
#             return User.objects.get(pk=pk)
#         except User.DoesNotExist:
#             raise Http404
#
#     def get(self, request, format=None):
#         snippets = Snippet.objects.all()
#         serializer = SnippetSerializer(snippets, many=True)
#         return Response(serializer.data)
#
#     def post(self, request, format=None):
#         serializer = SnippetSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def mainPageRender(request): return render(request, 'index.html')
def graphs(request): return render(request, 'lessons/graphs.html')

@api_view(('GET',))
def check(request):
    if request.user.is_authenticated:
        return JsonResponse({"name": request.user.username, "isAuth": "1"})
    else:
        return JsonResponse({"isAuth": "0"})