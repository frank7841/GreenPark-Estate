import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter, faInstagram, faYoutube,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import background from './about-us-3.jpg'


const Footer=()=> {

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
                    <div className=" card card-background col-sm-6">
                        <div className="card-body ">
                            <h2 className="text-center">Sign up now!</h2>
                            <p className="text-center">Get the best prices, latest news, new listings notification, and exclusive promotions conveniently in your inbox!  </p>
                            <div className="input-group mb-3 subscribe">
                            <input type="text" className="form-control" placeholder="example@gmail.com" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className=" btn-success " type="button" id="button-addon2"><span className="sign-up-button">Sign Up</span></button>
                            </div>
                        </div>
                    </div>
              
            <div className="height"></div>
            <div className="row">
            <div className="height"></div>
                <div className="col-sm-4 about-footer">
                    <h4>About Us</h4>
                    <p className="about-text">We take care of all your Real estate and  Hotel related needs. We provide for you realtime detailed information about Houses for rent or Sale, GuestHouses for Short Stay, Hotels, Offices for Rent or Sale and may more .All arround Kenya.  </p>
                    <div className="row social ">
                            < a className="social-links"  href="#"> <FontAwesomeIcon icon={faFacebookF} size="sm" /></a>
                            < a className="social-links" href="#">  <FontAwesomeIcon icon={faTwitter} size="sm" /></a>
                            < a className="social-links" href="#">  <FontAwesomeIcon icon={faInstagram} size="sm" /></a>
                            < a className="social-links" href="#">  <FontAwesomeIcon icon={faYoutube} size="sm" /></a>
                            < a className="social-links" href="#">  <FontAwesomeIcon icon={faLinkedinIn} size="sm" /></a>
                    </div>
                </div>
                
                <div className="col-sm address-footer">
                    <h4 className="footer-border"> Links</h4>
                    <ul className="learn-link">
                        <li className="color-white"><a className="item-link-footer" href="#">Contact us&nbsp;»</a> </li>
                        <li className="color-white"><a  className="item-link-footer"href="#">Our Associates&nbsp;»</a> </li>
                        <li className="color-white"><a className="item-link-footer" href="#">Advertise with us&nbsp;»</a> </li>
                        <li className="color-white"><a className="item-link-footer" href="#">Why choose us&nbsp;»</a> </li>
                        <li className="color-white"><a className="item-link-footer" href="#">What we do &nbsp;»</a> </li>
                        <li className="color-white"><a className="item-link-footer" href="#">About us&nbsp;»</a> </li>
                    </ul>
                </div>
                <div className="col-sm address-footer">
                    <h4>Address</h4>


                </div>

            </div>
            <div className="copyright text-center">
            <small>&copy; Copyright {new Date().getFullYear()}, Nibora Realtors</small>
            </div>
            </div>
        </footer>
       
    )
}
export default Footer;