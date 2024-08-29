from .views import *
from django.urls import path

urlpatterns = [
    path('schedules', ScheduleListView.as_view(), name= "schedules"),
    path('schedule-view', scheduleView, name="scheduleView"),
]