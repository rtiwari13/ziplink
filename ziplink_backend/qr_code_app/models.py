from django.db import models

class URLQRCode(models.Model):
    url = models.URLField()
    qr_code_base64 = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.url
