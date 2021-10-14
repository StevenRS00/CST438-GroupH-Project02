from django.urls import path
from .views import *

urlpatterns = [
    path('items', ItemView.as_view()),
    path('item/<int:id>', SpecificItemView.as_view()),
    path('deleteitem/<int:id>', SpecificItemView.as_view()),
    path('user', UserView.as_view()),
    path('itemlist', ItemListView.as_view()),
]
