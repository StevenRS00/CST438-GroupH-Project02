from django.db import models

# Create your models here.
class Item(models.Model):
    item_name = models.CharField(max_length=50)
    description = models.TextField(blank=True, max_length=250)
    image_url = models.URLField(blank=True, max_length=100)
    item_url = models.URLField(blank=True, max_length=100)

class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.TextField(max_length=30)
    fullname = models.URLField(max_length=50)
    is_admin = models.BooleanField(default=False)

class ItemList(models.Model):
    item_ids = models.ManyToManyField(Item)
    user_ids = models.ManyToManyField(User)