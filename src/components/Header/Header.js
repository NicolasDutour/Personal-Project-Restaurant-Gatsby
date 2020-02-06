import React from "react"
import styled from "styled-components"

import Navbar from "./Navbar"

const HeaderContainer = styled.header`
  box-shadow: rgba(186, 186, 186, 0.5) 0px 2px 4px 0px;
  height: 80px;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Navbar siteTitle={siteTitle} />
  </HeaderContainer>
)

export default Header
