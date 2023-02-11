from django.contrib.auth.forms import *
from django.urls import path, re_path
from django.contrib.auth import views as auth_views
from main import views

urlpatterns = [

    path('user/', views.TEST__USER, name='user'),
    path('AsxaD4/', views.TEST__USER, name='user'),
    path('register/', views.regView, name='register'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('login/', auth_views.LoginView.as_view(), name='login'),

    # path('password_change/', auth_views.PasswordChangeView.as_view(
    #     template_name="main/change_password.html",
    #     form_class=PasswordChangeForm,
    # ), name='change_pass'),

    path('password-reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),

    path('password-reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),

    path('password-reset-confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),

    path('password-reset-complete/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
]
