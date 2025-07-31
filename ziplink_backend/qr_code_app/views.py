from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from django.shortcuts import get_object_or_404

from .models import URLQRCode
from .serializers import URLQRCodeSerializer

# Create QR code
class URLQRCodeCreateView(generics.CreateAPIView):
    queryset = URLQRCode.objects.all()
    serializer_class = URLQRCodeSerializer

# List all QR codes
class QRCodeListView(generics.ListAPIView):
    queryset = URLQRCode.objects.all()
    serializer_class = URLQRCodeSerializer

# Retrieve, Update, Delete QR by ID
class QRCodeDetailView(APIView):
    def get(self, request, pk):
        qr = get_object_or_404(URLQRCode, pk=pk)
        serializer = URLQRCodeSerializer(qr)
        return Response(serializer.data)

    def put(self, request, pk):
        qr = get_object_or_404(URLQRCode, pk=pk)
        serializer = URLQRCodeSerializer(qr, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()  # update handles QR regeneration
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        qr = get_object_or_404(URLQRCode, pk=pk)
        qr.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
