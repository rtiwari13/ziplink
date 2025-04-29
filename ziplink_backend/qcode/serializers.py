from rest_framework import serializers
from .models import QRCode
from django.utils import timezone

class QRCodeCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = QRCode
        fields = (
            'id',
            'link',
            'foreground_color',
            'background_color',
            'dot_shape',
            'size',
            'watermark_text',
            'expiry_at',
        )

    def validate(self, data):
        expiry = data.get('expiry_at')
        if expiry and expiry <= timezone.now():
            raise serializers.ValidationError("Expiry date must be in the future.")
        return data

class QRCodeAnalyticsSerializer(serializers.ModelSerializer):
    total_scans = serializers.SerializerMethodField()
    unique_ips = serializers.SerializerMethodField()

    class Meta:
        model = QRCode
        fields = ('id', 'link', 'total_scans', 'unique_ips')

    def get_total_scans(self, obj):
        return obj.scans.count()

    def get_unique_ips(self, obj):
        return obj.scans.values('ip_address').distinct().count()
