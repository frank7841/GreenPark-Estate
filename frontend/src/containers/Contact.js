import React from 'react'
import background from '../components/asset/contact.jpg'
import { Icon } from 'semantic-ui-react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Scroll from '../components/Scroll'
import Footer from '../components/footer'

 
const contact=()=> {
    const styles= {
        barner: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
     },
     
        background:{ 
            maxWidth: '110%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            
        }


    }
  

    return (
    
        <>
         <HelmetProvider>
            <Helmet>
                <title>Nibora Properties - Contact Us</title>
                <meta
                    name='description'
                    content='Nibora Properties'
                />
            </Helmet>
            </HelmetProvider>
            <Scroll showBelow={250}/>
        <div className="container-fluid" style={styles.barner}>
        <div className=" img-responsive" style={styles.background}>
                    <div className=" top-barner-section">
                        <div className="row">
                            <div className="col-sm-12">
                                <section className="nibora-realtors-contact text-center"><p className="dont-settle-contact">CONTACT US</p>
                                </section> 
                                
                            </div>
                            
                        </div>    
                    </div> 

                </div>
        </div>  

            <div className="container-fluid get-in-touch">
                <div className="row">
                    <div className="col-sm contact-border text-center">
                        <img src= {process.env.PUBLIC_URL + 'image/assets/img/Calling.png'} alt="call-us" className="contact-icon"/><br/>
                        <h3>Call us directly</h3><br/>
                        <a href="tel:+2547111338357"> <span className="link-height">+2547111338357</span></a>

                    </div>
                    <div className="col-sm contact-border text-center">
                    <img src= {process.env.PUBLIC_URL + 'image/assets/img/Messages.png'} alt="call-us"  className="contact-icon"/><br/>
                        <h3>Get in touch</h3><br/>
                        <a className="link-contact" href="#inquiry"> <span className="link-height-meeting">Submit your inquiries</span></a>
                    </div>
                    <div className="col-sm contact-border text-center">
                    <img src= {process.env.PUBLIC_URL + 'image/assets/img/Date.png'} alt="call-us"  className="contact-icon"/><br/>
                        <h3>Request a call</h3><br/>
                        <a className="link-contact" href="#call-request"> <span className="link-height-meeting">Choose a date & time</span></a>

                    </div>
                </div>
            </div>
            <div className="height"></div>
            <div className="height"></div>
            <div class="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mobile-get-in-touch">
                            <h3>Call us directly</h3><br/>
                            <a href="tel:07111338357"> <span className="link-height-mobile">+254 7111338357</span></a>
                        </div>
                    </div>
                </div>
                <div className="height"></div>
                <div className="row">
                    <div className="col-sm-12">
                    <div className="mobile-get-in-touch">
                        <h3>Get in touch</h3><br/>
                        <a className="link-contact" href="#inquiry"> <span className="link-height-meeting">Submit your inquiries</span></a>    
                    </div>
                    </div>
                </div> 
                <div className="height"></div>
                <div className="row">
                    <div className="col-sm-12">
                    <div className="mobile-get-in-touch">
                    <h3>Request a call</h3><br/>
                    <a className="link-contact" href="#call-request"> <span className="link-height-meeting">Choose a date & time</span></a>
                    </div>   
                    </div>
                    
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 form-input" id="inquiry">
                        <h1>Start a conversation</h1>
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
                           <button className="btn btn-success">Send Message</button>
                         </form>
                    </div>     
                    
                    <div className="col-sm">
                        <div className="height"></div>
                            <div className="contact-info-link"> 
                            <h3 >Get in touch with us</h3>
                            <ul className="contact-link">
                               <section className="container-fluid">                     
                               {/* <li>
                                <div className="row">
                                    <div className="col-sm-2">
                                 <Icon circular inverted color="teal" name="map marker alternate" size="large"/>
                                </div>
                                <div className="col-sm">
                                    <p>Pwani Medical Cetre</p>
                                    <p>Kilifi</p>
                                    <p>P.O Box </p>
                                </div>
                                </div>
                                </li> */}
                                <li><a  href="tel:+2547111338357"><Icon circular inverted color="teal" name="phone" size="large"/>+254 7111338357 </a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=+2547115659271"><Icon circular inverted color="teal" name="whatsapp" size="large"/>+254 7115659271</a></li>
                                <li><a href="mailto:info@niborarealtors.co.ke"> <Icon circular inverted color="teal" name="mail" size="large"/>info@niborarealtors.co.ke</a></li>
                               </section> 
                            </ul>
                            </div>

                    </div>
                </div>
            </div>
            <hr/>
            <div className="container-fluid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.8103925618448!2d39.8518312147588!3d-3.630728797358066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183fdd7f81853d75%3A0x378016a8fdf73a6c!2sNibora%20Realtors!5e0!3m2!1sen!2ske!4v1616676006316!5m2!1sen!2ske" 
            width="100%" 
            height="450"
            style={{border:0}}
            allowfullscreen="" 
            loading="lazy"></iframe>
            </div>

             <hr/>                   
            <div className="container -fluid">
                <div className="row">
                    <div className="col-sm" id="call-request">
                    <h1 className="header"> Call Back Request Form</h1>
                    <form >
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" name="name" id="name"/>
                            </div>
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input type="tel" className="form-control" name="phone" id="phone"/>
                            </div>
                            <div className="form-group">
                                <label for="date-time-pick">Preffered Date & Time</label>
                                <input type="datetime-local" id="date-time-pick" className="form-control" name="date-time-pick"/>
                            </div>
                            <div className="form-group">
                                <label for="reason">What would you wish to achieve from the call?</label>
                                <input type="text" className="form-control" name="phone" id="phone"/>
                            </div>
                           <button className="btn btn-success">Request Call</button>
                         </form>
                        </div> 
                        <div className="col-sm call-back-details ">
                            <h4 className="text-center items-align">Ask How can we help you</h4>
                            <ul className="learn-link">
                                <li className="learn-link-list"> <a href="#"> Why invest on real estate ?&nbsp;» </a> </li>
                                <li className="learn-link-list"> <a href="#"> Advantages of owning a home? &nbsp;»</a> </li>
                                <li className="learn-link-list"> <a href="#"> Search our database for listings&nbsp;»</a> </li>
                                <li className="learn-link-list"> <a href="#"> Our Pattners &nbsp;»</a> </li>
                                <li className="learn-link-list"><a href="/advertise">Advertise With us &nbsp;»</a></li>
        
                            </ul>
                        </div>
                </div>

            </div>
            <Footer/>
                  
        </>

    );
}
export default contact