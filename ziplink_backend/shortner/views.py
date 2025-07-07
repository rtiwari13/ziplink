import random , string
from rest_framework.views import APIView
from .models import ShortURL
from rest_framework.response import Response
from .serializer import ShortURLSerializer
from django.shortcuts import redirect, get_object_or_404

# Create short codes 
def generate_short_code(length=6):
    return ''.join(random.choices(string.ascii_letters+string.digits , k=length))
    # random.choices: returns a list of randomly chosen characters

# API endpoint to create a new shortened URL
class CreateShortURLView(APIView):
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        # Extract the long/original URL from request payload
        long_url = request.data.get('long_url')

         # if user-provided custom short code
        custom_code = request.data.get('custom_code')

        if custom_code:
            if ShortURL.objects.filter(short_code=custom_code).exists():
                return Response ({'error': 'Custom short code already exists try something else'}, status = 400)

            short_code = custom_code

        else :
            short_code = generate_short_code()

            while ShortURL.objects.filter(short_code = short_code).exists():
                short_code = generate_short_code()

        # Create and save the new ShortURL instance in DB
        short_url = ShortURL.objects.create(
            user = request.user if request.user.is_authenticated else None,
            long_url = long_url,
            short_code=short_code,
            is_custom=bool(custom_code),
            custom_code=custom_code if custom_code else None
        )

        serializer = ShortURLSerializer(short_url, context={'request': request})

        return Response(serializer.data)
    

def redirect_to_original(request , short_code):
        short_url = get_object_or_404(ShortURL , short_code=short_code)
        short_url.clicks += 1
        short_url.save()
        return redirect(short_url.long_url)
