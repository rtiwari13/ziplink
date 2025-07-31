from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import ShortURLListSerializer

from shortener.models import ShortURL
from shortener.serializers import ShortURLDetailSerializer

from django.utils.timezone import now
from django.db import models

# return all short links created by the logged-in user
class UserLinksListView(APIView):
    # Only allow access if the user is logged in
    permission_classes = [IsAuthenticated]

    def get(self , request):
        user = request.user
        # Fetch all ShortURL objects created by this user
        # Sort them by creation time in descending order (latest first)
        urls = ShortURL.objects.filter(user=user).order_by('-created_at')

        # many=True means we're serializing a list, not a single object
        serializer = ShortURLListSerializer(urls,many=True)

        return Response(serializer.data)


class UserDashboardAnalyticsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        links = ShortURL.objects.filter(user=user)

        total_links = links.count()
        total_clicks = links.aggregate(total=models.Sum("clicks"))["total"] or 0

        most_clicked = links.order_by("-clicks").first()
        most_clicked_serialized = ShortURLDetailSerializer(most_clicked).data if most_clicked else None

        now_time = now()
        active_links = links.filter(models.Q(expires_at__isnull=True) | models.Q(expires_at__gt=now_time)).count()
        expired_links = total_links - active_links

        return Response({
            "total_links": total_links,
            "total_clicks": total_clicks,
            "most_clicked_link": most_clicked_serialized,
            "active_links": active_links,
            "expired_links": expired_links,
        })
