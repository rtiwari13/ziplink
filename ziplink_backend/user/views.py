from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from .jwt_utils import  *
from .authentication import Authentication
from rest_framework import status, permissions

class RegisterView(APIView):
    def post(self,request):
        serializer = RegisterSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'User registered successfully'}, status=201)
        return Response(serializer.errors, status=400)
        
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            access = generate_access_token(user)
            refresh = generate_refresh_token(user)
            return Response({'access':access, 'refresh':refresh})
        return Response({'message':'invalid credentials'}, status=400)

class RefreshTokenView(APIView):
    def post(self, request):
        token = request.data.get('refresh')
        payload = decode_token(token)
        if not payload:
            return Response({'error':'Invalid or expired refresh token'},status=401)
        user = User.objects.filter(id=payload['user_id']).first()

        if not user :
            return Response({'error':'User not found'}, status=404)
        access = generate_access_token(user)
        return Response({'access':access})        

class ProfileView(APIView):
    authentication_classes = [Authentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class ChangePassword(APIView):
    authentication_classes = [Authentication]
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        old_password = request.data.get("old_password")
        new_password = request.data.get("new_password")

        if not request.user.check_password(old_password):
            return Response({"error":"Incorrect old password"}, status = 400)
        
        request.user.set_password(new_password)
        request.user.save()
        return Response({"message":"Password changed successfully"})



class DeleteAccountView(APIView):
    authentication_classes = [Authentication]
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request):
        request.user.delete()
        return Response({"message":"Account deleted"})


