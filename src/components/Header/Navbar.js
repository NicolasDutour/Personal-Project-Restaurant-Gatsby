import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import NavLinks from "./NavLinks"

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
  margin: 0 auto;
`

const StyledLogo = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 2rem;
  transition: border 0.5s, color 0.5s;
  border: 2px solid black;
  padding: 6px;

  &:hover {
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.primary};
  }
`

const Navbar = ({ siteTitle }) => {
  return (
    <NavbarContainer>
      <StyledLogo to="/"> {siteTitle} </StyledLogo>
      <NavLinks />
    </NavbarContainer>
  )
}

export default Navbar
