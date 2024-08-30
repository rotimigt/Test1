from rest_framework import generics, status
from django.contrib.auth import login
from rest_framework.response import Response
from users.forms import LoginSerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.template import engines
from django.http import HttpResponse
from django.middleware.csrf import get_token
from django.template.loader import get_template

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

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response({'Success': True}, status=status.HTTP_200_OK)


def loginForm(request):
    template = get_template('index.jinja')
    csrf_token = get_token(request)
    context = {
        'title': 'Login Form',
        'csrf_token': csrf_token,
    }
    return HttpResponse(template.render(context, request))
