from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Item(models.Model):
    item_name = models.CharField(blank=False, max_length=50)
    description = models.TextField(blank=True, max_length=250)
    image_url = models.URLField(blank=True, max_length=100)
    item_url = models.URLField(blank=True, max_length=100)

class User(AbstractUser):
    fullname = models.CharField(max_length=50)
    is_admin = models.BooleanField(default=False)

class ItemList(models.Model):
    items = models.ManyToManyField(Item, blank=True)
    users = models.ManyToManyField(User, blank=True)
