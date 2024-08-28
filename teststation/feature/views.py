from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from feature.models import Schedules
from rest_framework.permissions import IsAuthenticated
from .serializers import ScheduleSerializer

# Create your views here.


class ScheduleListView(ListAPIView):
    queryset = Schedules.objects.all()    
    permission_classes = [IsAuthenticated]
    serializer_class = ScheduleSerializer
    
    def get_queryset(self):
        return self.queryset
    
    
