from django.shortcuts import render
from rest_framework import generics
from .serializers import ItemSerializer, UserSerializer, ItemListSerializer
from .models import Item, User, ItemList

# Create your views here.

class ItemView(generics.CreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ItemListView(generics.CreateAPIView):
    queryset = ItemList.objects.all()
    serializer_class = ItemListSerializer
    