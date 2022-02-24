
import React from 'react'
import { SidebarContainer,CloseIcon,
     Icon,SidebarWrapper,SidebarMenu,SidebarLink,
    SideBtnWrap,
    SidebarRoute } from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">
                    About
                </SidebarLink>
                <SidebarLink to="discover">
                    Dsicover
                </SidebarLink>
                <SidebarLink to="services">
                    Services
                </SidebarLink>
                <SidebarLink to="signup">
                    Sign Up
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">
                    Sign In
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>

  )
}

export default Sidebar