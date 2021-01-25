import React, { useState} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'
import { Form, Button, Col} from 'react-bootstrap';

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
    open_house: 'false',
    keywords: ''
});

    const { sale_type, price, bedrooms, property_type, bathrooms, sqft, days_listed, has_photos, property_availability, keywords } = formData;


    const [loading, setLoading]= useState(false);

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    
  //   const onClick = e => {
  //     if (e.target.type === 'checkbox' && e.target.value === 'false') {
  //         setFormData({ ...formData, [e.target.name]: 'true' })
  //         console.log({ open_house });
  //     }
  //     else if (e.target.type === 'checkbox' && e.target.value === 'true') {
  //         setFormData({ ...formData, [e.target.name]: 'false' })
  //         console.log({ open_house });
  //     }
  // };
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
        <>
        <div className="listing-form">
        <Form onSubmit={e=>onSubmit(e)} >
        <Form.Row>
          <Form.Group as={Col} md="2" className="form-group">
            <Form.Label>Sale or Rent</Form.Label>
            <Form.Control as ="select"
              name="sale_type"
              onChange={e=> onChange(e)}
              value= {sale_type}>
                  <option>For Sale</option>
                  <option>For Rent</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="2" >
            <Form.Label>Min Price</Form.Label>
            <Form.Control as ="select"
              name="price"
              onChange={e=> onChange(e)}
              value= {price}>
                  <option>Ksh 0+</option>
                  <option>Ksh 2,000,000</option>
                  <option>Ksh 4,000,000 </option>
                  <option>Ksh 10,000,000</option>
                  <option>Ksh 12,000,000</option>
                  <option>Ksh 14,000,000 </option>
                  <option>Ksh 20,000,000</option>
                  <option>Ksh 24,000,000</option>
                  <option>Ksh 48,000,000 </option>
                  <option>Ksh 50,000,000</option>
                  <option>Any</option>
            </Form.Control>

          </Form.Group>
          <Form.Group as={Col} md="2" >
            <Form.Label>Bedrooms</Form.Label>
            <Form.Control as ="select"
              name="bedrooms"
              onChange={e=> onChange(e)}
              value= {bedrooms }>
                  <option>0+</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+ </option>
                  <option>5+</option>
                  <option>6+</option>
            </Form.Control>
         </Form.Group>
         <Form.Group as={Col} md="2" >
            <Form.Label>Property Type</Form.Label>
            <Form.Control as ="select"
              name="property_type"
              onChange={e=> onChange(e)}
              value= {property_type }>
                  <option>Home</option>
                  <option>Townhouse</option>
                  <option>Guesthouse</option>
                  <option>Hotel</option>
                  <option>Shops</option>
                  <option>Office</option>
                  <option>Plots</option>
            </Form.Control>
         </Form.Group>
         <Form.Group as={Col} md="2" >
            <Form.Label>Baths</Form.Label>
            <Form.Control as ="select"
              name="bathrooms"
              onChange={e=> onChange(e)}
              value= {bathrooms }>
                  <option>0+</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+ </option>
            </Form.Control>
         </Form.Group>
         <Form.Group as={Col} md="2" className="form-group">
            <Form.Label>Available</Form.Label>
            <Form.Control as ="select"
              name="property_availability"
              onChange={e=> onChange(e)}
              value= {property_availability}>
                  <option>True</option>
                  <option>False</option>
            </Form.Control>
          </Form.Group>
      
         
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} md="2">
            <Form.Label>Sqft</Form.Label>
            <Form.Control as ="select"
              name="sqft"
              onChange={e=> onChange(e)}
              value= {sqft}>
                  <option>400+</option>
                  <option>1200+</option>
                  <option>1400+</option>
                  <option>1600+</option>
                  <option>2000+</option>
                  <option>Any</option>
            </Form.Control>
          </Form.Group>
          
        {/* </Form.Row>
        <Form.Row> */}
          <Form.Group as={Col} md="2">
            <Form.Label>Days Listed</Form.Label>
            <Form.Control as ="select"
              name="days_listed"
              onChange={e=> onChange(e)}
              value= {days_listed }>
                  <option>1 or less</option>
                  <option>3 or less</option>
                  <option>12 or less</option>
                  <option>15 or less</option>
                  <option>20 or less  </option>
                  <option>Any</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="2" >
            <Form.Label>Has Photos</Form.Label>
            <Form.Control as ="select"
              name="has_photos"
              onChange={e=> onChange(e)}
              value= {has_photos }>
                  <option>1+</option>
                  <option>3+</option>
                  <option>5+</option>
                  <option>10+</option>
                  <option>15+ </option>
            </Form.Control>
         </Form.Group>
         
       
         <Form.Group as={Col} md="2" >
            <Form.Label>Keywords</Form.Label>
            <Form.Control 
              name="keywords"
              onChange={e=> onChange(e)}
              value= {keywords }>
             </Form.Control>
         </Form.Group>
         <Form.Group as={Col} md="2" >
         {loading ?
            <Loader
              type= "Oval"
              color="424242"
              height={50}
              width={50}
               />
            :
            <Button className="save-button" type="submit">Save</Button>
 
            }

</Form.Group>
        
           </Form.Row>
    </Form>
    </div>
    </>

    )
}
Listingform.propTypes ={
    setListings:PropTypes.func.isRequired
};

export default Listingform 

