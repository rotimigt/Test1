from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from feature.models import Schedules
from rest_framework.permissions import IsAuthenticated
from .serializers import ScheduleSerializer
from django.http import HttpResponse
from django.template.loader import get_template

# Create your views here.


class ScheduleListView(ListAPIView):
    """
    This API/View Lists All Save Schedule.(user must be authenticated to consume this API)
    
    Request: GET
    
    ARGS: 
    
    Response: Json Response 
    """
    queryset = Schedules.objects.all()    
    permission_classes = [IsAuthenticated]
    serializer_class = ScheduleSerializer
    
    def get_queryset(self):
        return Schedules.objects.all()
    
    
def scheduleView(request):
    template = get_template('schedule.jinja')
    context = {
        'title': 'Schedule',
        'user': request.user,
    }
    return HttpResponse(template.render(context, request))
