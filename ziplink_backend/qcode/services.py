import qrcode
from qrcode.image.styledpil import StyledPilImage  # Correct import path
from qrcode.image.styles.moduledrawers import (
    SquareModuleDrawer,
    CircleModuleDrawer,
    RoundedModuleDrawer
)
from qrcode.image.styles.colormasks import SolidFillColorMask 
from PIL import Image, ImageDraw, ImageFont
from io import BytesIO
from django.core.files.base import ContentFile

def get_module_drawer(shape_name):
    """Returns the appropriate QR code module drawer based on shape name."""
    shape_mapping = {
        'circle': CircleModuleDrawer(),
        'rounded': RoundedModuleDrawer(),
        'square': SquareModuleDrawer()
    }
    return shape_mapping.get(shape_name.lower(), SquareModuleDrawer())

def generate_qr_code_image(
    link,
    foreground_color="#000000",
    background_color="#ffffff",
    dot_shape='square',
    size=10,
    watermark_text=None,
    error_correction='H'
):

    def hex_to_rgb(hex_color):
        """Convert hex color string to RGB tuple"""
        hex_color = hex_color.lstrip('#')
        if len(hex_color) == 3:
            hex_color = ''.join([c * 2 for c in hex_color])
        if len(hex_color) not in (6, 8):
            raise ValueError(f"Invalid color code: {hex_color}")
        return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4, 6)[:len(hex_color)//2])

    # Convert hex colors to RGB tuples
    try:
        fg_rgb = hex_to_rgb(foreground_color)
        bg_rgb = hex_to_rgb(background_color)
    except ValueError as e:
        raise ValueError(f"Invalid color format: {str(e)}") from e

  
    error_mapping = {
        'L': qrcode.constants.ERROR_CORRECT_L,
        'M': qrcode.constants.ERROR_CORRECT_M,
        'Q': qrcode.constants.ERROR_CORRECT_Q,
        'H': qrcode.constants.ERROR_CORRECT_H
    }
    
    qr = qrcode.QRCode(
        version=None,  n
        error_correction=error_mapping.get(error_correction, qrcode.constants.ERROR_CORRECT_H),
        box_size=size,
        border=4,
    )

    qr.add_data(link)
    qr.make(fit=True)

    # Generate styled image
    img = qr.make_image(
        image_factory=StyledPilImage,
        module_drawer=get_module_drawer(dot_shape),
        color_mask=SolidFillColorMask(
            front_color=fg_rgb,  # Use converted RGB tuple
            back_color=bg_rgb   # Use converted RGB tuple
        ),
    )

    # Add watermark if specified
    if watermark_text:
        img = img.convert("RGBA")
        draw = ImageDraw.Draw(img)
        
        # Calculate font size relative to QR code dimensions
        width, height = img.size
        font_size = int(min(width, height) / 15)
        
        try:
            font = ImageFont.truetype("arial.ttf", font_size)
        except IOError:
            font = ImageFont.load_default()
        
        # Calculate text position
        text_bbox = draw.textbbox((0, 0), watermark_text, font=font)
        text_width = text_bbox[2] - text_bbox[0]
        text_height = text_bbox[3] - text_bbox[1]
        text_position = (
            (width - text_width) / 2,
            (height - text_height) / 2
        )
        
        # Create RGBA color with 50% opacity
        rgba = fg_rgb + (128,) if len(fg_rgb) == 3 else fg_rgb[:3] + (128,)
        draw.text(
            text_position,
            watermark_text,
            fill=rgba,  # Use RGBA tuple with alpha
            font=font
        )

    # Convert to Django-friendly format
    buffer = BytesIO()
    img.save(buffer, format="PNG", quality=100)
    return ContentFile(buffer.getvalue(), name="qr_code.png")