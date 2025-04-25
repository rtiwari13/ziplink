from django.urls import path
from .views import ShortenURLCreateView, RedirectOriginalView

urlpatterns = [
    path('shorten/', ShortenURLCreateView.as_view(), name='shorten-url'),
    path('<str:short_code>/', RedirectOriginalView.as_view(), name='redirect'),
]