# Generated by Django 3.1.4 on 2021-03-03 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0007_auto_20210203_1008'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='property_type',
            field=models.CharField(choices=[('Home', 'Home'), ('Guesthouse', 'Guesthouse'), ('Hotel', 'Hotel'), ('Townhouse', 'Townhouse'), ('Plots', 'Plots'), ('Land', 'Land'), ('Shops', 'Shops'), ('Office', 'Office')], default='Home', max_length=50),
        ),
    ]
