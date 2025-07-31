import random, string
from rest_framework.views import APIView
from .models import ShortURL
from rest_framework.response import Response
from .serializers import ShortURLDetailSerializer
from django.shortcuts import redirect, get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError


# Create short codes
def generate_short_code(length=6):
    return "".join(random.choices(string.ascii_letters + string.digits, k=length))
    # random.choices: returns a list of randomly chosen characters


# API endpoint to create a new shortened URL
class CreateShortURLView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Extract the long/original URL from request payload
        long_url = request.data.get("long_url")

        # if user-provided custom short code
        custom_code = request.data.get("custom_code")

        if custom_code:
            if ShortURL.objects.filter(short_code=custom_code).exists():
                return Response(
                    {"error": "Custom short code already exists try something else"},
                    status=400,
                )

            short_code = custom_code

        else:
            short_code = generate_short_code()

            while ShortURL.objects.filter(short_code=short_code).exists():
                short_code = generate_short_code()

        # Create and save the new ShortURL instance in DB
        short_url = ShortURL.objects.create(
            user=request.user if request.user.is_authenticated else None,
            long_url=long_url,
            short_code=short_code,
            is_custom=bool(custom_code),
            custom_code=custom_code if custom_code else None,
        )

        serializer = ShortURLDetailSerializer(short_url, context={"request": request})

        return Response(serializer.data)


# redirect to original url
def redirect_to_original(request, short_code):
    short_url = get_object_or_404(ShortURL, short_code=short_code)
    short_url.clicks += 1
    short_url.save()
    return redirect(short_url.long_url)


class ShortURLDetailsView(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk, user):
        return get_object_or_404(ShortURL, pk=pk, user=user)

    #  retrieve details of a specific short UR
    def get(self, request, pk):
        #  fetch the short URL object by its ID and user
        short_url = self.get_object(pk, request.user)
        serializer = ShortURLDetailSerializer(short_url)
        return Response(serializer.data)

    def put(self, request, pk):
        short_url = self.get_object(pk, request.user)
        # Initialize serializer with new data
        # partial=True allows updating only specific fields
        serializer = ShortURLDetailSerializer(
            short_url, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_404_BAD_REQUEST)

    def delete(self, request, pk):
        # Fetch the short URL object to ensure it exists and is owned by the current user
        short_url = self.get_object(pk, request.user)
        # Delete the short URL object from the database
        short_url.delete()
        return Response(
            {"message": "Short link deleted successfully"},
            status=status.HTTP_204_NO_CONTENT,
        )


class BulkUploadView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        urls = request.data.get("urls", [])
        response_data = []

        # Check if `urls` is not a list OR it's an empty list
        if not isinstance(urls, list) or not urls:
            return Response(
                {"details": "Please provide a non-empty list of urls"}, status=400
            )

        # Initialize an empty list to store successfully created ShortURL objects
        created_links = []

        # validate each URL
        validator = URLValidator()

        for long_url in urls:
            try:
                validator(long_url)
            except ValidationError:
                continue

            short_code = generate_short_code()

            # Create a new ShortURL object in the database 
            short_url = ShortURL.objects.create(
            user=request.user, long_url=long_url, short_code=short_code
            )

            created_links.append(short_url)
        serializer = ShortURLDetailSerializer(created_links, many = True)
        # Returns the list of successfully created short links in the response
        return Response(serializer.data, status=status.HTTP_201_CREATED)