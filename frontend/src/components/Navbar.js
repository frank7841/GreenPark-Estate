// import React from 'react'
// import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

// const navbar=({toggle})=> (
// <>
//       <Nav>
//           <NavLink to = "/">
//               <h1>GreenPark</h1>
//           </NavLink>
      
//             <Bars onClick = {toggle}/>
       
//           <NavMenu>
//               <NavLink to = "/"activeStyle>
//                   Home
//               </NavLink>
//               <NavLink to = "/listings" activeStyle>
//                   Listings
//               </NavLink>
//               <NavLink to = "/about" activeStyle>
//                   About
//               </NavLink>
//               <NavLink to = "/service   " activeStyle>
//                   Services
//               </NavLink>
//               <NavLink to = "/contact" activeStyle>
//                   Contact Us
//               </NavLink>
//               <NavLink to = "/signup" activeStyle>
//                   Sign Up
//               </NavLink>
//           </NavMenu>
//           <NavBtn>
//               <NavBtnLink to = "/login">Login</NavBtnLink>
//           </NavBtn>
//       </Nav>
//     </>
// )
// export default navbar;

// import React, { useState } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// // import Dropdown from './Dropdown';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(true);
//     }
//   };

//   const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(false);
//     }
//   };

//   return (
//     <>
//       <nav className='navbar'>
//         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//           EPIC
//           <i class='fab fa-firstdraft' />
//         </Link>
//         <div className='menu-icon' onClick={handleClick}>
//           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//         </div>
//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <li className='nav-item'>
//             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li
//             className='nav-item'
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//           >
//             <Link
//               to='/listing'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Listings <i className='fas fa-caret-down' />
//             </Link>
//             {/* {dropdown && <Dropdown />} */}
//           </li>
//           <li className='nav-item'>
//             <Link
//               to='/'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Products
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link
//               to='/contact-us'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               to='/sign-up'
//               className='nav-links-mobile'
//               onClick={closeMobileMenu}
//             >
//               Sign Up
//             </Link>
//           </li>
//         </ul>
//         <Button />
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
  width:100%;
  height:55px;
  border-bottom:2px solid #f1f1f1;
  padding:0 20px;
  display:flex;
  justify-content:space-between;

.logo{
  padding:15px 0;
}


`  

function Navbar() {
  return (
    <Nav>
      <div className="logo">
          NRE
        </div>
        <Burger/>
    </Nav>
  )
}

export default Navbar

