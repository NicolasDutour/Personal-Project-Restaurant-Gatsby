import React from "react"
import styled from "styled-components"

import NavLinks from "./NavLinks"

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
`

const Navbar = ({ siteTitle }) => {
  return (
    <NavbarContainer>
      <div> {siteTitle} </div>
      <NavLinks />
    </NavbarContainer>
  )
}

export default Navbar
