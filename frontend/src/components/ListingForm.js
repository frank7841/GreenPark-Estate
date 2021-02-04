import React, { useState} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'


const Listingform = (props)=> {
  const [formData, setFormData] = useState({
    sale_type: 'For Sale',
    price: 'ksh 0+',
    bedrooms: '0+',
    property_type: 'House',
    bathrooms: '0+',
    sqft: '400+',
    days_listed: '1 or less',
    has_photos: '1+',
    property_availability: 'True',
    keywords: ''
});

    const { sale_type, price, bedrooms, property_type, bathrooms, sqft, days_listed, has_photos, property_availability, keywords } = formData;


    const [loading, setLoading]= useState(false);

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    
    const onSubmit = e =>{
        e.preventDefault();

        axios.default.headers ={
            "Content-Type": "application/json"
        };
        setLoading(true);
        axios.post('http://localhost:8000/api/listings/search', { sale_type, price, bedrooms, property_type, bathrooms, sqft, days_listed, has_photos, property_availability, keywords } )
        .then(res =>{
            setLoading(false);
            props.setListings(res.data);
            window.scrollTo(0,0);

        })
        .catch(err=>{
            setLoading(false);
            window.scrollTo(0,0);
        }) 
    }
    return (
      <form className="listing-form" onSubmit={e=>onSubmit(e)}>
      <div className="row">  
        <div className="col-sm-10">
        <div className="row">
          {/* sale or rent */}
          <div className="form-group col-sm">
            <label htmlFor ="sale_type">Sale or Rent</label>
            <select className="form-control" name="sale_type" value={sale_type} onChange={e=>onChange(e)}>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
          <div className="form-group col-sm">
            <label htmlFor ="price">Min Price</label>
            <select className="form-control" name="price" value={price} onChange={e=>onChange(e)}>
              <option>ksh 0+</option>
              <option>Ksh 4,000,000+</option>
              <option>Ksh 6,000,000+</option>
              <option>Ksh 8,000,000+</option>
              <option>Ksh 12,000,000+</option>
              <option>Ksh 24,000,000+</option>
              <option>Any</option>
            </select>
          </div>
          <div className="form-group col-sm">
            <label htmlFor ="bedrooms">Bedrooms</label>
            <select className="form-control" name="bedrooms" value={bedrooms} onChange={e=>onChange(e)}>
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
              <option>6+</option>
              <option>7+</option>
            </select>
          </div>

          <div className="form-group col-sm">
            <label htmlFor ="property_type">Property Type</label>
            <select className="form-control" name="property_type" value={property_type} onChange={e=>onChange(e)}>
              <option>Home</option>
              <option>Guesthouse</option>
              <option>Townhouse</option>
              <option>Hotel</option>
              <option>Plots</option>
              <option>Shops</option>
              <option>Office</option>
            </select>
          </div>
          
          <div className="form-group col-sm">
            <label htmlFor ="bathrooms">Baths</label>
            <select className="form-control" name="bathrooms" value={bathrooms} onChange={e=>onChange(e)}>
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
              <option>6+</option>
            </select>
          </div>

          

          </div> 
          {/* close row 1 */}

          <div className="row">

          {/* sqft */}
          <div className="form-group col-sm">
            <label htmlFor ="sqft">sqft</label>
            <select className="form-control" name="sqft" value={sqft} onChange={e=>onChange(e)}>
              <option>400+</option>
              <option>1200+</option>
              <option>1400+</option>
              <option>1600+</option>
              <option>1800+</option>
              <option>2000+</option>
              <option>Any</option>
            </select>
          </div>
          {/* price */}
          
          <div className="form-group col-sm">
            <label htmlFor ="days_listed">Days listed</label>
            <select className="form-control" name="days_listed" value={days_listed} onChange={e=>onChange(e)}>
              <option>1 or less</option>
              <option>2 or less</option>
              <option>5 or less</option>
              <option>10 or less</option>
              <option>20 or less</option>
              <option>Any</option>
            </select>
          </div>
          <div className="form-group col-sm">
            <label htmlFor ="has_photos">Has Photos</label>
            <select className="form-control" name="has_photos" value={has_photos} onChange={e=>onChange(e)}>
              <option>1+</option>
              <option>3+</option>
              <option>5+</option>
              <option>10+</option>
              <option>15+</option>
              
            </select>
          </div>
          <div className="form-group col-sm">
            <label htmlFor ="property_availability">property Availability</label>
            <select className="form-control" name="property_availability" value={property_availability} onChange={e=>onChange(e)}>
              <option>True</option>
              <option>False</option>
            </select>
          </div>
          <div className="form-group col-sm">
            <label htmlFor ="keywords">Keywords</label>
            <input type="text" className="form-control" name="keywords" value={keywords} onChange={e=>onChange(e)}/>
          </div>

        </div>
        </div>
        <div className="col-sm">
          {loading ?
          <div className="loader">
            
            <Loader
            type="Oval"
            color="#424242"
            height={50}
            weight={50}
             />
             </div> :
             <button className="btn btn-success" onClick={e=>onSubmit(e)} type="submit">Save </button>

            }
          
      </div>
      </div>      
      </form>
      

    )
}
Listingform.propTypes ={
    setListings:PropTypes.func.isRequired
};

export default Listingform 

