from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    avatar = models.TextField(blank=True, null=True)
    bio = models.TextField(max_length=150,blank=True)
    contact = models.CharField(max_length=12 , blank=True)
    role = models.CharField(
        max_length=10,
        choices=[('admin','ADMIN'),('regular','REGULAR')],
        default='regular'
    )

    def __str__(self):
        return self.username
