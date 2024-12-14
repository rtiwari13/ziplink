import jwt
from datetime import datetime, timedelta, timezone
from django.conf import settings


def generate_jwt(user):
    """
    Generates a JWT token for the given user.
    """
    payload = {
        "id": user.id,
        "username": user.username,
        "exp": datetime.now(timezone.utc) + settings.JWT_EXPIRATION_DELTA,  # New syntax
        "iat": datetime.now(timezone.utc),
    }
    token = jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
    return token


def decode_jwt(token):
    """
    Decodes a JWT token and validates it.
    Returns the payload if valid, otherwise returns an error message.
    """
    try:
        payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        return {"error": "Token has expired"}
    except jwt.InvalidTokenError:
        return {"error": "Invalid token"}
