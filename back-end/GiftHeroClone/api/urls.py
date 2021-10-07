from django.urls import path
from .views import ItemView, UserView, ItemListView

urlpatterns = [
    path('item', ItemView.as_view()),
    path('user', UserView.as_view()),
    path('itemlist', ItemListView.as_view()),
]
