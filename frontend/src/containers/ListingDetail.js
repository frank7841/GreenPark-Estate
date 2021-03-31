import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {Link} from 'react-router-dom'
import NumberFormat from 'react-number-format';
import { Icon } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";

const ListingDetail=(props)=> {

    let history = useHistory();

    const[listing, setListing]=useState({});
    const[realtor, setRealtor]= useState({})
    const[price, setPrice]= useState(0);

    useEffect(()=>{
        const slug= props.match.params.id

        const config={
            headers:{
                // "Authorization" : `Bearer ${localStorage.getItem('token')}`
                "Content-Type": "application/json"
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
                // "Authorization" : `Bearer ${localStorage.getItem('token')}`
                "Content-Type": "application/json"
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
                        <div className="listing-details">
                            <img className="img-responsive listing-detail-image" src= {listing.photo_1} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_2 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_2} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">
                    {listing.photo_3 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_3} alt=""/>
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
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_4} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_5 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_5} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">
                    {listing.photo_6 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_6} alt=""/>
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
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_7} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_8 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_8} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">
                    {listing.photo_9 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_9} alt=""/>
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
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_10} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_11 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_11} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">
                    {listing.photo_12 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_12} alt=""/>
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
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_13} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_14 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_14} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">
                    {listing.photo_15 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_15} alt=""/>
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
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_16} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_17 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_17} alt=""/>
                        </div>    
                    ): null
                    }
                </div>
                <div className="col-sm">
                    {listing.photo_18 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_18} alt=""/>
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
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_19} alt=""/>
                        </div>    
                    ): null
                    }
                </div>

                <div className="col-sm">
                    {listing.photo_20 ?(
                        <div className="listing-details">
                            <img className="img-responsive  listing-detail-image" src= {listing.photo_20} alt=""/>
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
        <div className="listingdetail container-fluid">
             <HelmetProvider>
            <Helmet>
                <title>{`${listing.title}`}</title>
                <meta
                    name='description'
                    content='listing detail'
                />
            </Helmet>
            </HelmetProvider>
            <div className="jumbotron text-center title-header">
                <h1 className="display-4">{listing.title}</h1>
                <h3 className='listingdetail__location'>{listing.town}, {listing.county}</h3>
            </div>
            <div className="container">
                <nav aria-label="breadcrumb top-title-font">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"> <Link className='listingdetail__breadcrumb__link' to='/'>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{listing.title}</li>
                        <li clasName="breadcrumb-item"> &nbsp; <span>&#47;</span> <a className="back"  onClick={() => history.goBack()}>Back</a></li>
                    </ol>
                </nav>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-sm-4 realtor-pc">
                            <img className="img-responsive" src={realtor.photo} alt={realtor.name} />
                        <h3 className="listingdetail-realtor">{realtor.name}</h3>
                        <p className="listingdetail-contact"><a href="tel:{realtor.phone}"> <Icon  inverted color="black" name="phone" size="large"/>{realtor.phone}</a></p>
                        <p className="listingdetail-contact"><a href="https://api.whatsapp.com/send?phone={realtor.phone}"><Icon  color="teal" name="whatsapp" size="large"/>{realtor.phone}</a></p>
                        <p className="listingdetail-contact"><a href="mailto:{realtor.email}"> <Icon  color="teal" name="mail" size="large"/>{realtor.email}</a></p>
                        <p className="listingdetail-about">{realtor.description}</p>
                </div>
                <div className="col-sm-8">
                        <img className="img-responsive max-height" src={listing.photo_main} alt={listing.title} />
                    </div>
                    <div className="col-sm-4 realtor-mobile">
                            <img className="img-responsive" src={realtor.photo} alt={realtor.name} />
                        <h3 className="listingdetail-realtor">{realtor.name}</h3>
                        <p className="listingdetail-contact"><a href="tel:{realtor.phone}"> <Icon  inverted color="black" name="phone" size="large"/>{realtor.phone}</a></p>
                        <p className="listingdetail-contact"><a href="https://api.whatsapp.com/send?phone={realtor.phone}"><Icon  color="teal" name="whatsapp" size="large"/>{realtor.phone}</a></p>
                        <p className="listingdetail-contact"><a href="mailto:{realtor.email}"> <Icon  color="teal" name="mail" size="large"/>{realtor.email}</a></p>
                        <p className="listingdetail-about">{realtor.description}</p>
                    </div>
                </div>
                           
                <div className="row">
                    <div className="col-sm">
                        <ul className="listingdetail-list">
                            <li className="listingdetail-list-item">Property Type: {listing.property_type}</li>
                            <li className="listingdetail-list-item">Price: <NumberFormat value={listing.price} displayType={'text'} thousandSeparator={true} prefix={'Ksh'}/></li>
                            <li className="listingdetail-list-item">Bedrooms: {listing.bedrooms}</li>
                            <li className="listingdetail-list-item">Bathrooms: {listing.bathrooms}</li>
                            <li className="listingdetail-list-item">Square Feet: {listing.sqft}</li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <ul className="listingdetail-list">
                            <li className="listingdetail-list-item">Sale Type: {listing.sale_type}</li>
                            <li className="listingdetail-list-item">Address: {listing.address}</li>
                            <li className="listingdetail-list-item">Town: {listing.town}</li>
                            <li className="listingdetail-list-item">County: {listing.county}</li>
                            
                        </ul>
                    </div>
                </div>
        </div>

        
            <div className="container">
                <div className="row listing-description-detail">
                    <p className="listingdetail-description">{listing.description}</p>
                </div>    
            </div>
            <div className="container">
                {displayInteriorImages()}
            </div>    
            </div>
        

    )            
         
        
};
export default ListingDetail
