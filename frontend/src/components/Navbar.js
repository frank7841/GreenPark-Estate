import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const navbar=()=> (
    <>
      <Nav>
          <NavLink to = "/">
              <h1>GreenPark</h1>
          </NavLink>
          <Bars/>
          <NavMenu>
              <NavLink to = "/"activeStyle>
                  Home
              </NavLink>
              <NavLink to = "/listings"activeStyle>
                  Listings
              </NavLink>
              <NavLink to = "/about" activeStyle>
                  About
              </NavLink>
              <NavLink to = "/contact" activeStyle>
                  Contact Us
              </NavLink>
              <NavLink to = "/signup" activeStyle>
                  Sign Up
              </NavLink>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to = "/login">Login</NavBtnLink>
          </NavBtn>
      </Nav>
    </>
)
export default navbar;