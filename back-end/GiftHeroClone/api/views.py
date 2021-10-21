from django.shortcuts import render
from rest_framework import generics, status
from .serializers import ItemSerializer, UserSerializer, ItemListSerializer
from .models import Item, User, ItemList
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class AllItemView(generics.CreateAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
    def get(self, request, *args, **kwargs):
        queryset = Item.objects.all()
        data = ItemSerializer(queryset, many=True).data
        return Response(data, status=200)
    
class SpecificItemView(generics.CreateAPIView):
    serializer_class = ItemSerializer
    def get(self, request, id=0):
        try:
            queryset = Item.objects.get(id=id)
            data = ItemSerializer(queryset).data
            return Response(data, status=200)
        except Item.DoesNotExist:
            return Response(status=404)

class DeleteItemView(APIView):
    serializer_class = ItemSerializer
    def post(self, request, id=0):
        try:
            queryset = Item.objects.get(id=id)
            queryset.delete()
            return Response(status=200)
        except Item.DoesNotExist:
            return Response(status=404)            

class UserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    def get(self, request, *args, **kwargs):
        queryset = User.objects.all()
        data = UserSerializer(queryset, many=True).data
        return Response(data, status=200)

class ItemListView(generics.CreateAPIView):
    serializer_class = ItemListSerializer
    queryset = ItemList.objects.all()
    def get(self, request, *args, **kwargs):
        queryset = ItemList.objects.all()
        data = ItemListSerializer(queryset, many=True).data
        return Response(data, status=200)
