import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format';



const card = (props) => {
    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    //   }
 
    return (
        <div className="card col-sm-3">
                <div className="card-body">
            <h3 className="card-titile">
                {props.title}
            </h3>
            <div className="card-header">
            <img class="card-img-top" src={props.photo_main} alt="property "/>
            </div>
            <div className="card-body">
                <div className="card-text">
                    <p className="location">{props.address},{props.city}, {props.county}</p>
                    <div className="row">
                        <div className="col-sm">
                            <p classNmae="card-info">Price: <NumberFormat value={props.price} displayType={'text'} thousandSEperator={true} prefix={'Ksh'}/> </p> 
                            <p classNmae="card-info">Bedrooms:{props.bedrooms}</p> 
                            <p classNmae="card-info">Bathrooms:{props.bathrooms}</p> 

                        </div>
                        <div className="col-sm">
                            <p classNmae="card-sale-tyoe">{props.sale_type}</p> 
                            <p classNmae="card-property-type">{props.property_type}</p> 
                            <p classNmae="card-sqft">Sqft:{props.sqft}</p> 

                        </div> 
 
                    </div>
                    <Link classNmae="card-link" to={`/listings/${props.slug}`}>View Listings</Link>
                </div>
            </div>
            </div>
        </div>
    )
};
card.propTypes = {
    title: PropTypes.string.isRequired,
    photo_main: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    county: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.string.isRequired,
    sale_type: PropTypes.string.isRequired,
    property_type: PropTypes.string.isRequired,
    sqft: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
};

export default card
