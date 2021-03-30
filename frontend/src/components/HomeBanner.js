import React from 'react'
import { Carousel }  from 'react-bootstrap';
import background from './asset/another.svg'


const HomeBanner=()=> {
    const styles= {
        barner: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
     },
     
        background:{ 
            maxWidth: '110%',
            // backgroundColor: 'rgba(0, 0, 0, 0.3)',
            
        }


    }
    return (
        <>
            <div className="container-fluid img-responsive" style={styles.barner}>
                <div className="container " style={styles.background}>
                    <div className=" top-barner-section">
                        <div className="row">
                            <div className="col-sm-12">
                                <section className="nibora-realtors text-center"><p className="dont-settle">DON'T SETTLE FOR AVERAGE</p>
                                <p className="pre-text">We at Nibora Properties are consistently recognized for having the scale and the wit to lead the real estate industry to the future. Our research based algorithms gets you closer to your deserving vacation, becoming a home owner, getting the best office space   <a className="link-awesome" href="/service">and many more</a>&nbsp;<a className="link-awesome" href="/contact" >Get in touch with us.</a></p>
                                <p className="searchlink-location"><a href="#serach-form" className="nibora-search-link">Search Listings&nbsp;»</a></p>
                                </section> 
                                <div></div>   
                               
                            </div>
                             </div>    
                    </div> 

                </div>
            </div>


        {/* <Carousel className="captioning" >
            <Carousel.Item >
                <img
                className="d-block w-100 image-height img-responsive"
                src={process.env.PUBLIC_URL + 'image/mnarani-greenpark.png'}
                alt="First slide"
                />
                <Carousel.Caption>
                <p className ="caption-details"><h3>Fully Furnished Executive Houses for rent! </h3>
                Looking for a furnished home for rent? We gat you! </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                className="d-block w-100 image-height"
                src={process.env.PUBLIC_URL + 'image/new1.jpeg'}
                alt="Third slide"
                />

                <Carousel.Caption >
                <p className="caption-details"><h3>Awesome Houses for rent/ Sale</h3>
                Dont Miss out on Superb Houses for Sale/ Rent  </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 image-height"
                src={process.env.PUBLIC_URL + 'image/image3.jpg'}
                alt="Third slide"
                />

                <Carousel.Caption  >
                <p className="caption-details"><h3>Dream Houses for sale</h3>
                Keep Calm! Lets Us get You  Your dream Home</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 image-height"
                src={process.env.PUBLIC_URL + 'image/image4.jpg'}
                alt="First slide"
                />
                <Carousel.Caption>
                <p  className="caption-details"><h3>Office Spaces for Rent/Sale</h3>
                Sky Rocket Your business with state of the art office spaces </p>
                </Carousel.Caption>
            </Carousel.Item>
        
        </Carousel> */}
        </>
    )
}
export default HomeBanner;
