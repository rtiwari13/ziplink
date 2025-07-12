from rest_framework import serializers
from .models import ShortURL
from django.conf import settings

class ShortURLDetailSerializer(serializers.ModelSerializer):
    short_url = serializers.SerializerMethodField() 

    class Meta:
        model = ShortURL
        fields = [
            'id',
            'long_url',
            'short_code',
            'created_at',
            # 'expires_at',
            'is_custom',
            'clicks',
            'short_url'  # virtual field
        ]
        read_only_fields = ['user', 'short_code' , 'created_at' , 'clicks' ]

    def get_short_url(self, obj):
        return f"{settings.BASE_SHORT_DOMAIN}/{obj.short_code}/"