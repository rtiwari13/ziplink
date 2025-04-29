from django.urls import path
from .views import (
    QRCodeCreateView,
    QRCodePreviewView,
    QRCodeDownloadView,
    QRCodeScanView,
    QRCodeAnalyticsView,
)

urlpatterns = [
    path('create/', QRCodeCreateView.as_view(), name='qr-create'),
    path('<int:pk>/preview/', QRCodePreviewView.as_view(), name='qr-preview'),
    path('<int:pk>/download/', QRCodeDownloadView.as_view(), name='qr-download'),
    path('<int:pk>/scan/', QRCodeScanView.as_view(), name='qr-scan'),
    path('<int:pk>/analytics/', QRCodeAnalyticsView.as_view(), name='qr-analytics'),
]
