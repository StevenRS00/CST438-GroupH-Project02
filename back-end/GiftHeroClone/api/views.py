from django.db.models import query
from django.shortcuts import render
from rest_framework import generics, status
from .serializers import ItemSerializer, UserSerializer, ItemListSerializer
from .models import Item, User, ItemList
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import update_session_auth_hash
# Create your views here.

class LoginView(generics.CreateAPIView):
    serializer_class = UserSerializer
    def post(self, request):
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({"Success": "User is logged in"}, status=200)
        else:
            return Response({"Error": "No user found"}, status=401)

class LogoutView(generics.CreateAPIView):
    serializer_class = UserSerializer
    def post(self, request):
        logout(request)
        return Response(status=200)

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
    def delete(self, request, id=0):
        try:
            queryset = Item.objects.get(id=id)
            queryset.delete()
            return Response(status=200)
        except Item.DoesNotExist:
            return Response(status=404)


class CreateItemView(APIView):
    serializer_class = ItemSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            item_name = serializer.data.get('item_name')
            description = serializer.data.get('description')
            image_url = serializer.data.get('image_url')
            item_url = serializer.data.get('item_url')
            id = serializer.data.get('id')
            queryset = Item.objects.filter(id=id)
            if queryset.exists():
                return Response({'Content': 'Account already exists'}, status=403)
            else:
                item = Item(item_name=item_name, description=description,
                            image_url=image_url, item_url=item_url)
                item.save()
                return Response(ItemSerializer(item).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class UpdateItemView(APIView):
    serializer_class = ItemSerializer
    def patch(self, request, format=None, id=0):
        item_name = request.data['item_name']
        description = request.data['description']
        image_url = request.data['image_url']
        item_url = request.data['item_url']
        queryset = Item.objects.filter(id=id)
        if queryset.exists():
            item = Item.objects.get(id=id)
            item.item_name = item_name
            item.description = description
            item.image_url = image_url
            item.item_url = item_url
            item.save()
            return Response({'Success': 'Item successfully updated'}, status=200)
        else:
            return Response({'Does Not Exist': 'Item does not exist'}, status=404)            

class AllUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    def get(self, request, *args, **kwargs):
        queryset = User.objects.all()
        data = UserSerializer(queryset, many=True).data
        return Response(data, status=200)

class SpecificUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    def get(self, request, id=0):
        try:
            queryset = User.objects.get(id=id)
            data = UserSerializer(queryset).data
            print(data)
            return Response(data, status=200)
        except User.DoesNotExist:
            return Response(status=404)

class DeleteUserView(APIView):
    serializer_class = UserSerializer
    def delete(self, request, id=0):
        try:
            queryset = User.objects.get(id=id)
            queryset.delete()
            return Response(status=200)
        except User.DoesNotExist:
            return Response(status=404)

class CreateUserView(APIView):
    serializer_class = UserSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            fullname = serializer.data.get('fullname')
            queryset = User.objects.filter(username=username)
            if queryset.exists():
                return Response({'Content': 'Account already exists'}, status=403)
            else:
                user = User.objects.create_user(username=username, password=password,
                            fullname=fullname)
                user.save()
                return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)  

class UpdateUserView(APIView):
    serializer_class = UserSerializer
    def patch(self, request, format=None):
        id=request.user.id
        username = request.data['username']
        password = request.data['password']
        fullname = request.data['fullname']
        queryset = User.objects.filter(id=id)
        if queryset.exists():
            user = User.objects.get(id=id)
            user.username = username
            user.set_password(password)
            user.fullname = fullname
            user.save()
            update_session_auth_hash(request, user)
            return Response({'Success': 'Account successfully updated'}, status=200)
        else:
            return Response({'Does Not Exist': 'User does not exist'}, status=404)

class AllItemListView(generics.CreateAPIView):
    serializer_class = ItemListSerializer
    queryset = ItemList.objects.all()
    def get(self, request, *args, **kwargs):
        queryset = ItemList.objects.all()
        data = ItemListSerializer(queryset, many=True).data
        return Response(data, status=200)

class SpecificItemListView(generics.CreateAPIView):
    serializer_class = ItemListSerializer
    def get(self, request, id=0):
        try:
            queryset = ItemList.objects.get(id=id)
            data = ItemListSerializer(queryset).data
            return Response(data, status=200)
        except ItemList.DoesNotExist:
            return Response(status=404)

class DeleteItemListView(APIView):
    serializer_class = ItemListSerializer
    def delete(self, request, id=0):
        try:
            queryset = ItemList.objects.get(id=id)
            queryset.delete()
            return Response(status=200)
        except ItemList.DoesNotExist:
            return Response(status=404) 

class CreateItemListView(APIView):
    serializer_class = ItemListSerializer
    user_serializer_class = UserSerializer
    def post(self, request, format=None):  
        try:
            id = request.user.id
            user = User.objects.get(id=id)
            item_list = ItemList.objects.create()
            item_list.users.add(user)
            item_list.save()
            return Response(ItemListSerializer(item_list).data, status=status.HTTP_201_CREATED)
        except User.DoesNotExist:
            return Response({'Does Not Exist': 'User does not exist'},status=404) 