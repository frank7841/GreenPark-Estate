import React, {useEffect} from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Scroll from '../components/Scroll'


const About=()=> {
    useEffect(()=>{
        Aos.init({duration:8000})

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
                        <hr className="top-about"/>
                        <h3 className="hola-Nibora" data-aos="slide-up"> Hola! We are Nibora Realtors.</h3>
                        <div className="row">
                            <div className="col-sm-10">
                                <p className="service-text" data-aos="fade-in">We work to ensure all your real estate needs are met. Do You have a property that you want listed? <strong>Call us today.</strong> Are you looking for a real estate property to buy or rent  any where in kenya? visit <strong>Nibora Home</strong> today for exclusive deals in holiday inns, hotels, and many more or <strong>Call us Now</strong> and get sorted. </p>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                    <div className="service-image col-sm-5">
                        <img data-aos="slide-left" src={process.env.PUBLIC_URL + 'image/assets/img/hand-shake.jpg'} alt="Done deal"/>
                    </div>
                </div>
            </div>    
            <div className="height"></div>
            <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                        <hr className="top-about"/>
                        <h3 className="hola-Nibora text-centre">How we help</h3>    
                        <p className="service-text">This is How we help</p>
                        </div>
                        <div className="col-sm-6 height">
                            <img  src="" alt="How we help"/>
                        </div>
                       
                    </div>

                    <div className="row">
                    <div className="col-sm-6 height">
                            <img  src="" alt="How we help"/>
                        </div>
                        <div className="col-sm-6">
                            <hr className="top-about"/>
                            <h3 className="hola-Nibora text-centre">Who we help</h3>    
                            <p className="service-text">This is How we help</p>
                        </div>
                       
                    </div>
                    <div className="mission-statement">
                        Mission Statement
                    </div>
                    
            </div>
        </div>
    );
}
export default About
