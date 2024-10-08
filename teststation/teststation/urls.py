"""
URL configuration for teststation project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.conf import settings
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="Teststation APIs",
        default_version='v1',
        description="Frontend skillset test",
        terms_of_service="https://teststation/policies/terms/",
        contact=openapi.Contact(email="rotimi.gt@anamo.io"),
        license=openapi.License(name="Teststation License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('users.urls')),
    path('', include('feature.urls')),
    path('apis', schema_view.with_ui('swagger', cache_timeout=5), name='schema-swagger-ui'),
    path('api/api.json/', schema_view.without_ui(cache_timeout=5), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=5), name='schema-redoc'),
]
