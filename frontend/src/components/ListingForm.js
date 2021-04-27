import React, { useState} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'


const  Listingform= (props)=>{

  
  const [formData, setFormData] = useState({
    sale_type: 'For Sale',
    price: 'ksh 0+',
    bedrooms: '0+',
    property_type: 'Home',
    town: 'Kilifi',
    keywords: ''
});

    const {
      sale_type,
      price,
      bedrooms, 
      property_type, 
      town,  
      keywords  
    } = formData;


    const [loading, setLoading]= useState(false);
    

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    
    const onSubmit = e =>{
        e.preventDefault();

        axios.default.headers ={
            "Content-Type": "application/json"
        };
        setLoading(true);
        axios.post('http://localhost:8000/api/listings/search',
         {sale_type,
          price,
          bedrooms, 
          property_type, 
          town,  
          keywords 
        } )
        .then(res =>{
            setLoading(false);
            props.setListings(res.data);
            // window.scrollTo(170,250);
            document.querySelector(".home-listings").scrollIntoView({
              behavior: "smooth"
          });
          
            console.log(res)

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
            <label htmlFor ="town" className="label">Town</label>
            <select className="form-control input-design" name="town" value={town} onChange={e=>onChange(e)}>
              <option>Kilifi</option>
              <option>Malindi</option>
              <option>Mombasa</option>
              <option>Nanyuki</option>
              <option>Kisumu</option>
              <option>Nairobi</option>
              <option>Kitale</option>
            </select>
          </div>

          <div className="form-group col-sm">
            <label htmlFor ="property_type" className="label">Property Type</label>
            <select className="form-control input-design" name="property_type" value={property_type} onChange={e=>onChange(e)}>
              <option>Home</option>
              <option>Guesthouse</option>
              <option>Townhouse</option>
              <option>Hotel</option>
              <option>Plots</option>
              <option>Land</option>
              <option>Shops</option>
              <option>Office</option>
            </select>
          </div>

          <div className="form-group col-sm">
            <label htmlFor ="sale_type" className="label">Sale or Rent</label>
            <select className="form-control input-design" name="sale_type" value={sale_type} onChange={e=>onChange(e)}>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
             


       
          
          
          

          </div> 
          {/* close row 1 */}

          <div className="row">

          {/* sqft */}
          {/* <div className="form-group col-sm">
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
          </div> */}
          {/* price */}

          <div className="form-group col-sm">
            <label htmlFor ="bedrooms" className="label">Bedrooms</label>
            <select className="form-control input-design" name="bedrooms" value={bedrooms} onChange={e=>onChange(e)}>
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
            <label htmlFor ="price" className="label">Min Price</label>
            <select className="form-control input-design" name="price" value={price} onChange={e=>onChange(e)}>
              <option>ksh 0+</option>
              <option>Ksh 2,000,000+</option>
              <option>Ksh 4,000,000+</option>
              <option>Ksh 6,000,000+</option>
              <option>Ksh 8,000,000+</option>
              <option>Ksh 12,000,000+</option>
              <option>Ksh 24,000,000+</option>
              <option>Any</option>
            </select>
          </div>
          {/* <div className="form-group col-sm">
            <label htmlFor ="days_listed" className="label">Days listed</label>
            <select className="form-control input-design" name="days_listed" value={days_listed} onChange={e=>onChange(e)}>
              <option>1 or less</option>
              <option>2 or less</option>
              <option>5 or less</option>
              <option>10 or less</option>
              <option>20 or less</option>
              <option>Any</option>
            </select>
          </div> */}
          {/* <div className="form-group col-sm">
            <label htmlFor ="has_photos">Has Photos</label>
            <select className="form-control" name="has_photos" value={has_photos} onChange={e=>onChange(e)}>
              <option>1+</option>
              <option>3+</option>
              <option>5+</option>
              <option>10+</option>
              <option>15+</option>
              
            </select>
          </div> */}
          <div className="form-group col-sm">
            <label htmlFor ="keywords" className="label">Keywords</label>
            <input type="text" className="form-control input-design" name="keywords" value={keywords} onChange={e=>onChange(e)}/>
          </div>
          {/* <div className="form-check col-sm">
            <input type="checkbox"  className="form-check-input" name="open_house" value={open_house} onChange={e=>onChange(e)}/>
            <label htmlFor ="open_house">open_house</label>
          </div> */}

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
             <button className="btn btn-success"><Icon><i class="search icon"></i></Icon>Search </button>

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

