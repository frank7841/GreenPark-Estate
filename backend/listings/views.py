from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Listing
from .serializers import ListingSerializer, ListingDetailSerializer
from datetime import datetime, timezone, timedelta

class ListingsView(ListAPIView):
    queryset =Listing.objects.order_by('-list_date').filter(is_published = True)
    permission_classes = (permissions.AllowAny ,)
    serializer_class = ListingSerializer
    lookup_field = 'slug'
    
class ListingView(RetrieveAPIView):
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    serializer_class = ListingDetailSerializer
    lookup_field = 'slug'
        
class SearchView(APIView):
    permission_classes = (permissions.AllowAny ,)
    serializer_class = ListingSerializer
    
    def post(self, request,format =None):
        queryset = Listing.objects.order_by('-list_date').filter(is_published = True)
        data = self.request.data
        
        sale_type = data['sale_type']
        queryset = queryset.filter(sale_type__iexact = sale_type)
        
        price = data['price']
        if price == 'ksh 0+':
            price = 0
        elif price =='Ksh 2,000,000':
            price = 2000000
            
        elif price =='Ksh 4,000,000':
            price = 4000000
    
        elif price =='Ksh 6,000,000':
            price = 6000000
            
        elif price =='Ksh 8,000,000':
            price = 8000000

        elif price =='Ksh 12,000,000':
            price = 12000000

        elif price =='Ksh 24,000,000':
            price = 24000000

        elif price =='Ksh 48,000,000':
            price = 48000000
            
        elif price =='Any':
            price = -1
            
        if price !=-1:
            queryset = queryset.filter(price__gte=price)
        
        bedrooms = data['bedrooms']
        if bedrooms == '0+':
            bedrooms = 0
        elif bedrooms=='1+':
            bedrooms =1
                        
        elif bedrooms=='2+':
            bedrooms =2
            
        elif bedrooms=='3+':
            bedrooms =3    

        elif bedrooms=='4+':
            bedrooms =4
        
        elif bedrooms=='5+':
            bedrooms =5    
            
        elif bedrooms=='6+':
            bedrooms =6
            
        elif bedrooms=='7+':
            bedrooms =7    
            
            
        queryset = queryset.filter(bedrooms__gte= bedrooms)        
        
        
        property_type = data['property_type']
        queryset =queryset.filter(property_type__iexact=property_type)
        
        
        
        bathrooms= data['bathrooms']
        if bathrooms == '0+':
            bathrooms = 0.0
            
        if bathrooms == '1+':
            bathrooms = 1.0
            
        if bathrooms == '2+':
            bathrooms = 2.0
            
        if bathrooms == '3+':
            bathrooms = 3.0
            
        if bathrooms == '4+':
            bathrooms = 4.0
            
        if bathrooms == '5+':
            bathrooms = 5.0
            
        if bathrooms == '6+':
            bathrooms = 6.0                    
            
        queryset =queryset.filter(bathrooms__gte=bathrooms)
        
        
        sqft = data['sqft']
        if sqft =='400+':
            sqft = 400
        elif sqft =='1200+':
            sqft = 1200
            
        elif sqft =='1400+':
            sqft = 1400    
                       
        elif sqft =='1600+':
            sqft = 1600
            
        elif sqft =='1800+':
            sqft = 1800
            
        elif sqft =='2000+':
            sqft = 2000
            
        elif sqft =='Any':
            sqft = 0
            
        if sqft !=0:
            queryset =queryset.filter(sqft__gte=sqft)
                    
            
                                        
        days_passed = data['days_listed']
        if days_passed =='1 or less':
            days_passed = 1
            
        if days_passed == '2 or less':
            days_passed =2
        
        if days_passed == '5 or less':
            days_passed =5
                
        if days_passed == '10 or less':
            days_passed =10
                                
                                
        if days_passed == '20 or less':
            days_passed =20
            
        if days_passed == 'Any':
            days_passed =0
            
        for query in queryset:
            num_days = (datetime.now(timezone.utc)- query.list_date).days
            
            if days_passed !=0:
                if num_days > days_passed:
                    slug = query.slug
                    queryset =queryset.exclude(slug__iexact=slug)
                    
                    
            
        has_photos = data['has_photos']
        if has_photos == '1+':
            has_photos =1
        elif has_photos == '3+':
            has_photos = 3
            
        elif has_photos == '5+':
            has_photos = 5
            
            
        elif has_photos == '10+':
            has_photos = 10
            
        elif has_photos == '15+':
            has_photos = 15
            
        for query in queryset:
            count = 0
            if query.photo_1:
                count +=1
            if query.photo_2:
                count +=1
            if query.photo_3:
                count +=1
            if query.photo_4:
                count +=1
            if query.photo_5:
                count +=1
            if query.photo_6:
                count +=1
            if query.photo_7:
                count +=1
            if query.photo_8:
                count +=1
            if query.photo_9:
                count +=1
            if query.photo_10:
                count +=1
            if query.photo_11:
                count +=1
            if query.photo_12:
                count +=1
            if query.photo_13:
                count +=1
            if query.photo_14:
                count +=1
            if query.photo_15:
                count +=1
            if query.photo_16:
                count +=1                
            if query.photo_17:
                count +=1
            if query.photo_18:
                count +=1
            if query.photo_19:
                count +=1
            if query.photo_20:
                count +=1
                
            if count < has_photos:
                slug = query.slug
                queryset = queryset.exclude(slug__iexact=slug)
                    
        property_availability = data['property_availability']
        queryset=queryset.filter(property_availability__iexact=property_availability)
        
        keywords = data['keywords']
        queryset =queryset.filter(description__icontains=keywords)
        
        
        
        serializers = ListingSerializer(queryset, many=True)
        
        return Response(serializers.data)                                                