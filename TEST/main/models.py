from django.contrib.auth.models import User

from django.db import models

# Create your models here.

class MyUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    acmp_id = models.CharField(max_length=6, null=True)
    user_groups = models.JSONField(null=True)
    solved_problems = models.JSONField(null=True)
    quantity_of_solved_problems = models.IntegerField(null=True)

    def __str__(self):
        return self.acmp_id


class Events(models.Model):
    events = models.JSONField(null=True)


class EngNews(models.Model):
    title = models.CharField(max_length=360, null=True)
    content = models.TextField(null=True)
    date = models.JSONField(null=True)
    pic = models.TextField(null=True)
    link = models.CharField(max_length=100, null=True)
    tag = models.CharField(max_length=100, null=True)

class RuNews(models.Model):
    title = models.CharField(max_length=360, null=True)
    content = models.TextField(null=True)
    date = models.JSONField(null=True)
    pic = models.TextField(null=True)
    link = models.CharField(max_length=100, null=True)
    tag = models.CharField(max_length=100, null=True)
