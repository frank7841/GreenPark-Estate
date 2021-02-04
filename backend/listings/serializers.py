from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields =('title', 'address', 'city', 'county', 'price', 'sale_type', 'property_type','bedrooms', 'bathrooms','sqft', 'photo_main','slug', 'property_availability')
        
class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'        
        