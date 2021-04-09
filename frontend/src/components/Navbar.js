import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
  width:100%;
  height:'fit-content';
  border-bottom:2px solid #f1f1f1;
  padding:0 20px;
  display:flex;
  background-color:rgb(105,105,105);
  justify-content:space-between;
  
  

.logo{
   width:50%
}



`  

function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <div className="navbar-brand">
          <p className="logo-brand">< a href="/"><span className="nibora-stat">Nibora</span> <span className="nibora-end">Properties</span></a></p>
          {/* <img className="logo-size"src= {process.env.PUBLIC_URL + 'image/assets/img/logo101.png'}/>   */}
      </div>
          <a className="top-number" href="tel:07111338357">+254 7111338357</a>
        </div>
        <Burger/>
    </Nav>
  )
}

export default Navbar

