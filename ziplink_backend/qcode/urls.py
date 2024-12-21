from django.urls import path
from .views import QRCodeView

urlpatterns = [
    path('<str:short_code>/', QRCodeView.as_view(), name='generate-qrcode'),
]
