from rest_framework import serializers
from .models import URLQRCode
from .utils import generate_qr_code_base64

class URLQRCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = URLQRCode
        fields = ['id', 'url', 'qr_code_base64', 'created_at']
        read_only_fields = ['qr_code_base64', 'created_at']

    def create(self, validated_data):
        url = validated_data['url']
        qr_base64 = generate_qr_code_base64(url)
        validated_data['qr_code_base64'] = qr_base64
        return super().create(validated_data)
