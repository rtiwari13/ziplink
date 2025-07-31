# utils.py
import qrcode
import base64
from io import BytesIO

def generate_qr_code_base64(url):
    qr = qrcode.make(url)
    buffered = BytesIO()
    qr.save(buffered, format="PNG")
    return base64.b64encode(buffered.getvalue()).decode()
