import React from 'react'
import { Carousel }  from 'react-bootstrap';


const HomeBanner=()=> {
    return (
        <>
        <Carousel className="captioning" >
            <Carousel.Item >
                <img
                className="d-block w-100 image-height"
                src={process.env.PUBLIC_URL + 'image/image6.jpg'}
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
                src={process.env.PUBLIC_URL + 'image/image2.jpg'}
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

                <Carousel.Caption >
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
                <p className="caption-details"><h3>Office Spaces for Rent/Sale</h3>
                Sky Rocket Your business with state of the art office spaces </p>
                </Carousel.Caption>
            </Carousel.Item>
        
        </Carousel>
        </>
    )
}
export default HomeBanner;
