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
    
        <SidebarContainer isOpen={isOpen} onClick= {toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "/listings">Listings</SidebarLink>
                    <SidebarLink to = "/about">About</SidebarLink>
                    <SidebarLink to = "/contact">Contact Us</SidebarLink>
                    <SidebarLink to = "/signup">Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = "/login">Login</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );

export default Sidebar
