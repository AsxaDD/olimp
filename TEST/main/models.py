from django.contrib.auth.models import User

from django.db import models

# Create your models here.

class MyUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    acmp_id = models.CharField(max_length=6)
    user_groups = models.JSONField(null=True)
    solved_problems = models.JSONField(null=True)
    quantity_of_solved_problems = models.IntegerField(null=True)

    def __str__(self):
        return self.acmp_id