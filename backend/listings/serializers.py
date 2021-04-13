from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields =('title', 'address', 'town', 'county', 'price', 'sale_type', 'property_type','bedrooms', 'bathrooms','sqft', 'photo_main','slug', 'open_house','feature_1','feature_2','feature_3','feature_4','feature_5','feature_6','feature_7','feature_8','feature_9','feature_10','feature_11','feature_12','rate')
        
class FeaturedListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields =('title', 'address', 'town', 'county', 'price', 'sale_type', 'property_type','bedrooms', 'bathrooms','sqft', 'photo_main','slug', 'open_house', 'featured')        
        
class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'        
        