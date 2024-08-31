from .views import *
from django.urls import path

urlpatterns = [
    path('login/', Login.as_view(), name= "login"),
     path('schedule-list/', ScheduleListView.as_view(), name='schedule_list'),
     path('logout/', logout_view, name='logout')
]