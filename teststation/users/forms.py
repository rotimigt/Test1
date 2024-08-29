from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from django.contrib import auth

from rest_framework import serializers
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(label="Email", required=True)
    password = serializers.CharField(label="Password", required=True, write_only=True)

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        user = authenticate(email=email, password=password)
        if not user:
            raise AuthenticationFailed('Invalid credentials')
        attrs['user'] = user
        return attrs

