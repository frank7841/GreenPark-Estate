# Generated by Django 3.1.4 on 2021-01-12 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0003_auto_20210112_1317'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='property_type',
            field=models.CharField(choices=[('Home', 'Home'), ('Guesthouse', 'Guest'), ('hotel', 'Hotel'), ('Townhouse', 'Townhouse'), ('plots', 'Plots'), ('shops', 'Shops'), ('Office', 'Office')], default='Home', max_length=50),
        ),
    ]
