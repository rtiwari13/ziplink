from rest_framework import serializers 
from .models import User
from django.contrib.auth import authenticate

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','email','password']
        extra_kwargs = {'password':{'write_only':True}}
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    def validate(self , data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid credentials")
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username' , 'email' , 'bio' , 'avatar', 'contact' , 'role']