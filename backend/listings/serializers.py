from rest_framework import serializers
from .models import Listing

class LinstingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields =('title', 'address', 'city', 'county', 'price', 'sale_type', 'home_type','bedrooms', 'bathrooms','sqft', 'photo_main','slug')
class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'        
        