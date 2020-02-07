import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: black;
  border-bottom: 1px solid black;
  color: white;
`

const StyledLink = styled.a`
  color: ${props => props.theme.primary};
  margin-left: 10px;
`

const Footer = ({ siteAuthor }) => (
  <FooterWrapper>
    © {new Date().getFullYear()}, Developed by{" "}
    <StyledLink
      href="https://www.nicolasdutour.com"
      target="_blank"
      rel="noopener"
    >
      {siteAuthor}
    </StyledLink>
  </FooterWrapper>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: ``,
}

export default Footer
