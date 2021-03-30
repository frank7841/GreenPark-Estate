from django.urls import path
from .views import ListingsView, FeaturedListingsView, ListingView, SearchView


urlpatterns =[
    path('', ListingsView.as_view()),
    path('search', SearchView.as_view()),
    path('featured', FeaturedListingsView.as_view()),
    path('<slug>', ListingView.as_view()),
    
]