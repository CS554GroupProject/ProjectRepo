from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)

class UserRequest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    request = models.TextField()