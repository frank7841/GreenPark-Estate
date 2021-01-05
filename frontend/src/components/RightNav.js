import React, {Fragment} from 'react'
import styled from 'styled-components';
import {NavLink,  Link} from 'react-router-dom';
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
    }

    @media screen  and (max-width:768px){
        flex-flow:column nowrap;
        background-color:#0d2538;
        position:fixed;
        top:0;
        right:0;
        height:100vh;
        width:300px;
        padding-top:3.5rem;
        transform:${({open})=> open ? 'translateX(0)': 'translateX(100%)'};
        transition:transform 0.3s ease-in-out;

    li{
        color:#ffffff;
        text-decoration:none;

    }    


    }
`;

const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    margin-right:15px;
    padding-top:1.5rem;
    
    
  `
const NavBtnLink = styled(Link)`
border-radius:4px;
background: green;
padding: 8px  18px;
color:#ffffff;
cursor:pointer;
border: none;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:  #1a1a1a;
    color:#ffffff;
    border: 2px solid blue;
     
}


`

const RightNav = ({ auth:{isAuthenticated, loading}, logout, open} ) => {

    const authLinks = (
        <a className="top-van-link" onClick={logout} href="#!">Logout</a>

    );
    const guestLinks = (
      <>
          <li><NavLink className = "nav-item"exact to='/signup'>Sign Up</NavLink></li>
          <li><NavLink className = "nav-btn nav-item"exact to = "/login">Login </NavLink></li>
    </>
    );
    
    return (
        <>
        <Ul open = {open}  >
          <li><NavLink className="nav-item" exact to='/' >Home</NavLink></li>
          <li><NavLink className ="nav-item" exact to ='/listings'>Listings</NavLink></li>
          <li> <NavLink className = "nav-item" exact to ='/service'>Services</NavLink> </li>
          <li><NavLink className ="nav-item"exact to ='/about'>About</NavLink></li>
          <li><NavLink className = "nav-item"exact to= '/contact'>Contacts</NavLink></li>
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

logout: propTypes.func. isRequired,
auth: propTypes.func. isRequired,
}


const mapStateToProps = state=> ({
    auth:state.auth
})

export default connect(mapStateToProps, {logout})(RightNav)
