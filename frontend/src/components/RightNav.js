import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';
import Alert from './Alert';
import propTypes from 'prop-types';

const Ul = styled.ul`
  list-style:none;
  display: flex;
  flex-flow:row nowrap;
  
    li{
    padding: 18px 10px;
    cursor:pointer;
    color:#ffffff!important;
    }
    .nav-item{
        font-size:16px!important;
    }  
    


    @media screen  and (max-width:768px){
        flex-flow:column nowrap;
        background-color:#0e373d;
        position:fixed;
        top:0;
        right:0;
        height:100vh;
        width:300px;
        padding-top:3.5rem;
        transform:${({open})=> open ? 'translateX(0)': 'translateX(100%)'};
        transition:transform 0.3s ease-in-out;
        z-index:9;

    li{
        color:#ffffff;
        text-decoration:none;

    }  
   

    }
    li{
        color:#ffffff!important;
    }
`;

const RightNav = ({  open, auth:{isAuthenticated, loading}, logout} ) => {

    const authLinks = (
        <a className="top-van-link" onClick={logout} href="#!">Logout</a>

    );
    const guestLinks = (
      <>
          
          <li><NavLink className = "nav-btn nav-item"exact to = "/login">Login </NavLink></li>
    </>
    );
    
    return (
        <>
        <Ul open = {open}  >
          <li><NavLink className="nav-item "activeClassName="current" exact to='/' >Home</NavLink></li>
          <li><NavLink className ="nav-item" activeClassName="current" exact to ='/listings'>Listings</NavLink></li>
          <li> <NavLink className = "nav-item" activeClassName="current"exact to ='/service'>Services</NavLink> </li>
          <li><NavLink className ="nav-item"activeClassName="current"exact to ='/about'>About</NavLink></li>
          <li><NavLink className = "nav-item"activeClassName="current"exact to= '/contact'>Contacts</NavLink></li>
          <li><NavLink className = "nav-item"activeClassName="current"exact to='/advertise'>Advertise</NavLink></li>
          {/* <li><NavLink className = "nav-item"exact to='/signup'>Sign Up</NavLink></li>
          <NavBtn>
               <NavBtnLink to = "/login">Login</NavBtnLink>
           </NavBtn> */}
           <> { !loading && (<>{ isAuthenticated ? authLinks : guestLinks }</>) }</>
        </Ul>
       
        <Alert/>   
        </>  
    )
}

RightNav.propTypes= {

logout: propTypes.func.isRequired,
auth: propTypes.func.isRequired
}


const mapStateToProps = state=> ({
    auth:state.auth
})

export default connect(mapStateToProps, {logout})(RightNav)
