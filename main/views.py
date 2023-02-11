import json
import requests
from bs4 import BeautifulSoup
from django.contrib.auth.password_validation import validate_password
from django.http import JsonResponse
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from main.serializers import UserSerializer
from rest_framework.views import APIView
from django.contrib.auth import login
from .models import MyUser, Events, RuNews, EngNews
from .serializers import EventsSerializer, RuNewsSerializer, EngNewsSerializer
from .utils import *
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import RegForm


@api_view(('GET',))
def TEST__USER(request):
    user = User.objects.get(username="AsxaD4")
    data = UserSerializer(user)
    return JsonResponse(data.data)


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
                return JsonResponse({"Error": "Weak password"}, status=status.HTTP_400_BAD_REQUEST)

            user = User.objects.create_user(form.cleaned_data["username"])
            myuser = MyUser(user=user)
            user.set_password(form.cleaned_data["password"])
            user.first_name = form.cleaned_data["first_name"]
            user.last_name = form.cleaned_data["last_name"]
            user.save()
            myuser.save()
            login(request, user)
            return HttpResponseRedirect('/')
    # if a GET (or any other method) we'll create a blank form
    else:
        form = RegForm()
    return render(request, 'registration/reg.html', {'form': form})
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


# from .tasks import supper_sum
def mainPageRender(request):
    # abnews_parser()
    return render(request, 'index.html')
def graphs(request):
    # tpropger_parser()

    return render(request, 'lessons/graphs.html')







@api_view(('GET',))
def check_isAuthenticated(request):
    if request.user.is_authenticated:
        return JsonResponse({"name": request.user.username, "isAuth": "1"})
    else:
        return JsonResponse({"isAuth": "0"})


## *ГЛАВНАЯ ФУНКЦИЯ*, если пользователь авторизован,
## возвращает все его данные в виде Json.
## В другом случае, возвращает "isAuth: 0"
@api_view(('GET',))
def checkUser(request):
    if request.user.is_authenticated:
        return JsonResponse((UserSerializer(User.objects.get(username=request.user))).data)
    else:
        user = User.objects.get(username="AsxaD4")
        data = UserSerializer(user)
        return JsonResponse(data.data)
        # return JsonResponse({"isAuth": "0"})


def chekingACMPTasks(user_id):
    headers = {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
    url = "https://acmp.ru/index.asp?main=user&id=" + str(user_id)
    req = requests.get(url, headers=headers)
    src = req.text

    soup = BeautifulSoup(src, "lxml")
    arr = []

    for link in soup.find_all('a'):
        if "?main=task&id_task=" in link.get("href"):
            arr.append(link.getText())

    return arr

@api_view(('GET',))
def return_acmpTasks(request):

    tasks = chekingACMPTasks("403815")
    return JsonResponse({"tasks": tasks})

# @api_view(('GET',))
# def return_acmpTasks(request):
#     if request.user.is_authenticated:
#         tasks = chekingACMPTasks(request.user.myuser.acmp_id)
#         request.user.myuser.solved_problems = json.dumps({ tasks[i] : tasks[i] for i in range(0, len(tasks) ) })
#         if not request.user.myuser.quantity_of_solved_problems:
#             request.user.myuser.quantity_of_solved_problems = len(tasks)
#         request.user.myuser.save()
#         return JsonResponse({"tasks": tasks})
#     else:
#         return JsonResponse({"Error": "User is not authenticated"}, status=status.HTTP_400_BAD_REQUEST)


import ast
class ReturnEvent(APIView):
    def post(self, request):
        data = request.data
        try:
            obj = Events.objects.get(id=1)
        except:
            obj = Events(events=json.dumps({}))
        dictionary = EventsSerializer(obj)
        dictionary = ast.literal_eval(dictionary.data["events"])

        for year in data:
            if year not in dictionary:
                dictionary[year] = data[year]
            else:
                for month in data[year]:
                    if month not in dictionary[year]:
                        dictionary[year][month] = data[year][month]
                    else:
                        for day in data[year][month]:
                            if day not in dictionary[year][month]:
                                dictionary[year][month][day] = data[year][month][day]
                            else:
                                for event in data[year][month][day]:
                                    dictionary[year][month][day][event] = data[year][month][day][event]

        obj.events = json.dumps(dictionary)
        obj.save()
        return Response({"Success": 200}, status=status.HTTP_200_OK)

    def get(self, request):
        obj = Events.objects.get(id=1)
        data = EventsSerializer(obj)

        return JsonResponse(ast.literal_eval(data.data["events"]))

    def delete(self, request):
        obj = Events.objects.get(id=1)
        obj.events = json.dumps({})
        obj.save()
        return Response({"Success": 200}, status=status.HTTP_200_OK)




#####################   NEWS    #####################


def returnRuNews(tag, latest_id):
    if latest_id == -1:
        last_five = RuNews.objects.filter(tag=tag).order_by('-id')[:10]
        answer = RuNewsSerializer(last_five, many=True)
        return answer.data
    else:
        five_news = reversed(RuNews.objects.filter(pk__in=[
            i for i in range(latest_id - 1, latest_id - 11, -1)
        ], tag=tag))

        answer = RuNewsSerializer(five_news, many=True)
        return answer.data

def returnEngNews(tag, latest_id):
    if latest_id == -1:
        last_five = EngNews.objects.filter(tag=tag).order_by('-id')[:10]
        answer = EngNewsSerializer(last_five, many=True)
        return answer.data
    else:
        five_news = reversed(EngNews.objects.filter(pk__in=[
            i for i in range(latest_id - 1, latest_id - 11, -1)
        ], tag=tag))

        answer = EngNewsSerializer(five_news, many=True)
        return answer.data


@api_view(('POST',))
def handleNews(request, news_type):
    latest_id = int(request.data['latest_id'])

    if news_type == 'ru_it_news':
        if latest_id == -1:
            return Response(returnRuNews('it', -1))
        else:
            return Response(returnRuNews('it', latest_id))
    elif news_type == 'eng_it_news':
        if latest_id == -1:
            return Response(returnEngNews('it', -1))
        else:
            return Response(returnEngNews('it', latest_id))
    elif news_type == 'ru_math_news':
        if latest_id == -1:
            return Response(returnRuNews('math', -1))
        else:
            return Response(returnRuNews('math', latest_id))
    elif news_type == 'eng_math_news':
        if latest_id == -1:
            return Response(returnEngNews('math', -1))
        else:
            return Response(returnEngNews('math', latest_id))