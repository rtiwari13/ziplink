import jwt
from django.conf import settings
from django.contrib.auth.models import User
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed

def generate_jwt(user):
    from datetime import datetime, timezone, timedelta
    payload = {
        'id': user.id,
        'username': user.username,
        'exp': datetime.now(timezone.utc) + timedelta(hours=1),  # Token expiry
        'iat': datetime.now(timezone.utc)  # Token issued at
    }
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
    return token


def decode_jwt(token):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        return payload
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed("Token has expired")
    except jwt.InvalidTokenError:
        raise AuthenticationFailed("Invalid token")

class JWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return None
        token = auth_header.split(' ')[1]
        payload = decode_jwt(token)
        user = User.objects.filter(id=payload['id']).first()
        if not user:
            raise AuthenticationFailed("User not found")
        return (user, None)
