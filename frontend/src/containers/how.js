import React, {useEffect} from 'react'
import ReadMoreReact from 'read-more-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function How() {
    useEffect(()=>{
        Aos.init({duration:4000})

    }, []);   

    return (
        <>
             <HelmetProvider>
            <Helmet>
                <title>Nibora Realest Estate - How we help</title>
                <meta
                    name='description'
                    content='How we do what we do'
                />
            </Helmet>
            </HelmetProvider>

            <div className="container">        
                <hr className="top-about"/>
              
                <h3 className="hola-Nibora text-centre">How we help</h3>    
                <div className="card card-color text-white" data-aos="slide-right">
                    <div className="card-body">
                        <div className="card-title how-we-help">We know what to look for</div>
                        <p className="service-text" data-aos="fade-in"><ReadMoreReact text ="We believe that those in the market to buy or rent a property know exactly what he or she wants to buy. From the number of bedrooms or bathrooms to swimming pool and all sorts of must-haves. You would probably look for a aproperty on sale with that checklist at the back of your head. There is always going to be a property in the area that you'd wish to purchase. The question is which of these property suits your specific needs and budget? We therefore shortlist best property for you based on your wish list. We know every property we sell and its our job to find one that ultimately suit your demand. We will guide you through the property acquisition process making it smooth and stress free.  " readMoreText  ="read more" ideal={200} /></p>
                
                    </div>
                </div>
                <br/>
                <div className="card card-color text-white" data-aos="fade-up">
                    <div className="card-body">
                        <div className="card-title how-we-help">We have professional Networks</div>
                        <p className="service-text" data-aos="fade-in"><ReadMoreReact text ="We believe that those in the market to buy or rent a property know exactly what he or she wants to buy. From the number of bedrooms or bathrooms to swimming pool and all sorts of must-haves. You would probably look for a aproperty on sale with that checklist at the back of your head. There is always going to be a property in the area that you'd wish to purchase. The question is which of these property suits your specific needs and budget? We therefore shortlist best property for you based on your wish list. We know every property we sell and its our job to find one that ultimately suit your demand. We will guide you through the property acquisition process making it smooth and stress free.  " readMoreText  ="read more" ideal={200} /></p>
                
                    </div>
                </div>

            </div>  
            
        </>
    )
}
{/* <div className="container">        
                <hr className="top-about"/>
              
                <h3 className="hola-Nibora text-centre">Why Choose Us</h3>    
                <ol>
                    <li>We know what to look for</li>
                    <li>You will be introduced to a professional network </li>
                    <li>At Nibora, we pride ourselves with extensive market Knowledge</li>
                    <li>We provide valuable price guidelines.</li>
                    <li>Our Negotiating Skills are off the charts</li>
                    <li>We have access to off-Market listings.</li>
                    <li>Nibora Realtors provide the best home staging advice. </li>
                    <li>We ultimately save your time and energy.</li>
                    
                </ol>

            </div>   */}
