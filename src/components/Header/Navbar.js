import React from "react"

import styled from "styled-components"

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
      <div>navlinks</div>
    </NavbarContainer>
  )
}

export default Navbar
