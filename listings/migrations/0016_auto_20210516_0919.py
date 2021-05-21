# Generated by Django 3.1.4 on 2021-05-16 09:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0015_auto_20210514_1305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='sale_type',
            field=models.CharField(choices=[('For sale', 'For Sale'), ('For rent', 'For Rent'), ('Accomodation', 'Accomodation')], default='For sale', max_length=50),
        ),
    ]