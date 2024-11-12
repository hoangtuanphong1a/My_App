from django.shortcuts import render, redirect
from .forms import LoginForm, NewsForm
from django.shortcuts import render

def login(request):
    # Your login logic here
    return render(request, 'login.html')

def news_publish(request):
    # Your news publish logic here
    return render(request, 'news_publish.html')

def home(request):
    # Your home logic here
    return render(request, 'home.html')
def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            return redirect('home')  
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})

def news_publish(request):
    if request.method == 'POST':
        form = NewsForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home') 
    else:
        form = NewsForm()
    return render(request, 'news_publish.html', {'form': form})
