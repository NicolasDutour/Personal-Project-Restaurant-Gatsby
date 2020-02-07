import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavlinksWrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-left: 20px;
  font-size: 1.3rem;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.5s, color 0.5s;

  &:hover {
    color: ${props => props.theme.primary};
    border-bottom: 2px solid ${props => props.theme.primary};
  }
`

const NavLinks = () => {
  return (
    <NavlinksWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/menu">Menu</StyledLink>
    </NavlinksWrapper>
  )
}

export default NavLinks
