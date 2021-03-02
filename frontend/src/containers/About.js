import React, {useEffect} from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Scroll from '../components/Scroll'
import ReadMoreReact from 'read-more-react';
import{makeStyles} from '@material-ui/core/styles'


const About=()=> {
    useEffect(()=>{
        Aos.init({duration:4000})

    }, []);   
  
    return(
    
        <div>
             <HelmetProvider>
            <Helmet>
                <title>Nibora Realest Estate - About Us</title>
                <meta
                    name='description'
                    content='Nibora Realest Estate What We do'
                />
            </Helmet>
            </HelmetProvider>
            <div className="height"></div>
           <div className="about-header container">
               <div className="row">
                   <div className="col-sm-7">
                        {/* <hr className="top-about"/> */}
                        <h3 className="hola-Nibora" data-aos="slide-up"> Hola! We are Nibora Realtors.</h3>
                        <div className="row">
                            <div className="col-sm-10">
                                <p className="service-text" data-aos="fade-in">We work to ensure all your real estate needs are met. Do You have a property that you want listed? <strong>Call us today.</strong> Are you looking for a real estate property to buy or rent  any where in kenya? visit <strong>Nibora Home</strong> today for exclusive deals in holiday inns, hotels, and many more or <strong>Call us Now</strong> and get sorted. </p>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                    
                        <h3 className="hola-Nibora">Learn More</h3>
                        <hr className="top-about"/>
                        <ul className="learn-link">
                        <li className="learn-padding">
                                <a className="item-link"href="#">
                                <span className="icon"><img src= {process.env.PUBLIC_URL + 'image/assets/img/bolt.svg'} alt="why choose us"/></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="icon-title">Why choose Us&nbsp;»</span></a>

                           </li>
                           <li className="learn-padding">
                                <a className="item-link"href="#">
                                <span className="icon"><img src= {process.env.PUBLIC_URL + 'image/assets/img/users.svg'} alt="why choose us"/></span>
                                <span class="icon-title">Our Associates&nbsp;»</span></a>

                           </li>
                           <li  className="learn-padding" >
                                <a className="item-link"href="#">
                                <span className="icon"><img src= {process.env.PUBLIC_URL + 'image/assets/img/user.svg'} alt="why choose us"/></span>
                                <span class="icon-title">Advertise with us&nbsp;»</span></a>

                           </li>
                        </ul>
            
                    </div>
                </div>
            </div>    
            <div className="height"></div>
            <div className="container-fluid">
                <div className="maintxt">
                    <img  src= {process.env.PUBLIC_URL + 'image/assets/img/about-us-3.jpg'} alt="Our principles" className="img-responsive"/>
                    <section className="overlay-text">
                        
                    </section>
                </div>    
            </div>        
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
        </div>
    );
}
export default About
