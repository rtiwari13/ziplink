from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Profile

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    name = serializers.CharField(write_only=True)
    mobile_no = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'name', 'mobile_no']

    def create(self, validated_data):
        # Extract profile-related fields
        name = validated_data.pop('name', None)
        mobile_no = validated_data.pop('mobile_no', None)

        # Create the user
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )

        # Ensure profile is created and linked to user
        profile, created = Profile.objects.get_or_create(user=user)
        profile.name = name
        profile.mobile_no = mobile_no
        profile.save()

        return user
