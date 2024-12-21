from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from .serializers import SignupSerializer
from .authentication import *


class SignupView(APIView):
    """
    Handles user registration (signup).
    """
    def post(self, request):
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()  # Save user and trigger profile creation via signals
            return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    """
    Handles user login and JWT token generation.
    """
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # Authenticate the user
        user = authenticate(username=username, password=password)
        if user:
            token = generate_jwt(user)
            return Response({"token": token}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

class ProfileView(APIView):
    """
    Fetches the user's profile.
    Requires authentication via JWT token.
    """
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        profile = request.user.profile  # Access related profile
        return Response({
            "username": request.user.username,
            "email": request.user.email,
            "name": profile.name,  
            "mobile_no": profile.mobile_no,  
        }, status=status.HTTP_200_OK)
