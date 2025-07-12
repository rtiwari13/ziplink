from django.db import models
from user.models import User

class ShortURL(models.Model):
    
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name='short_urls', null=True, blank=True)

    # original long URL
    long_url = models.URLField()
    short_code = models.CharField(max_length=15, unique=True)
    created_at = models.DateTimeField(auto_now_add = True)
    is_custom = models.BooleanField(default=False)
    
    # user-provided custom short code (if any)
    custom_code = models.CharField(max_length=20,blank=True,null=True)
    clicks = models.PositiveBigIntegerField(default=0)
    
    # qr_code = models.

    def __str__(self):
        return self.short_code