from django.contrib import admin
from .models import QRCode, QRScanAnalytics

@admin.register(QRCode)
class QRCodeAdmin(admin.ModelAdmin):
    list_display = ('id', 'link', 'created_at', 'expiry_at', 'total_scans', 'unique_scans')
    search_fields = ('link',)

    def total_scans(self, obj):
        return obj.scans.count()

    def unique_scans(self, obj):
        return obj.scans.values('ip_address').distinct().count()

@admin.register(QRScanAnalytics)
class QRScanAnalyticsAdmin(admin.ModelAdmin):
    list_display = ('qr_code', 'ip_address', 'user_agent', 'scanned_at')
    search_fields = ('qr_code__link', 'ip_address', 'user_agent')
