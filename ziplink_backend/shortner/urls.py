
from django.urls import path
from .views import *

urlpatterns = [
    path('create/', CreateShortURLView.as_view()),
    ]
#     path('bulk/', BulkShortenView.as_view()),
#     path('my/', UserURLsView.as_view()),
#     path('filter/', FilterURLView.as_view()),
#     path('detail/<int:pk>/', ShortURLDetailView.as_view()),
#     path('qr/<str:short_code>/', QRDownloadView.as_view()),
