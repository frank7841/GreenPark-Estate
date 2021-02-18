import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter, faInstagram, faYoutube,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Footer=()=> {
    return (
        <footer className="container-fluid ">
            <div className="height"></div>
            <div className="row">
            <div className="height"></div>
                <div className="col-sm-4 about-footer">
                    <h4>About Us</h4>
                    <p className="about-text">We take care of all your Real estate and  Hotel related needs. We provide for you realtime detailed information about Houses for rent or Sale, GuestHouses for Short Stay, Hotels, Offices for Rent or Sale and may more .All arround Kenya.  </p>
                    <div className="row social ">
                            < a className="social-links"  href="#"> <FontAwesomeIcon icon={faFacebookF} size="sm" /></a>
                            < a className="social-links" href="#"> <FontAwesomeIcon icon={faTwitter} size="sm" /></a>
                            < a className="social-links" href="#"> <FontAwesomeIcon icon={faInstagram} size="sm" /></a>
                            < a className="social-links" href="#"> <FontAwesomeIcon icon={faYoutube} size="sm" /></a>
                            < a className="social-links" href="#"> <FontAwesomeIcon icon={faLinkedinIn} size="sm" /></a>
                    </div>
                </div>
                <div className="col-sm address-footer">
                    <h4>Address</h4>


                </div>
                <div className="col-sm address-footer">
                    <h4> Links</h4>
                </div>

                <div className="col-sm address-footer">
                    <h4>Join Our Newsleter</h4>
                </div>

            </div>
        </footer>
    )
}
export default Footer;