from rest_framework import  serializers
from .models import Item, User, ItemList

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'item_name', 'description', 'image_url', 'item_url')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'fullname', 'is_admin')

class ItemListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemList
        fields = ('id', 'items', 'users')
