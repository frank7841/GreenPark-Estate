import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Helmet, HelmetProvider} from 'react-helmet-async';
import NumberFormat from 'react-number-format';
import { Icon } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import Scroll from '../components/Scroll'
import Footer from '../components/footer'
import { Accordion, Card } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const ListingDetail=(props)=> {

    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

    const[listing, setListing]=useState({});
    const[realtor, setRealtor]= useState({})
   

    useEffect(()=>{
        const slug= props.match.params.id

        const config={
            headers:{
                // "Authorization" : `Bearer ${localStorage.getItem('token')}`
                "Content-Type": "application/json"
            }
        };
        axios.get(`https://niboraproperties.co.ke/api/listings/${slug}`, config)
        .then(res =>{
            setListing(res.data);
            // setPrice(NumberFormat(res.data.price))
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
            axios.get(`https://niboraproperties.co.ke/api/realtors/${id}`, config)
            .then(res=>{
                setRealtor(res.data)
            })
            .catch(err =>{

            });
        }
    }, [listing.realtor]);
  

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img className="img-responsive listing-detail-image" src={listing.photo_main} onDragStart={handleDragStart} alt={listing.title} />,
        <img className="img-responsive listing-detail-image"src={listing.photo_1} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image" src={listing.photo_2} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image" src={listing.photo_3} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image"src={listing.photo_4} onDragStart={handleDragStart} alt={listing.title} />,
        <img className="img-responsive listing-detail-image" src={listing.photo_5} onDragStart={handleDragStart}alt={listing.title} />,
        <img className="img-responsive listing-detail-image" src={listing.photo_6} onDragStart={handleDragStart}alt={listing.title} />,
        <img className="img-responsive listing-detail-image"src={listing.photo_7} onDragStart={handleDragStart} alt={listing.title} />,
        <img className="img-responsive listing-detail-image" src={listing.photo_8} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image" src={listing.photo_9} onDragStart={handleDragStart}alt={listing.title} />,
        <img className="img-responsive listing-detail-image"src={listing.photo_10} onDragStart={handleDragStart}alt={listing.title} />,
        <img className="img-responsive listing-detail-image" src={listing.photo_11} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image" src={listing.photo_12} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image"src={listing.photo_13} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image" src={listing.photo_14} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image" src={listing.photo_15} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image"src={listing.photo_16} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image" src={listing.photo_17} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image" src={listing.photo_18} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image"src={listing.photo_19} onDragStart={handleDragStart} alt={listing.title}/>,
        <img className="img-responsive listing-detail-image" src={listing.photo_20} onDragStart={handleDragStart}  alt={listing.title}/>,

        
      ];
    // const displayInteriorImages=()=>{

    //     let images= [];
    //     images.push(
    //         <div key={1} className="row">
    //             <div className="col-sm">
    //                 {listing.photo_1 ?(
    //                     <div className="listing-details">
    //                         < a href={listing.photo_1}>
    //                         <img className="img-responsive listing-detail-image" src= {listing.photo_1} alt=""/>
    //                         </a>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>

    //             <div className="col-sm">
    //                 {listing.photo_2 ?(
    //                     <div className="listing-details">
    //                         <img className="img-responsive  listing-detail-image" src= {listing.photo_2} alt=""/>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>
    //             <div className="col-sm">
    //                 {listing.photo_3 ?(
    //                     <div className="listing-details">
    //                         <img className="img-responsive  listing-detail-image" src= {listing.photo_3} alt=""/>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>
    //             <div className="col-sm">
    //                 {listing.photo_4 ?(
    //                     <div className="listing-details">
    //                         <img className="img-responsive  listing-detail-image" src= {listing.photo_4} alt=""/>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>
    //         </div> 
    //     );
    //     images.push(
    //         <div key={2} className="row">
    //             <div className="col-sm">
    //                 {listing.photo_5 ?(
    //                     <div className="listing-details">
    //                         <img className="img-responsive  listing-detail-image" src= {listing.photo_5} alt=""/>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>

    //             <div className="col-sm">
    //                 {listing.photo_6 ?(
    //                     <div className="listing-details">
    //                         <img className="img-responsive  listing-detail-image" src= {listing.photo_6} alt=""/>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>
    //             <div className="col-sm">
    //                 {listing.photo_7 ?(
    //                     <div className="listing-details">
    //                         <img className="img-responsive  listing-detail-image" src= {listing.photo_7} alt=""/>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>
    //         </div>
    //     ); 
    //     images.push(
    //         <div key={3} className="row">
    //             <div className="col-sm">
    //                 {listing.photo_8 ?(
    //                     <div className="listing-details">
    //                         <img className="img-responsive  listing-detail-image" src= {listing.photo_8} alt=""/>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>

    //             <div className="col-sm">
    //                 {listing.photo_9 ?(
    //                     <div className="listing-details">
    //                         <img className="img-responsive  listing-detail-image" src= {listing.photo_9} alt=""/>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>
    //             <div className="col-sm">
    //                 {listing.photo_10 ?(
    //                     <div className="listing-details">
    //                         <img className="img-responsive  listing-detail-image" src= {listing.photo_10} alt=""/>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>
    //              <div className="col-sm">
    //                  {listing.photo_11 ?(
    //                       <div className="listing-details">
    //                            <img className="img-responsive  listing-detail-image" src= {listing.photo_11} alt=""/>
    //                        </div>    
    //                ): null
    //                  }
    //              </div>

    //         </div>
    //     );
    //     images.push(
    //         <div key={4} className="row">
    //             <div className="col-sm">
    //                 {listing.photo_12 ?(
    //                     <div className="listing-details">
    //                         <img className="img-responsive  listing-detail-image" src= {listing.photo_12} alt=""/>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>
    //             <div className="col-sm">
    //                 {listing.photo_13 ?(
    //                     <div className="listing-details">
    //                         <img className="img-responsive  listing-detail-image" src= {listing.photo_13} alt=""/>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>
    //             <div className="col-sm">
    //                 {listing.photo_14 ?(
    //                     <div className="listing-details">
    //                         <img className="img-responsive  listing-detail-image" src= {listing.photo_14} alt=""/>
    //                     </div>    
    //                 ): null
    //                 }
    //             </div>

    //         </div>
    //     );
        
    //     return images;
    // }


    return(
        <>
             <HelmetProvider>
            <Helmet>
                <title>{`${listing.title}`}</title>
                <meta
                    name='description'
                    content={`${listing.title}`  }
                />
            </Helmet>
            </HelmetProvider>
            <Scroll showBelow={250}/>
            <h3 className="listingdetail-name">
                <a className="listingsdetail-phone" href={`tel: ${realtor.phone}`}>{realtor.phone}</a>&nbsp;&nbsp; <span className="pointers" onClick={goToPreviousPath}> «</span> </h3> 
            <h3 className="d-title">{listing.title}</h3>
                <div className="height"></div>
                 <div className="container-fluid">
                     <AliceCarousel mouseTracking
                     
                     autoPlayControls     
                     autoPlayInterval={1000}
                     animationDuration={1000}
                     keyboardNavigation={true}
                     disableDotsControls={true}
                     animationType="fadeout"
                     items={items} />
                         <div className="row list-detail-top-img ">
                            {/* <img src={listing.photo_main} alt="House main" className="img-toppings img-responsive" /> */}
                        {/* <div className="details-unparallel text-center">
                            <h1 className="title-list-detail">{listing.title}</h1>
                            <hr className="horizontal-list-detail " size="large"/>
                            <h2 className="details-location">{listing.town} - {listing.address}</h2>

                            <h2 className="details-location">{listing.sale_type} - <NumberFormat value={listing.price} displayType={'text'} thousandSeparator={true} prefix={'Ksh'}/>-{listing.rate}</h2>
                            <div className="sale-title">
                                <p className="sale-address">{listing.bedrooms}Beds&nbsp;&nbsp;&nbsp;&nbsp;{listing.bathrooms}Baths&nbsp;&nbsp;&nbsp;&nbsp;{listing.sqft}sqft</p>
                            </div>
                     
                        </div> */}
                        {/* <div className="top-left-details">
                            <h3 className="listingdetail-name">
                            <a className="listingsdetail-phone" href={`tel: ${realtor.phone}`}>{realtor.phone}</a>&nbsp;&nbsp; <span className="pointers" onClick={goToPreviousPath}> «</span> </h3> 
                        </div>   */}
                    </div>
                </div>

       
                <div className="container-fluid description-naming">
                    <div className="row">
                        <div className="col-sm">
                            <p className="listing-detail-desc">Property Desription:<br/><br/>{listing.description}</p>
                        </div>
                        <div className="col-sm">
                            <div className="pricess">
                                <h1 className="title-list-detail">{listing.title}</h1>
                                <hr className="horizontal-list-detail " size="large"/>
                                <h2 className="details-location">{listing.town} - {listing.address}</h2>

                                <h2 className="details-location">{listing.sale_type} - <NumberFormat value={listing.price} displayType={'text'} thousandSeparator={true} prefix={'Ksh'}/>-{listing.rate}</h2>
                                <div className="sale-title">
                                    <p className="sale-address">{listing.bedrooms}Beds&nbsp;&nbsp;&nbsp;&nbsp;{listing.bathrooms}Baths&nbsp;&nbsp;&nbsp;&nbsp;{listing.sqft}sqft</p>
                                </div>
                                <div className="height"></div>
                                <div className="row">
                                    <div className="col-sm">
                                    <img className="logo-size-detail"src= {realtor.photo} alt={realtor.name}/>
                                    </div>

                                    <div className="col-sm">
                                        <h2>{realtor.name}</h2>
                                        
                                    </div>
                                    
                                </div> 
                                
                                <div className="row">
                                    <div className="col-sm">
                                        <a href= {`tel: ${realtor.phone}`}> <button type="button" className="btn btn-danger"><Icon> <i class=" large phone  icon"></i></Icon></button></a>
                                    </div>
                                    <div className="col-sm">
                                        <a href={`https://api.whatsapp.com/send?phone=${realtor.phone}`}> <button type="button" className="btn btn-success"><Icon> <i class=" large whatsapp  icon"></i></Icon></button></a>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="container-fluid ">    
                    <div className="row ">
                        <h1 className="align-center top-top-add">Features</h1>
                         {/* <hr className="horizontal " size="large"/> */}
                    </div>
                    <div className="row features">
                    <div className="col-sm">
                        <ul className="featured_display">

                        <li>{listing.feature_1}</li>
                        <li>{listing.feature_2}</li>
                        <li>{listing.feature_3}</li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <ul className="featured_display">

                        <li>{listing.feature_4}</li>
                        <li>{listing.feature_5}</li>
                        <li>{listing.feature_6}</li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <ul className="featured_display">

                        <li>{listing.feature_7}</li>
                        <li>{listing.feature_8}</li>
                        <li>{listing.feature_9}</li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <ul className="featured_display">

                        <li>{listing.feature_10}</li>
                        <li>{listing.feature_11}</li>
                        <li>{listing.feature_12}</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
               
            <div className="height"></div>
            <div className="container">
                {/* <div className="row">
               
                <div className="col-sm-12">
                        <img className="img-responsive max-height" src={listing.photo_main} alt={listing.title} />
                    </div>
               
                </div> */}
                          
        </div>
            <div className="container">
            {/* <AliceCarousel mouseTracking items={items} />    */}
                {/* {displayInteriorImages()} */}
            </div>   
            <div className="height"></div> 
            
            <Accordion className="container">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle className="accordion-border" eventKey="0" >
                            <h1 className=" top-top-add">Payment:</h1>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>  <p className="listing-detail-desc">{listing.payment_plan}</p></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <div className="height"></div>
            {/* <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <a className="fixedButton" href ="tel:+254 111338357">
                            <div className="roundedFixedBtn"><Icon> <i class=" large phone square icon"></i></Icon></div>
                        </a>
                    </div>
                    <div className="col-sm">
                        <a className="fixedButton-left" href="mailto:sales@niboraproperties.co.ke">
                            <div className="roundedFixedBtn"><Icon> <i class=" large envelope square icon"></i></Icon></div>
                        </a>
                    </div>
                </div>
                <div className="row position-bottom">
                    <div className="col-sm-12">
                        < a className="fixed-bottom-mobile" href="tel:+254 111338357"> Get in touch now</a>
                    </div>    
                   
                </div>
            </div> */}

    
            
            <Footer/>

    </>        
        

    )            
         
        
};
export default ListingDetail
