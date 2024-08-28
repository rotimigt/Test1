from django import forms


class LoginForm(forms.Form):
    email = forms.CharField(label=_("Email"), required=True)
    password= username = forms.CharField(label=_("Password"), required=True)
