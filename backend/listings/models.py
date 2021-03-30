from django.db import models
from django.utils.timezone import now
from realtors.models import Realtor   

class Listing(models.Model):
    class SaleType(models.TextChoices):
        FOR_SALE = 'For sale'
        FOR_RENT = 'For rent'
    class PropertyType(models.TextChoices):
        HOME ='Home'
        GUESTHOUSE ='Guesthouse'
        HOTEL='Hotel'
        TOWNHOUSE ='Townhouse' 
        PLOTS ='Plots'
        LAND ='Land'
        SHOPS ='Shops'
        OFFICE ='Office'
    # class AvailableType(models.TextChoices):
    #     TRUE = 'True'
    #     FALSE = 'False'
          
    class LocationTown(models.TextChoices):
        KILIFI ='Kilifi'
        MALINDI ='Malindi'
        MOMBASA='Mombasa'
        NAIROBI ='Nairobi' 
        KITALE ='Kitale'
        MTWAPA ='Mtwapa'
        NANYUKI ='Nanyuki'
        KISUMU ='kisumu'
            
    realtor = models.ForeignKey(Realtor, on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=200, unique=True)
    title= models.CharField(max_length =150)
    address = models.CharField(max_length=50)
    town = models.CharField(max_length= 50, choices =LocationTown.choices, default=LocationTown.KILIFI)
    county = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    sale_type = models.CharField(max_length=50, choices=SaleType.choices, default=SaleType.FOR_SALE)
    price = models.IntegerField() 
    bedrooms = models.IntegerField()
    bathrooms =models.DecimalField(max_digits=2, decimal_places =1)
    property_type = models.CharField(max_length= 50, choices =PropertyType.choices, default=PropertyType.HOME)
    sqft = models.IntegerField()
    featured = models.BooleanField(default =False)
    # property_availability = models.CharField(max_length=50, choices=AvailableType.choices, default=AvailableType.TRUE)
    open_house = models.BooleanField(default=False)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d')
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_2 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_3 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_4 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_5 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_6 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_7 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_8 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_9 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_10 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_11 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_12 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_13 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_14 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_15 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_16 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_17 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_18 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_19 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    photo_20 = models.ImageField(upload_to='photos/%Y/%m/%d', blank=True)
    is_published =models.BooleanField(default=True)
    list_date = models.DateTimeField(default=now, blank=True)
    
    
    def __str__(self):
        return self.title