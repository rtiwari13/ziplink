
from rest_framework import generics
from .models import URLQRCode
from .serializers import URLQRCodeSerializer

class URLQRCodeCreateView(generics.CreateAPIView):
    queryset = URLQRCode.objects.all()
    serializer_class = URLQRCodeSerializer
