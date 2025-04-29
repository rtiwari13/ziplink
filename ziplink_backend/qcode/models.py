from django.db import models
from django.utils import timezone
import uuid

class QRCode(models.Model):
    DOT_SHAPES = [
        ('square', 'Square'),
        ('circle', 'Circle'),
        ('rounded', 'Rounded'),
    ]

    link = models.URLField()
    qr_code_image = models.ImageField(upload_to='qrcodes/')
    foreground_color = models.CharField(max_length=7, default="#000000", blank=True, null=True)  
    background_color = models.CharField(max_length=7, default="#ffffff", blank=True, null=True)
    dot_shape = models.CharField(max_length=10, choices=DOT_SHAPES, default='square', blank=True)
    size = models.PositiveIntegerField(default=10, blank=True)  # scale size
    watermark_text = models.CharField(max_length=50, blank=True, null=True)
    expiry_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)

    def is_expired(self):
        return self.expiry_at and timezone.now() > self.expiry_at

    def __str__(self):
        return f"QR Code for {self.link}"

class QRScanAnalytics(models.Model):
    qr_code = models.ForeignKey(QRCode, related_name="scans", on_delete=models.CASCADE)
    scanned_at = models.DateTimeField(auto_now_add=True)
    user_agent = models.TextField()
    ip_address = models.GenericIPAddressField()

    def __str__(self):
        return f"Scan of {self.qr_code.link} at {self.scanned_at}"
