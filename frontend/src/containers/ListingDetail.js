import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {Link} from 'react-router-dom'
import NumberFormat from 'react-number-format';

const ListingDetail=(props)=> {
    const[listing, setListing]=useState({});
    const[realtor, setRealtor]= useState({})
    const[price, setPrice]= useState(0);

    useEffect(()=>{
        const slug= props.match.params.id

        const config={
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        };
        axios.get(`http://localhost:8000/api/listings/${slug}`, config)
        .then(res =>{
            setListing(res.data);
            setPrice(NumberFormat(res.data.price))
        })
        .catch (err=> {

        });
    }, [props.match.params.id])

    useEffect(()=>{
        const id = listing.realtor
        const config={
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        };
        if (id) {
            axios.get(`http://localhost:8000/api/realtors/${id}`, config)
            .then(res=>{
                setRealtor(res.data)
            })
            .catch(err =>{

            });
        }
    }, [listing.realtor]);

    const displayInteriorImages=()=>{

        let images= [];
        images.push(
            <div key={1} className="row">
                <div className="col-sm">
                    {listing.photo_1 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_1} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_2 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_2} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">
                    {listing.photo_3 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_3} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
            </div>
        );
        images.push(
            <div key={2} className="row">
                <div className="col-sm">
                    {listing.photo_4 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_4} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_5 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_5} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">
                    {listing.photo_6 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_6} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
            </div>
        ); 
        images.push(
            <div key={3} className="row">
                <div className="col-sm">
                    {listing.photo_7 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_7} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_8 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_8} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">
                    {listing.photo_9 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_9} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
            </div>
        );
        images.push(
            <div key={4} className="row">
                <div className="col-sm">
                    {listing.photo_10 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_10} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_11 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_11} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">
                    {listing.photo_12 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_12} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
            </div>
        );
        images.push(
            <div key={5} className="row">
                <div className="col-sm">
                    {listing.photo_13 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_13} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_14 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_14} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">
                    {listing.photo_15 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_15} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
            </div>
        );
        images.push(
            <div key={6} className="row">
                <div className="col-sm">
                    {listing.photo_16 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_16} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_17 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_17} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">
                    {listing.photo_18 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_18} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
            </div>
        );
        images.push(
            <div key={7} className="row">
                <div className="col-sm">
                    {listing.photo_19 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_19} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_20 ?(
                        <div className="listing-detgails">
                            <img className="img-responsive, listing_detail_image" src= {listing.photo_20} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">

                </div>
            </div>
        );
        return images;
    }


    return(
        <div className="listingdetail">
             <HelmetProvider>
            <Helmet>
                <title>Realest Estate - Listing{`${listing.title}`}</title>
                <meta
                    name='description'
                    content='listing detail'
                />
            </Helmet>
            </HelmetProvider>
            listingDetail
        </div>

    )            
         
        
};
export default ListingDetail
