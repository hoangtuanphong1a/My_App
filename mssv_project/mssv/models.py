from django.db import models

class User_MSSV(models.Model):
    tendangnhap = models.CharField(max_length=100)
    matkhau = models.CharField(max_length=100)

class News(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    image = models.ImageField(upload_to='news_images/')
    

