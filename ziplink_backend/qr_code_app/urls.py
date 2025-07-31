from django.urls import path
from .views import URLQRCodeCreateView, QRCodeListView, QRCodeDetailView

urlpatterns = [
    path('create/', URLQRCodeCreateView.as_view(), name='qr-code-create'),
    path('list/', QRCodeListView.as_view(), name='qr-code-list'),
    # update and details
    path('<int:pk>/', QRCodeDetailView.as_view(), name='qr-code-detail'),
]
