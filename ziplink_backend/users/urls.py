from django.urls import path
from .views import SignupView, LoginView, ProfileView

urlpatterns = [
    path('auth/signup/', SignupView.as_view(), name='signup'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/profile/', ProfileView.as_view(), name='profile'),
]
