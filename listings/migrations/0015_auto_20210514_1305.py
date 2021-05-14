# Generated by Django 3.1.4 on 2021-05-14 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0014_auto_20210414_0950'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='property_type',
            field=models.CharField(choices=[('Home', 'Home'), ('Guesthouse', 'Guesthouse'), ('Hotel', 'Hotel'), ('Townhouse', 'Townhouse'), ('Plots', 'Plots'), ('Warehouse', 'Warehouse'), ('Land', 'Land'), ('Shops', 'Shops'), ('Office', 'Office')], default='Home', max_length=50),
        ),
    ]
