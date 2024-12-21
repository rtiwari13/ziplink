import qrcode
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from urls.models import ShortenedURL
from rest_framework.views import APIView

class QRCodeView(APIView):
    """
    Generates a QR code for a shortened URL based on the provided short_code.
    Enables the user to download the QR code in different formats (e.g., PNG, JPEG).
    """

    def get(self, request, short_code, *args, **kwargs):
        # Retrieve the shortened URL object using the short_code
        shortened_url = get_object_or_404(ShortenedURL, short_code=short_code)

        # Generate the QR code image from the original URL
        img = qrcode.make(shortened_url.original_url)

        # Get file format from query params (default to PNG)
        file_format = request.GET.get('format', 'png').lower()

        if file_format not in ['png', 'jpeg', 'jpg']:
            return HttpResponse("Invalid file format", status=400)

        # Set the response as the chosen image format
        response = HttpResponse(content_type=f'image/{file_format}')
        
        # Set the content-disposition header for download
        response['Content-Disposition'] = f'attachment; filename="qrcode.{file_format}"'

        # Save the image in the chosen format (PNG or JPEG)
        img.save(response, file_format.upper())
        return response
