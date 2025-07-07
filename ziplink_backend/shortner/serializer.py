from rest_framework import serializers
from .models import ShortURL
from django.conf import settings

class ShortURLSerializer(serializers.ModelSerializer):
    short_url = serializers.SerializerMethodField() 
    class Meta:
        model = ShortURL
        fields = '__all__'
        read_only_fields = ['user', 'short_code' , 'created_at' , 'clicks' ]

    def get_short_url(self, obj):
        return f"{settings.BASE_SHORT_DOMAIN}/{obj.short_code}/"