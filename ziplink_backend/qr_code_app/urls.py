from django.urls import path
from .views import URLQRCodeCreateView

urlpatterns = [
    path('generate_qr/', URLQRCodeCreateView.as_view(), name='generate_qr'),
]
