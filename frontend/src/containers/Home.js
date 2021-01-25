import React, { useState}from 'react'
import {Helmet} from 'react-helmet';
import ListingForm from '../components/ListingForm'
import Listings from '../components/Listings'
import Pagination from '../components/Pagination'
import { Carousel }  from 'react-bootstrap';

const Home = () => {
    const [listings, setListings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [listingsPerPage, setListingsPerPage] = useState(3);
    const [active, setActive] = useState(1);

    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;
    const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing);

    const visitPage = (page) => {
        setCurrentPage(page);
        setActive(page);
    };

    const previous_number = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage-1);
            setActive(currentPage-1);
        }
    };

    const next_number = () => {
        if (currentPage !== Math.ceil(listings.length/3)) {
            setCurrentPage(currentPage+1);
            setActive(currentPage+1);
        }
    };

    return (
        <main>
            <Helmet>
                <title>Nibora Real Estate|Home</title>
                <meta
                    name="description"
                    content= "Real estate Home page"
                    />
            </Helmet>
            <div >
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
                    </div>
                    <section className='home_form'>
                <ListingForm setListings={setListings} />
            </section>
            <section className='home_listings'>
                <Listings listings={currentListings} />
            </section>
            <section className='home_pagination'>
                <div className='row'>
                    {
                        listings.length !== 0 ? (
                            <Pagination
                                itemsPerPage={listingsPerPage}
                                count={listings.length}
                                visitPage={visitPage}
                                previous={previous_number}
                                next={next_number}
                                active={active}
                                setActive={setActive}
                            />
                        ) : null
                    }
                </div>
            </section>
           
        </main>
    )
    };
export default Home;
