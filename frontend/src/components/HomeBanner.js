import React from 'react'
import background from './asset/nairobi_background.jpg'


const HomeBanner=()=> {
    const styles= {
        barner: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
     },
     
        background:{ 
            maxWidth: '110%',
            
            
        }


    }
    return (
            <div className=""id="home-image" style={styles.barner}>
                <div className="container " style={styles.background}>
                    <div className=" top-barner-section">
                        <div className="row">
                            <div className="col-sm-12">
                                <section className="nibora-realtors text-center"><p className="dont-settle">DON'T SETTLE FOR AVERAGE</p>
                                <p className="pre-text">We at Nibora Properties are consistently recognized for having the scale and the wit to lead the real estate industry to the future. Our research based algorithms gets you closer to your deserving vacation, becoming a home owner, getting the best office space   <a className="link-awesome" href="/service">and many more</a>&nbsp;<a className="link-awesome" href="/contact" >Get in touch with us.</a></p>
                                <p className="searchlink-location"><a href="#search-form" className="nibora-search-link">Search Listings&nbsp;»</a></p>
                                </section> 
                                <div></div>   
                               
                            </div>
                             </div>    
                    </div> 

                </div>
            </div>


        
    )
}
export default HomeBanner;
