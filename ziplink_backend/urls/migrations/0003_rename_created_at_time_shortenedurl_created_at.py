# Generated by Django 5.1.2 on 2025-04-25 02:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('urls', '0002_alter_shortenedurl_short_code'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shortenedurl',
            old_name='created_at_time',
            new_name='created_at',
        ),
    ]
