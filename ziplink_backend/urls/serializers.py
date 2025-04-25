from rest_framework import serializers
from .models import ShortenedURL
from django.core.validators import URLValidator

class ShortenedURLSerializer(serializers.ModelSerializer):
    custom_code = serializers.CharField(
        max_length=10, 
        required=False,
        allow_blank=True,
        write_only=True
    )
    
    class Meta:
        model = ShortenedURL
        fields = ['original_url', 'custom_code', 'short_code', 'created_at']
        read_only_fields = ['short_code', 'created_at']

    def validate_original_url(self, value):
        validator = URLValidator()
        try:
            validator(value)
        except:
            raise serializers.ValidationError("Invalid URL format")
        return value

    def create(self, validated_data):
        custom_code = validated_data.pop('custom_code', None)
        
        if custom_code:
            if ShortenedURL.objects.filter(short_code=custom_code).exists():
                raise serializers.ValidationError("Custom code already exists")
            validated_data['short_code'] = custom_code
            
        return super().create(validated_data)