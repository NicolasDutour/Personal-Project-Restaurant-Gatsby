import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLinksMobileWrapper = styled.div`
  display: block;
  position: absolute;
  top: 80px;
  left: 0;
  background-color: white;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  display: block;
  color: black;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  text-decoration: none;
  font-size: 1.3rem;
  border: 2px solid transparent;
  transition: border-bottom 0.5s, color 0.5s;

  &:hover {
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.primary};
  }
`

const NavLinksMobile = () => {
  return (
    <NavLinksMobileWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/menu">Menu</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </NavLinksMobileWrapper>
  )
}

export default NavLinksMobile
