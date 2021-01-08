import React, { useState}from 'react'
import {Helmet} from 'react-helmet';
import ListingForm from '../components/ListingForm'
import Listings from '../components/Listings'
import Card from '../components/Card'
import Pagination from '../components/Pagination'

const Home=()=> {
    const [listings,serListings]= useState([]);
    const [currentPage,setCurrentPage]= useState([1]);
    const [listingsPerPage,setListingsPerPage]= useState([3]);
    const [active,setActive]= useState(1);


    const indexOfLastListings = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListings- listingsPerPage
    const currentListings= listings.slice(indexOfFirstListing, indexOfLastListings)


    const visitPage = (page) => {
        setCurrentPage(page);
        setActive(page);

    }    

    const previous_number = ()=> {
        if(currentPage !== 1){
            setCurrentPage(currentPage-1);
            setActive(currentPage-1);
        }   
    }

    const next_number = ()=> {
        if(currentPage !== Math.ceil(listings.length/3)){
            setCurrentPage(currentPage+1);
            setActive(currentPage+1);
        }
    }    
    return (
        <main>
            <Helmet>
                <title>Nibora Real Estate|Home</title>
                <meta
                    name="description"
                    content= "Real estate Home page"
                    />
            </Helmet>
        <div className="container-fluid home-banner">
        <img src={process.env.PUBLIC_URL + 'image/home-bannner.jpg'} alt="Snow" style={{width: '100%'}} />
        <div className="bottom-left">Bottom Left</div>
        <div className="top-left">Top Left</div>
        <div className="top-right">Top Right</div>
        <div className="bottom-right">Bottom Right</div>
        <div className="centered">Centered</div>
        </div>

        </main>
    )
    };
export default Home;
