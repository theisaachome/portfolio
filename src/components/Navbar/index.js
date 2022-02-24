import React from 'react'
import { FaBars } from "react-icons/fa";
import { Nav,
  NavbarContainner,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
NavBtnLink} from "./NavbarElements";
const Navbar = () => {
  return (
    <>
    <Nav>
      <NavbarContainner>
        <NavLogo to="/">dolla </NavLogo>
        <MobileIcon>
          <FaBars/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Dsicover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup">Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainner>
    </Nav>
    </>
  )
}

export default Navbar