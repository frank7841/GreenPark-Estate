import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ListingForm from '../components/ListingForm';
import Listings from '../components/Listings';
import Pagination from '../components/Pagination';
import HomeBanner from '../components/HomeBanner';
import Footer from '../components/footer'
import 'react-slideshow-image/dist/styles.css'
import Featured from './Featured'

const Home = () => {
    const [listings, setListings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [listingsPerPage] = useState(3);
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
            setCurrentPage(currentPage - 1);
            setActive(currentPage - 1);
        }
    };
 
    const next_number = () => {
        if (currentPage !== Math.ceil(listings.length/3)) {
            setCurrentPage(currentPage + 1);
            setActive(currentPage + 1);
        }
    };
    

    return (
        <>
             <HelmetProvider>
            <Helmet>
                <title>Nibora Properties- Search Homes| Hotels| Land| GuestHouses| Apartments| Shops| Office| Spaces| Plots</title>
                <meta
                    name='description'
                    content='The leading real estate marketplace. Search for rent and sale listings including fully furnished guesthouses for short stay. Connect with local professionals in the real estate industry'
                />
            </Helmet>
            </HelmetProvider>
       
            <HomeBanner/>
            <section className='home-form container-fluid' id="search-form">
                <ListingForm setListings={setListings} />
            </section>
            <section className='home-listings home-featured-listings container-fluid'>
                <Listings listings={currentListings} />
            </section>
            <section className='home-pagination container'>
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
            <section className='home-featured-listings container-fluid' id="featured listings">
            <h1 className="text-center top-top-add">Featured Listings</h1>
            <hr className="horizontal " size="large"/>
                <Featured listings={currentListings} />
            </section>
            
        
        
            <Footer/>            
        </>
      
      
    );
};

export default Home;