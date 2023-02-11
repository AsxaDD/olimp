from django.contrib.auth.models import User


class DataMixin:
    def get_user_context(self, **kwargs):
        context = kwargs
        users = User.objects.all()
        context['users'] = users
        return context