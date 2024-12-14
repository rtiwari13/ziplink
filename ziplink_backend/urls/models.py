from django.db import models
import string
import random

def generate_unique_short_code():
    """Generate a unique short code for the URL."""
    while True:
        short_code = ''.join(random.choices(string.ascii_letters + string.digits, k=8))
        # Check if the short code already exists
        if not ShortenedURL.objects.filter(short_code=short_code).exists():
            break
    return short_code

class ShortenedURL(models.Model):
    original_url = models.URLField(max_length=500)
    short_code = models.CharField(max_length=10, unique=True, default=generate_unique_short_code)
    created_at_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.short_code} -> {self.original_url}"
