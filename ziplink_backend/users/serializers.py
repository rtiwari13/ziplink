from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers
from .utils import generate_jwt

User = get_user_model()

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    token = serializers.SerializerMethodField()

    def validate(self, data):
        user = authenticate(
            username=data['username'],
            password=data['password']
        )
        if not user:
            raise serializers.ValidationError("Invalid credentials")
        self.context['user'] = user
        return data

    def get_token(self, obj):
        user = self.context['user']
        return generate_jwt(user)
