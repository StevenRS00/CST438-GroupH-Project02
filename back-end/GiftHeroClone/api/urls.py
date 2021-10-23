from django.urls import path
from .views import *

urlpatterns = [
    path('login', LoginView.as_view()),
    path('adminlogin', AdminLoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('item', AllItemView.as_view()),
    path('item/<int:id>', SpecificItemView.as_view()),
    path('deleteitem/<int:id>', DeleteItemView.as_view()),
    path('createitem', CreateItemView.as_view()),
    path('updateitem/<int:id>', UpdateItemView.as_view()),
    path('user', AllUserView.as_view()),
    path('user/<int:id>', SpecificUserView.as_view()),
    path('deleteuser/<int:id>', DeleteUserView.as_view()),
    path('createuser', CreateUserView.as_view()),
    path('updateuser', UpdateUserView.as_view()),
    path('itemlist', AllItemListView.as_view()),
    path('itemlist/<int:id>', SpecificItemListView.as_view()),
    path('deleteitemlist/<int:id>', DeleteItemListView.as_view()),
    path('createitemlist', CreateItemListView.as_view()),
    path('additemtolist/list_id=<int:list_id>&item_id=<int:item_id>', AddItemToListView.as_view()),
]
