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
            {/* <div className="height"></div> */}
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
            <div className="container-fluid guideline-on-pc">
                <div className="maintxt">
                    <img  src= {process.env.PUBLIC_URL + 'image/assets/img/about-us-3.jpg'} alt="Our principles" className="img-responsive"/>
                    <section className="overlay-text">
                        <div className="container">
                            <div className="about-principles">
                                <h2> <span className="about-text-color"> our guiding principles</span></h2>
                                <p className="principles-text">We re proud of our company's heritage and accomplishments: They define who we are today and guides us to who we will be tommorrow.</p>
                                <p className="principles-text">We succeed because we think  creatively, we assess opportunities astutely , and act quickly than others.This are our lifeblood.</p>
                                <p className="principles-text">We hold ourselves to the highest standards, not standards set by others. </p>
                                <p className="principles-text">Our single minded persuit is creating extraordinery value to our customers and patners. </p>
                               

                            </div>
                        </div>
                    </section>
                </div>  
            </div>       
            <div className="height"></div>
            <div className="guideline-mobile">
            <img  src= {process.env.PUBLIC_URL + 'image/assets/img/guiding-mobile.png'} alt="Our principles" className="img-responsive"/>
                <div className="content">
                    <h2 className="principles-header"> guiding principles</h2>
                    <p className="principles-text">We re proud of our company's heritage and accomplishments: <br/>They define who we are today and guides us to who we will be tommorrow.</p>
                    <p className="principles-text">We succeed because we think  creatively, we assess opportunities astutely, and act quickly than others.This are our lifeblood.</p>
                    <p className="principles-text">We hold ourselves to the highest standards, not standards set by others. </p>
                    <p className="principles-text">Our single minded persuit is creating extraordinery value to our customers and patners. </p>
                </div>
            </div> 
            <div></div>
        </div>
    );
}
export default About
