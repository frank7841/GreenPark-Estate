import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format';



const Featuredcard = (props) => {
  
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
 
    return ( 
        <>
        <div className="card  card-property">
        {/* <span className="new-listings">New!</span> */}

            <h3 className="card-titile-featured">
            {props.title}
            </h3> 
            <div className="card-header">
            <img className="card-img-top" src={props.photo_main} alt="property "/>
            </div>
            <div className="card-body">
                <div className="card-text">
                    <p className="location">{props.address},{props.town},{props.county}</p>
                    <div className="row">
                        <div className="col-sm">
                            <p className="card-infomation">Price: <NumberFormat value={props.price} displayType={'text'} thousandSeparator={true} prefix={'Ksh'}/> </p> 
                            <p className="card-infomation">Bedrooms:{props.bedrooms}</p> 
                            <p className="card-infomation">Bathrooms:{props.bathrooms}</p> 

                        </div>
                        <div className="col-sm">
                            <p className="card-sale-type">{props.sale_type}</p> 
                            <p className="card-property-type">{props.property_type}</p> 
                            <p className="card-sqft">Sqft:{props.sqft}</p> 

                        </div> 
                        <br/>
                    </div>
                    <div>
                        <br/>
                    <Link  onClick={scrollToTop} className="card-link" to={`/listings/${props.slug}`}>View Listing</Link>
                    </div>
                </div>
            </div>
            
        </div>
        </>    
    )
};
Featuredcard.propTypes = {
    title: PropTypes.string.isRequired,
    photo_main: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
    county: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.string.isRequired,
    sale_type: PropTypes.string.isRequired,
    property_type: PropTypes.string.isRequired,
    sqft: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
};

export default Featuredcard
