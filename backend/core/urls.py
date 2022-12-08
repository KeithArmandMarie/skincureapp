from django.urls import path
from .views import SetGuest
urlpatterns = [
    path('setGuest/',  SetGuest.as_view(), name='setGuest'),
]
