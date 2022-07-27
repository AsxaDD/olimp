from django import forms

class RegForm(forms.Form):
    username= forms.CharField(label='Your username', max_length=20, required=True)
    first_name = forms.CharField(label='First name', max_length=15, required=True)
    last_name = forms.CharField(label='Last name', max_length=20, required=True)
    password = forms.CharField(label='password', max_length=40, required=True)
    password2 = forms.CharField(label='password2', max_length=40, required=True)
    email = forms.EmailField(label='email', max_length=100, required=True)


class LoginForm(forms.Form):
    username = forms.CharField(label='Your username', max_length=20, required=True)
    password = forms.CharField(label='password', max_length=40, required=True)

