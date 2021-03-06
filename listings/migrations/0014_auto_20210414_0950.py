# Generated by Django 3.1.4 on 2021-04-14 09:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0013_listing_rate'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='payment_plan',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='listing',
            name='rate',
            field=models.CharField(blank=True, choices=[('Per Night', 'Per Night'), ('Per Month', 'Per Month')], max_length=50),
        ),
    ]
