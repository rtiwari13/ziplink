from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from .jwt_utils import decode_token
from .models import User


class Authentication(BaseAuthentication):
    def authenticate(self,request):
        # extract the Authorization header from  request
        auth_header = request.headers.get('Authorization')
        
        if not auth_header or not auth_header.startswith("Bearer"):
            return None
        
        # extract the token
        token = auth_header.split(" ")[1]

        payload = decode_token(token)
        

        if payload is None:
            raise AuthenticationFailed("Invalid or expired token")
        

        # check if user exists 
        try:
            user = User.objects.get(id=payload['user_id'])
        except User.DoesNotExist:
            raise AuthenticationFailed('User not found')
        
        return(user, None)
