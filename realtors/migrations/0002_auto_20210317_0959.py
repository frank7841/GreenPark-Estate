# Generated by Django 3.1.4 on 2021-03-17 09:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('realtors', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='realtor',
            old_name='descritption',
            new_name='description',
        ),
    ]
