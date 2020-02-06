import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"

import NavLinks from "./NavLinks"

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
  margin: 0 auto;
`

const StyledMenu = styled(FaAlignRight)`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
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
  const [open, setOpen] = useState(false)

  return (
    <NavbarContainer>
      <StyledLogo to="/"> {siteTitle} </StyledLogo>
      <StyledMenu />
      <NavLinks />
    </NavbarContainer>
  )
}

export default Navbar
