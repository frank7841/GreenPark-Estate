import React from 'react'
import {SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
    } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => (
    <div className = "container">
        <SidebarContainer isOpen={isOpen} onClick= {toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "/" onClick= {toggle}>Home</SidebarLink>
                    <SidebarLink to = "/listings" onClick= {toggle}>Listings</SidebarLink>
                    <SidebarLink to = "/about" onClick= {toggle}>About</SidebarLink>
                    <SidebarLink to = "/contact" onClick= {toggle}>Contact Us</SidebarLink>
                    <SidebarLink to = "/signup" onClick= {toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = "/login">Login</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    </div>
    );

export default Sidebar
