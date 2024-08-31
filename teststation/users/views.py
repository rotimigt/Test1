from rest_framework import generics, status
from django.contrib.auth import login
from rest_framework.response import Response
from django.http import Http404, HttpResponseRedirect
from users.forms import LoginSerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.shortcuts import render,reverse,redirect
from django.http import HttpResponseRedirect
from django.contrib.auth import logout
from django.views.generic import ListView
from feature.models import Schedules


@method_decorator(csrf_exempt, name='dispatch')
class Login(generics.GenericAPIView):
    """
    USER LOGIN VIEW

    REQUEST TYPE: POST

    PARAMETER : data = {
        'email': 'email',
        'password': 'password',
    }

    POST REQUEST: http://127.0.0.1:8000/apis/login/
    DATA: {'email': 'email', 'password': 'password'}

    RESPONSE: {
        "Success": True
    }

    STATUS_CODE: HTTP_200_OK
    """
    serializer_class = LoginSerializer
    template_name = 'index.html'
    def get(self, request, *args, **kwargs):
        
        if request.user.is_authenticated:
            return redirect(reverse('schedule_list'))
            
        form = self.get_serializer()
        context = {"form": form}
        return render(request, self.template_name, context=context)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return redirect(reverse('schedule_list'))

def logout_view(request):
    if request.user.is_authenticated:
        logout(request)
    return redirect(reverse('login'))

class ScheduleListView(ListView):
    """
    SCHEDULE LIST VIEW

    REQUEST TYPE: GET


    GET REQUEST: http://127.0.0.1:8000/apis/schedule-list/

    RESPONSE: listofschedule

    STATUS_CODE: HTTP_200_OK
    """

    model = Schedules
    template_name = 'schedule_list.html'
    context_object_name = 'schedules'

    def get(self, request, *args, **kwargs):

        schedules = Schedules.objects.all() 
        context = {"schedules": schedules}
        return render(request, self.template_name, context=context)
