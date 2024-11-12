from django.urls import path
from django.contrib import admin
from django.shortcuts import redirect  # Import redirect
from . import views  # Import views

urlpatterns = [
    path('', lambda request: redirect('login'), name='home'),  # Redirect to login
    path('admin/', admin.site.urls),  # Admin URL
    path('login/', views.login, name='login'),  # Login URL
    path('news_publish/', views.news_publish, name='news_publish'),  # News publish URL
    path('home/', views.home, name='home'),  # Home URL
]