from rest_framework import serializers
from .models import ShortenedURL

class ShortenedURLSerializer(serializers.ModelSerializer):
    click_count = serializers.IntegerField(source='clicks.count', read_only=True)  # Assuming there is a related `clicks` field
    created_at_time = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)  # Format the datetime

    class Meta:
        model = ShortenedURL
        fields = ['id', 'original_url', 'short_code', 'created_at_time', 'click_count']
        read_only_fields = ['short_code', 'created_at_time', 'click_count']
