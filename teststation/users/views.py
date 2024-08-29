from django.shortcuts import render
from django.views import View
from django.contrib.auth import authenticate, login, logout
from users import forms as dj_forms
from django.http import JsonResponse

# Create your views here.

class Login(View):
    """
    This View Handles Authenticating the User
    
    args: email: user email, password: user password
    
    response: Success message
    """
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return JsonResponse({"success":True})

        form = dj_forms.LoginForm()
        context = {"form": form}
        return render(request, context=context)

    def post(self, request, *args, **kwargs):
        form = dj_forms.LoginForm(data=request.POST)
        if form.is_valid():
            if form.user_cache is not None:
                user = form.user_cache
                if user.is_active:
                    login(request, user)
                    return JsonResponse({"success": True})
                else:
                    return JsonResponse({"success": False, "error": "User has been deactivated"})
            else:
                return JsonResponse({"success": False, "error": "Username or password is incorrect"})
        else:
            # Form validation failed
            return JsonResponse({"success": False, "error": "Username or password is incorrect"})