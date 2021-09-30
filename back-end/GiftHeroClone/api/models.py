from django.db import models

# Create your models here.
class Item(models.Model):
    item_name = models.CharField(max_length=50)
    description = models.TextField(max_length=250)
    image_url = models.URLField(blank=True, max_length=100)
    item_url = models.URLField(blank=True, max_length=100)

class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.TextField(max_length=30)
    fullname = models.TextField(max_length=50)
    is_admin = models.BooleanField(default=False)

class ItemList(models.Model):
    items = models.ManyToManyField(Item)
    users = models.ManyToManyField(User)