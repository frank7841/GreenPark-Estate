import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ListingForm from '../components/ListingForm';
import Listings from '../components/Listings';
import Pagination from '../components/Pagination';
import HomeBanner from '../components/HomeBanner';
import Footer from '../components/footer'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Featured from './Featured'

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
       
        <main className='home container-fluid'>
             <HelmetProvider>
            <Helmet>
                <title>Nibora Properties- Home</title>
                <meta
                    name='description'
                    content='Nibora Properties '
                />
            </Helmet>
            </HelmetProvider>
            <HomeBanner/>
            <section className='home-form ' id="search-form">
                <ListingForm setListings={setListings} />
            </section>
            <section className='home-listings'>
                <Listings listings={currentListings} />
            </section>
            <section className='home-pagination'>
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
            <section className='home-listings' id="featured">
                    <h3>New Listings</h3> 
                <Featured listings={currentListings} />
            </section>
            
        
        
            <Footer/>            
        </main>
        
      
    );
};

export default Home;