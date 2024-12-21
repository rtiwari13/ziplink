# views.py in dashboard app
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from urls.models import ShortenedURL
from .serializers import ShortenedURLSerializer

class DashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Fetch all URLs for the logged-in user
        urls = ShortenedURL.objects.filter(user=request.user)
        serializer = ShortenedURLSerializer(urls, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class URLDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, short_code):
        # Fetch a specific URL by its short_code
        try:
            url = ShortenedURL.objects.get(short_code=short_code, user=request.user)
        except ShortenedURL.DoesNotExist:
            return Response({"error": "URL not found"}, status=status.HTTP_404_NOT_FOUND)
        
        # Return detailed information
        serializer = ShortenedURLSerializer(url)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, short_code):
        # Delete a specific URL
        try:
            url = ShortenedURL.objects.get(short_code=short_code, user=request.user)
            url.delete()
            return Response({"message": "URL deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except ShortenedURL.DoesNotExist:
            return Response({"error": "URL not found"}, status=status.HTTP_404_NOT_FOUND)
