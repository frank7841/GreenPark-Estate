import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedCard from '../components/Featuredcard';
import Pagination from '../components/Pagination';

const Listings = () => {
    const [listings, setListings] = useState([]);
    const [count, setCount] = useState(0);
    const [previous, setPrevious] = useState('');
    const [next, setNext] = useState('');
    const [active, setActive] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {
                const res = await axios.get(`https://niboraproperties.co.ke/api/listings/featured?page=1`);

                setListings(res.data.results);
                setCount(res.data.count);
                setPrevious(res.data.previous);
                setNext(res.data.next);
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    const displayListings = () => {
        let display = [];
        let result = [];

        listings.map(listing => {
            return display.push(
                <FeaturedCard
                title={listing.title}
                address={listing.address}
                town={listing.town}
                county={listing.county}
                price={listing.price}
                sale_type={listing.sale_type}
                property_type={listing.property_type}
                bedrooms={listing.bedrooms}
                bathrooms={listing.bathrooms}
                sqft={listing.sqft}
                photo_main={listing.photo_main}
                slug={listing.slug} 
                />
            );
        });

        for (let i = 0; i < listings.length; i +=listings) {
            result.push(
                <div key={i} className='row'>
                    <div className='col-sm-4 colum-design'>
                        {display[i]}
                    </div>
                    <div className='col-sm-4 colum-design'>
                        {display[i+1] ? display[i+1] : null}
                    </div>
                    <div className='col-sm-4 colum-design'>
                        {display[i+2] ? display[i+2] : null}
                    </div>                    
                </div>
                
            );
            
        }

        return result;
    };

    const visitPage = (page) => {
        axios.get(`https://niboraproperties.co.ke/api/listings/featured?page=${page}`)
        .then(res => {
            setListings(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            setActive(page);
        })
        .catch(err => {

        });
    };

    const previous_number = () => {
        axios.get(previous)
        .then(res => {
            setListings(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            if (previous)
                setActive(active-1);
        })
        .catch(err => {

        });
    };

    const next_number = () => {
        axios.get(next)
        .then(res => {
            setListings(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            if (next)
                setActive(active+1);
        })
        .catch(err => {

        });
    };
    

    return (
        <main className='listings'>
        
            <div className='container-fluid'>
                {displayListings()}
            </div>
           
                <div className='row'>
                    <Pagination
                        itemsPerPage={3}
                        count={count}
                        visitPage={visitPage}
                        previous={previous_number}
                        next={next_number}
                        active={active}
                        setActive={setActive}
                    />
                </div>
            
        </main>
    );
};

export default Listings;