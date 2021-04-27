import React from 'react'
import Card from './Card'

const listings =({ listings}) =>{
    const getListings=()=> {
        let listingsOnPage = [];
        let result= [];

        listings.map(listing => {
            return listingsOnPage.push(
                <Card
                title={listing.title}
                address={listing.address}
                town={listing.town}
                county={listing.county}
                price={listing.price}
                sale_type={listing.sale_type}
                property_type={listing.property_type}
                bedrooms={listing.bedrooms}
                bathrooms={listing.bathrooms}
                sqft={listing.sqft}
                photo_main={listing.photo_main}
                slug={listing.slug} 
                />

                );
            

        });
        if (listingsOnPage.length=== 0) {
            return(
            <div className="container">
                <div className="row">
                    <h2>Contact Us for property Request < a href="tel:+254111338357"> 0111338357</a></h2>
                 </div>   
            </div>
            )
        }
        console.log(listings)
        
        for(let i = 0; i < listings.length; i += 3){
            result.push(
                
                <div className="row">
                    <div className="col-sm">
                        {listingsOnPage[i]}
                    </div>
                    <div className="col-sm">
                        {listingsOnPage[i+1] ? listingsOnPage[i + 1]: null}
                    </div>
                    <div className="col-sm">
                    {listingsOnPage[i+2] ? listingsOnPage[i + 2]: null}
                    </div>

                </div>
               
            );
        }
       

        return result;

    };
    return (
        <div>
            {getListings()}
         

            
        </div>
    )
}

export default listings

