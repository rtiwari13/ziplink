from django.contrib.auth import logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer, LoginSerializer
from .utils import decode_jwt

class SignupView(APIView):
    def post(self, request):
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User created successfully!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            token = serializer.get_token(serializer.validated_data)
            return Response({'token': token}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfileView(APIView):
    def get(self, request):
        token = request.headers.get("Authorization", "").split("Bearer ")[-1]
        payload = decode_jwt(token)
        if "error" in payload:
            return Response({'error': payload["error"]}, status=status.HTTP_401_UNAUTHORIZED)
        return Response({'user': payload}, status=status.HTTP_200_OK)
