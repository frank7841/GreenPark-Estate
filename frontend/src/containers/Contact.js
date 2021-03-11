import React from 'react'
import background from '../components/contact.png'
import backgroundForm from '../components/show-contact.jpg'
import {  faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 
const contact=()=> {
    const styles= {
        contact: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
        
     },
     
        csection:{ 
            maxWidth: '110%',
    
        },

            contactUs: {
                backgroundImage: `url(${backgroundForm})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
               
                
                
             },    
    }

    return (
    
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm contact-mobile">
                        <h1 className="contact-section">Contact Us About any of your Real Estate Needs. </h1>
                    </div>
                    <div className="col-sm contact-img">
                        <div className="contact-img-section" style={styles.contact}>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid get-in-touch">
                <div className="row">
                    <div className="col-sm contact-border text-center">
                        <img src= {process.env.PUBLIC_URL + 'image/assets/img/Calling.png'} alt="call-us" className="contact-icon"/><br/>
                        <h3>Call us directly</h3><br/>
                        <a href="tel:+254790943918"> <span className="link-height">+254790943918</span></a>

                    </div>
                    <div className="col-sm contact-border text-center">
                    <img src= {process.env.PUBLIC_URL + 'image/assets/img/Messages.png'} alt="call-us"  className="contact-icon"/><br/>
                        <h3>Get in touch</h3><br/>
                        <a className="link-contact" href="#inquiry"> <span className="link-height-meeting">Submit your inquiries</span></a>
                    </div>
                    <div className="col-sm contact-border text-center">
                    <img src= {process.env.PUBLIC_URL + 'image/assets/img/Date.png'} alt="call-us"  className="contact-icon"/><br/>
                        <h3>Request a call</h3><br/>
                        <a className="link-contact" href="#"> <span className="link-height-meeting">Choose a date & time</span></a>

                    </div>
                </div>
            </div>

            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div class="container col-sm-8 form-qiury">
                <div className="row">
                    <div className="col-sm-6 form-input">
                        <form>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" name="name" id="name"/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" name="email" id="email"/>
                            </div>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <textarea type="text" className="form-control" name="name" id="name" rows="4" cols="50"/>
                            </div>
                            <button type="button" class="                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  btn-success">Success</button>
                                
                            </form>
                    </div>
                    <div className="co-sm contact-info">
                        <div className="height"></div>
                            <div className="contact-info-link">
                                <span></span><h4>Address</h4>
                                <p> Pwani Medical Cetre</p>
                                <p>1st floor</p>   
                            </div>
                            <div className="contact-info-link">
                                <span></span><h4>Conatct</h4>
                                <p> phone</p>
                                <p>< a className="social-links-color"  href="#"> <FontAwesomeIcon icon={faWhatsapp} size="2x" /></a></p>
                                <p>Press</p>   
                            </div>

                    </div>
                </div>
            </div>
                  
        </>

    );
}
export default contact