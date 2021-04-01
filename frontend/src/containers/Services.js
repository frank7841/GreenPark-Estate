import React, {useEffect} from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Scroll from '../components/Scroll'
import Footer from '../components/footer'

const Service=()=> {
    useEffect(()=>{
        Aos.init({duration:2000})
        Aos.refresh()

    }, []);   
    return( 
        <>
            <HelmetProvider>
            <Helmet>
                <title>Nibora Properties - Services</title>
                <meta
                    name='description'
                    content='Nibora Realest Estate Services'
                />
            </Helmet>
            </HelmetProvider>
            <Scroll showBelow={250}/>

                <div className="service-top">
                  <img data-aos="fade-in" src={process.env.PUBLIC_URL + 'image/assets/img/servicebg.jpg'} alt="Service"/>
                </div>  
                
                 <div className="text-block">
                        <h4 data-aos="slide-right">Searching For a Home, a Hotel, a Guest House, Office Spaces, Land,  with Nibora, You will find the difference is Night and Day. </h4>
                        <p data-aos="fade-in">What is so different you ask? Well, Nibora Properties is here to find you not <strong>JUST</strong> four walls and a roof. We are here and dedicated to connect you to a community, to things that inspire you, and to a space that also inspires you. We are focused to earning your trust rather than comision.    </p>
                 </div>
                 <div className="service-top-mobile">
                    <img data-aos="fade-in" src={process.env.PUBLIC_URL + 'image/assets/img/Service.png'} alt="Service"/>
                </div>
                <div className="height"></div> 
                <div className="service-head">
                  
                  <h3 className="text-center">What we do</h3>
                </div>
                <br/>
                <div className="service-details container">
                    <div className="row">
                    <div className="residential col-sm" data-aos="fade-in">
                        {/* <p className="residential-head ">Residential</p> */}
                        <h3>Homes</h3>
                        
                        <p className="service-text">Are you searching for a home, Townhouse, Bungalow for your family?  We have specialized in providing cost-concious buyers multiple options to buy or rent a home for your family regardless of your budget. We have the Keys to your Home.</p>
                        <br/>
                        <p className="service-text">Nibora Properties provide affordable fully furnished  houses for individuals and families looking for short-stay holidays.  </p>
                        <br/>
                        <a className="call-us" href="tel:0790943918">Call Us Now</a> &nbsp;&nbsp; or&nbsp;&nbsp; <a className="call-us" href="/">Find a Home</a>
                    </div>
                    <div className="service-image col-sm" data-aos="fade-up">
                        <img  src={process.env.PUBLIC_URL + 'image/assets/img/service-find.jpg'} alt="Find a Home"/>
                    </div>
                    </div>
                    <div className="height-service"></div>
                  <hr className="horizontal"/>
                    {/* another sertvice-commercial */}

                    <div className="row">
                        <div className="service-image col-sm"  data-aos="fade-up">
                            <img  src={process.env.PUBLIC_URL + 'image/assets/img/hotel-rooms.jpg'} alt="Find a Home"/>
                        </div>
                        <div className="residential col-sm" data-aos="fade-up">
                            {/* <p className="residential-head ">Commercial</p> */}
                            <h3>Hotels</h3>
                            
                            <p className="service-text">Looking for a hotel that is close to an express way , near a hospital or with a  pool? We have the answer. Nibora Realtors deliver timely information about the hotel that suits your prefference with a single click of a button. We help you make memories at pocket friendly rates.</p> 
                            <br/>
                            {/* <p className="service-text">Nibora Realtors provide affordable fully furnished  houses for individuals and families looking for short-stay holidays.  </p> */}
                            <br/>
                            <a className="call-us" href="tel:0790943918">Call Us Now</a> &nbsp;&nbsp; or&nbsp;&nbsp; <a className="call-us" href="/">Find a Hotel </a>
                        </div>
                    </div>
                    {/* serive  commercial */}
                    <div className="height-service"></div>
                    <hr className="horizontal"/>
                    <div className="row">
                       
                        <div className="residential col-sm" data-aos="fade-up">
                            {/* <p className="residential-head ">Commercial</p> */}
                            <h3>Office Spaces and Shops</h3>
                            
                            <p className="service-text">Are you a business owner looking to expand your business with a well situated office space or a shop? Look no further! Here at Nibora Realtors we provide you with a personalised search on the office space or shop that will deffinately make your business accessible to the your potential customers.  </p> 
                            <br/>
                            {/* <p className="service-text">Nibora Realtors provide affordable fully furnished  houses for individuals and families looking for short-stay holidays.  </p> */}
                            <br/>
                            <a className="call-us" href="tel:0790943918">Call Us Now</a> &nbsp;&nbsp; or&nbsp;&nbsp; <a className="call-us" href="/">Find an Office </a>
                        </div>
                        <div className="service-image col-sm" data-aos="fade-up" data-aos-delay="100">
                            <img  src={process.env.PUBLIC_URL + 'image/assets/img/service-domore.jpg'} alt="Find a Shop"/>
                        </div>
                    </div>
                     {/* serive  commercial */}
                     <div className="height-service"></div>
                     <hr className="horizontal"/>
                    <div className="row">
                    <div className="service-image col-sm" data-aos="fade-up">
                            <img  src={process.env.PUBLIC_URL + 'image/assets/img/property-valuation.jpg'} alt="Property valuation"/>
                        </div>
                       
                        <div data-aos="fade-up" className="residential col-sm">
                            {/* <p className="residential-head ">Commercial</p> */}
                            <h3>Property Valuation</h3>
                            
                            <p className="service-text">How much is your property worth? We have the answer. Our experts use a comperative market analysis technique to help you place a monitory value on your property. Our valuation is based on <strong>location</strong>, <strong>Market trends</strong>, <strong>Condition of the Property</strong>, <strong>Age </strong>, <strong>size</strong>, <strong>construction</strong>, <strong>style</strong>. Among others.  </p> 
                            <br/>
                            {/* <p className="service-text">Nibora Realtors provide affordable fully furnished  houses for individuals and families looking for short-stay holidays.  </p> */}
                            <br/>
                            <a className="call-us" href="tel:0790943918">Call Us Now</a> &nbsp;&nbsp; or&nbsp;&nbsp; <a className="call-us" href="/">Property Valuers </a>
                        </div>
                      
                    </div>
                </div>
                <div className="height"></div>
            <div className="height"></div>
            <div className="call-to-acction">
                <div className="container">
                    <div className="col-sm text-center">
                        <h4>Seek the assisatnce of the best real estate team. We are here to help you through every step.</h4>
                            <div className="height"></div>
                            <a className="find-your-home-link" href="/contact#inquiry"><span className="find-your-home"> Start a conversation</span></a>

                    </div>

                </div>
            </div>
            <div className="height"></div>
            <div className="height"></div>
            <Footer/> 
            
        </>
    ) 
}
export default Service
