 # generate tokens and decode them
import datetime
import jwt
from decouple import config

def generate_access_token(user):
    now = datetime.datetime.now(datetime.timezone.utc)
    payload = {
        'user_id':user.id,
        'exp': now+datetime.timedelta( minutes = 15),
        'iat': now
    }
    return jwt.encode(payload,config('SECRET_KEY') , algorithm='HS256')

def generate_refresh_token(user):
    now = datetime.datetime.now(datetime.timezone.utc)
    payload = {
        'user_id':user.id,
        'exp':now+datetime.timedelta(days=7),
        'iat':now
    }
    return jwt.encode(payload ,config('SECRET_KEY'),algorithm='HS256')

def decode_token(token):
    try:
        payload = jwt.decode(token, config('SECRET_KEY'), algorithms='HS256')
        return payload
    except jwt.ExpiredSignatureError:
        return "Expired Signature Error"
    except jwt.InvalidTokenError:
        return "Invalid Token Error"