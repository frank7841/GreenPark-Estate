import React, {useEffect} from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Slide } from 'react-slideshow-image';
import Footer from '../components/footer'
import background from'../components/asset/guiding-principle.svg'
import Scroll from '../components/Scroll'
import ReadMoreReact from 'read-more-react';
import{makeStyles} from '@material-ui/core/styles'


const About=()=> {
    useEffect(()=>{
        Aos.init({duration:4000})

    }, []);   
    const styles= {
        guide: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
     },
     
        asection:{ 
            maxWidth: '120%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }


    } 
  
    return(
    
        <div>
             <HelmetProvider>
            <Helmet>
                <title>Nibora Properties - About Us</title>
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
                                <a className="item-link"href="/advertise">
                                <span className="icon"><img src= {process.env.PUBLIC_URL + 'image/assets/img/user.svg'} alt="why choose us"/></span>
                                <span class="icon-title">Advertise with us&nbsp;»</span></a>

                           </li>
                        </ul>
            
                    </div>
                </div>
            </div>    

          
            <div className="height"></div>
            <div className="container-fluid display-on-pc" style= {styles.guide}>
                <div className="container" style= {styles.asection}>   
                <h2 className="about-text-color text-center"> our guiding principles</h2>
                    <p className="principles-text">We re proud of our company's heritage and accomplishments: They define who we are today and guides us to who we will be tommorrow.</p>
                    <p className="principles-text">We succeed because we think  creatively, we assess opportunities astutely , and act quickly than others.This are our lifeblood.</p>
                    <p className="principles-text">We hold ourselves to the highest standards, not standards set by others. </p>
                    <p className="principles-text">Our single minded persuit is creating extraordinery value to our customers and patners. </p>
               </div>
                
            </div>


           
            <div className="container-fluid guideline-mobile" style= {styles.guide}>
            {/* <img  src= {process.env.PUBLIC_URL + 'image/assets/img/guiding-mobile.png'} alt="Our principles" className="img-responsiveness"/> */}
                <div className="container" style ={styles.asection}>
                    <h2 className="principles-header"> guiding principles</h2>
                    <p className="principles-text">We re proud of our company's heritage and accomplishments: <br/>They define who we are today and guides us to who we will be tommorrow.</p>
                    <p className="principles-text">We succeed because we think  creatively, we assess opportunities astutely, and act quickly than others.This are our lifeblood.</p>
                    <p className="principles-text">We hold ourselves to the highest standards, not standards set by others. </p>
                    <p className="principles-text">Our single minded persuit is creating extraordinery value to our customers and patners. </p>
                </div>
            </div> 
            <div className="height"></div>
            <div className="height"></div>
                <div className="container">
                    <div className="col-sm text-center">
                        <h4>Seek the assisatnce of the best real estate team. We are here to help you through every step.</h4>
                            <div className="height"></div>
                            <a className="find-your-home-link" href="#"><span className="find-your-home"> Find Your Home</span></a>

                </div>
            </div>
            <div className="height"></div>
            <div className="height"></div>
            <hr/>
            <div className="core-values container-fluid">
            <div className="height"></div>
                <div className="container">
                    <div className="col-sm-12">
                    <Slide easing="ease"
                    arrows={false}>    
                        <div className="vission text-center each-slide">
                            <h1>Our Mision</h1>
                            <blockquote><p>To be the best full-service Real Estate Company in Kenya, and to provdie excellent services to our clients</p></blockquote>
                        </div>
                    
                        <div className="vission text-center each-slide">
                            <h1>Our Vission</h1>
                            <blockquote><p>To achieve the highest possible standards of the Real Estate Industry while establishing our Agency as the preffered Real Estate Company within our market area. </p></blockquote>
                        </div>
                    </Slide>    
                    </div>
                    
                </div>
                <div className="height"></div>
            </div>

            <Footer/>
        </div>
    );
}
export default About
