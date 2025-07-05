from django.urls import path
from .views import *

urlpatterns = [
    path("signup/",RegisterView.as_view()),
    path("login/",LoginView.as_view()),
    # path('logout/', LogoutView.as_view(), name='logout'),
    path('change_password/', ChangePassword.as_view(), name = 'change_password'),
    # path('profile/edit/', EditProfileView.as_view(), name='edit-profile'),
    path("profile/view/",ProfileView.as_view()),
    path('account/delete/', DeleteAccountView.as_view(), name='delete-account'),
    path('refresh/', RefreshTokenView.as_view()),
]