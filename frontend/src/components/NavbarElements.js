import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars, FarBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #000000;
    height: 80ps;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px)/2);
    z-index:10;
`


export const NavLink = styled(Link)`
    color:#ffffff;
    display: flex;
    align-items: center;
    text-decoration:none;
    padding:0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color:green;
    }
`
export const Bars = styled(FaBars)`
    display:none;
    color:#ffffff;
    @media screen  and (max-width:768px){
        display:block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor:pointer
    }
`

export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right:-24px;
    @media screen and (max-width:768px){
        display:none;
    }

`
export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    margin-right:24px;
    @media screen  and (max-width:768px){
        display:none;
    }
`
export const NavBtnLink = styled(Link)`
    border-radius:4px;
    background: green;
    padding: 10px  22px;
    color:#ffffff;
    cursor:pointer;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color:#010606;
         
    }
`