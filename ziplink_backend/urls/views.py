from rest_framework import generics
from django.shortcuts import get_object_or_404, redirect
from rest_framework.response import Response
from .models import ShortenedURL
from .serializers import ShortenedURLSerializer

class ShortenURLCreateView(generics.CreateAPIView):
    queryset = ShortenedURL.objects.all()
    serializer_class = ShortenedURLSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        return Response({
            'short_url': request.build_absolute_uri(
                f'/{response.data["short_code"]}'
            ),
            'original_url': response.data['original_url'],
            'created_at': response.data['created_at']
        })

class RedirectOriginalView(generics.GenericAPIView):
    def get(self, request, short_code):
        url_obj = get_object_or_404(ShortenedURL, short_code=short_code)
        return redirect(url_obj.original_url)