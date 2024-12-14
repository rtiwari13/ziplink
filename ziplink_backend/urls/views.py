from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework import status
from django.shortcuts import get_object_or_404, redirect
from .models import ShortenedURL
from .serializers import ShortenedURLSerializer

class ShortenURLView(APIView):
    def post(self,request):
        serializer = ShortenedURLSerializer(data=request.data)
        if serializer.is_valid():
            shortened_url = serializer.save()
            return Response({
                "original_url":shortened_url.original_url,
                "short_code":shortened_url.short_code,
            },
            status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class RedirectView(APIView):
    def get(self,request, short_code):
        shortened_url = get_object_or_404(ShortenedURL,short_code=short_code)
        return redirect(shortened_url.original_url)
    
    