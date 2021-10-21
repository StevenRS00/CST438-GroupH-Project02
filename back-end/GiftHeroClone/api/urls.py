from django.urls import path
from .views import *

urlpatterns = [
    path('item', AllItemView.as_view()),
    path('item/<int:id>', SpecificItemView.as_view()),
    path('deleteitem/<int:id>', DeleteItemView.as_view()),
    path('createitem', CreateItemView.as_view()),
    path('user', AllUserView.as_view()),
    path('user/<int:id>', SpecificUserView.as_view()),
    path('deleteuser/<int:id>', DeleteUserView.as_view()),
    path('createuser', CreateUserView.as_view()),
    path('itemlist', AllItemListView.as_view()),
    path('itemlist/<int:id>', SpecificItemListView.as_view()),
    path('deleteitemlist/<int:id>', DeleteItemListView.as_view()),
]
