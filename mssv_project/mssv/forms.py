from django import forms
from .models import User_MSSV, News

class LoginForm(forms.Form):
    tendangnhap = forms.CharField(max_length=100)
    matkhau = forms.CharField(widget=forms.PasswordInput)

class NewsForm(forms.ModelForm):
    class Meta:
        model = News
        fields = ['title', 'body', 'image']
