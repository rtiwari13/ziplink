from rest_framework import serializers
from shortener.models import ShortURL

class ShortURLListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortURL
        fields = [
            'id',
            'long_url',
            'short_code',
            'created_at',
            'expires_at',
            'is_custom',
            'clicks'    
        ]