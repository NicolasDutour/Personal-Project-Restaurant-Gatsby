import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const NavLinks = () => {
  return (
    <div>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/menu">Menu</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </div>
  )
}

export default NavLinks
