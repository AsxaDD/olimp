import json
from django.http import JsonResponse, HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import Events, RuNews, EngNews
from .serializers import EventsSerializer, RuNewsSerializer, EngNewsSerializer


def create_article(request):
    data = request.POST
    if data['status'] == 'true':

        if data['lang'] == 'ru':
            last_one = RuNews.objects.filter(tag=data['tag']).order_by('-id')[0]
            if data['title'] != last_one.title:
                article = RuNews(
                    title=data['title'],
                    content=data['content'],
                    date=json.loads(data['date']),
                    link=data['link'],
                    pic=data['pic'],
                    tag=data['tag'],
                )
                article.save()
        else:
            last_one = EngNews.objects.filter(tag=data['tag']).order_by('-id')[0]
            if data['title'] != last_one.title:

                print(data['date'])

                article = EngNews(
                    title=data['title'],
                    content=data['content'],
                    date=json.loads(data['date']),
                    link=data['link'],
                    pic=data['pic'],
                    tag=data['tag'],
                )
                article.save()
        return HttpResponse(headers={'ok': 200})
    return HttpResponse(headers={'404': 404})























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