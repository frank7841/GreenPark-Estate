from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields =('title', 'address', 'town', 'county', 'price', 'sale_type', 'property_type','bedrooms', 'bathrooms','sqft', 'photo_main','slug', 'open_house')
        
class FeaturedListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields =('title', 'address', 'town', 'county', 'price', 'sale_type', 'property_type','bedrooms', 'bathrooms','sqft', 'photo_main','slug', 'open_house', 'featured')        
        
class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'        
        