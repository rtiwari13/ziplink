# urls.py in dashboard app
from django.urls import path
from .views import DashboardView, URLDetailView

urlpatterns = [
    path('urls/', DashboardView.as_view(), name='dashboard'),
    path('urls/<str:short_code>/', URLDetailView.as_view(), name='url-detail'),
]

