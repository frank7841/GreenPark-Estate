import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
  width:100%;
  height:'fit-content';
  border-bottom:2px solid #f1f1f1;
  padding:0 20px;
  display:flex;
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
          <p className="logo-brand"><span className="nibora-stat">Nibora</span> <span className="nibora-end">Properties</span></p>
          {/* <img className="logo-size"src= {process.env.PUBLIC_URL + 'image/assets/img/Gazebo2.png'}/> Nibora  */}
      </div>
          <a className="top-number" href="tel:0790943918">+254 790 943918</a>
        </div>
        <Burger/>
    </Nav>
  )
}

export default Navbar

