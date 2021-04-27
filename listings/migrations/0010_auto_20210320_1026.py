# Generated by Django 3.1.4 on 2021-03-20 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0009_auto_20210319_1254'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listing',
            name='city',
        ),
        migrations.AddField(
            model_name='listing',
            name='town',
            field=models.CharField(choices=[('Kilifi', 'Kilifi'), ('Malindi', 'Malindi'), ('Mombasa', 'Mombasa'), ('Nairobi', 'Nairobi'), ('Kitale', 'Kitale'), ('Mtwapa', 'Mtwapa'), ('Nanyuki', 'Nanyuki'), ('kisumu', 'Kisumu')], default='Kilifi', max_length=50),
        ),
    ]