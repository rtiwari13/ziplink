# Generated by Django 5.1.4 on 2024-12-09 16:23

import urls.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('urls', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shortenedurl',
            name='short_code',
            field=models.CharField(default=urls.models.generate_unique_short_code, max_length=10, unique=True),
        ),
    ]
