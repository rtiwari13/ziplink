from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django.http import FileResponse
from django.utils import timezone
from .models import QRCode, QRScanAnalytics
from .serializers import QRCodeCreateSerializer, QRCodeAnalyticsSerializer
from .services import generate_qr_code_image

class QRCodeCreateView(generics.CreateAPIView):
    serializer_class = QRCodeCreateSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        qr_image = generate_qr_code_image(
            link=instance.link,
            foreground_color=instance.foreground_color or "#000000",
            background_color=instance.background_color or "ffffff",
            dot_shape=instance.dot_shape or "Square",
            size=instance.size or "10",
            watermark_text=instance.watermark_text or "ziplink",
        )
        instance.qr_code_image.save(f"qr_{instance.id}.png", qr_image)
        instance.save()

class QRCodePreviewView(APIView):
    def get(self, request, pk):
        qr_code = get_object_or_404(QRCode, pk=pk)
        if qr_code.is_expired():
            return Response({"error": "QR Code has expired."}, status=status.HTTP_410_GONE)
        return FileResponse(qr_code.qr_code_image, content_type='image/png')

class QRCodeDownloadView(APIView):
    def get(self, request, pk):
        qr_code = get_object_or_404(QRCode, pk=pk)
        if qr_code.is_expired():
            return Response({"error": "QR Code has expired."}, status=status.HTTP_410_GONE)
        response = FileResponse(qr_code.qr_code_image, content_type='application/octet-stream')
        response['Content-Disposition'] = f'attachment; filename="qr_{qr_code.id}.png"'
        return response

class QRCodeScanView(APIView):
    def post(self, request, pk):
        qr_code = get_object_or_404(QRCode, pk=pk)
        if qr_code.is_expired():
            return Response({"error": "QR Code has expired."}, status=status.HTTP_410_GONE)
        
        ip = self.get_client_ip(request)
        user_agent = request.META.get('HTTP_USER_AGENT', '')

        QRScanAnalytics.objects.create(
            qr_code=qr_code,
            ip_address=ip,
            user_agent=user_agent
        )
        return Response({"message": "Scan recorded successfully."})

    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip

class QRCodeAnalyticsView(generics.RetrieveAPIView):
    serializer_class = QRCodeAnalyticsSerializer
    queryset = QRCode.objects.all()
