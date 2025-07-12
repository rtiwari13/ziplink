from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from shortener.models import ShortURL
from .serializers import ShortURLListSerializer

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
