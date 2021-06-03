import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter, faInstagram,faLinkedinIn  } from '@fortawesome/free-brands-svg-icons';
import background from './asset/footer-bg.jpeg'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Footer=()=> {
    const notify = () => toast.info("Thank you for joining our community!", );

    function sendEmail(e) {
        e.preventDefault();
       
    
        emailjs.sendForm('subscribe', 'template_viqpihe', e.target, 'user_gmpL76qnP6VL7MNybw78l')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    const styles= {
        footer: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
     },
     
        fsection:{ 
            maxWidth: '110%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
       


    }
    return (
            <footer style= {styles.footer}>
            <div className="container-fluid fsection" style ={styles.fsection}>
            <div className="mail-height"></div>
            <div className="container">
                <div className= "row">
                    <div className="col-sm-3"></div>
                  
                    <div className="parent-wrapper col-sm-6">
                        <div className="subscribe-wrapper">
                            <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                            <form onSubmit={sendEmail}>
                                <input type="email" name="email" className="subscribe-input" placeholder="youremail@gmail.com" />
                                <button className="submit-btn" onClick={notify}>Subscribe</button>
                                <ToastContainer />
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>  


                    {/* <div className=" card card-background col-sm-6">
                        <div className="card-body subscribe ">
                            <h2 className="text-center">Sign up now!</h2>
                            <p className="text-center">Get the best prices, latest news, new listings notification, and exclusive promotions conveniently in your inbox!  </p>
                            <form onSubmit={sendEmail}>
                                <div className="input-group mb-3 subscribe">
                                <input type="email" name="email" id="email" className="form-control" placeholder="example@gmail.com" aria-label="Recipient's username" aria-describedby="button-addon2"  />
                                <button className=" btn-success "id="button-addon2"onClick={notify}><span className="sign-up-button">Subscribe</span></button>
                                <ToastContainer />
                             </div>
                            </form>
                        </div>
                    </div>    */}
              
            <div className="height"></div>
            <div className="row">
            <div className="height"></div>
                <div className="col-sm-4 about-footer">
                    
                    <img className="logo-size"src= {require('./asset/Gazebo1G.png').default} alt="Nibora Properties "/> 
                        <h4>Connect with Us</h4>    
                      <div className="row social ">
                      
                            < a className="social-links"   target="_blank" rel="noreferrer" href="https://www.facebook.com/Nibora-Properties-101018138802077"> <FontAwesomeIcon icon={faFacebookF} size="2" /></a>
                            < a className="social-links"  target="_blank" rel="noreferrer"href="https://twitter.com/nib_properties">  <FontAwesomeIcon icon={faTwitter} size="3" /></a>
                            < a className="social-links" target="_blank" rel="noreferrer"href="https://www.instagram.com/niboraproperties/">  <FontAwesomeIcon icon={faInstagram} size="" /></a>
                            {/* < a className="social-links"  target="_blank"href="#">  <FontAwesomeIcon icon={faYoutube} size="" /></a> */}
                            < a className="social-links" target="_blank" rel="noreferrer"href="https://www.linkedin.com/in/nibora-properties-0b292420b/">  <FontAwesomeIcon icon={faLinkedinIn} size="" /></a>
                    </div>
                </div>
                
                <div className="col-sm address-footer">
                    <h4 className="footer-border"> Links</h4>
                    <ul className="learn-link">
                        <li className="color-white"><a className="item-link-footer" href="/contact">Contact us&nbsp;»</a> </li><br/>
                        <li className="color-white"><a  className="item-link-footer"href="/">Our Associates&nbsp;»</a> </li><br/>
                        <li className="color-white"><a className="item-link-footer" href="/advertise">Advertise with us&nbsp;»</a> </li><br/>
                        <li className="color-white"><a className="item-link-footer" href="/about">Why choose us&nbsp;»</a> </li><br/>
                        <li className="color-white"><a className="item-link-footer" href="/service">What we do &nbsp;»</a> </li><br/>
                        <li className="color-white"><a className="item-link-footer" href="/listings">Listings&nbsp;»</a> </li><br/>
                        <li className="color-white"><a className="item-link-footer" href="/">Featured Listings&nbsp;»</a> </li><br/>
                    </ul>
                </div>
                <div className="col-sm address-footer">
                    <h4>Address</h4>
                    <p className="about-text">1st floor</p>
                    <p className="about-text">Pwani House</p>
                    <p className="about-text">Ronald Ngala, Kilifi</p>
                    <p className="about-text"> <a className="" href="tel:0111338357">+254 111338357</a></p>
                    <p className="about-text"> <a className="" href="tel:115659271">+254 115659271</a></p>
                    <p className="about-text"> <a className="" href="mailto:info@niboraproperties.co.ke">info@niboraproperties.co.ke</a></p>


                </div>

            </div>
            <div className="copyright text-center">
            <small>&copy; Copyright {new Date().getFullYear()}, Nibora Properties</small>
            </div>
            </div>
        </footer>
       
    )
}
export default Footer;