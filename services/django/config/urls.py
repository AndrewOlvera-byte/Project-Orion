from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse


def health(_):
    return JsonResponse({"status": "ok"})


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/health/', health, name='health'),
    path('api/accounts/', include('accounts.urls')),
    path('api/tickets/', include('tickets.urls')),
]

