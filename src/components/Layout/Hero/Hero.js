import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.6;
  z-index: 1;
`

const HeroDetails = styled.div`
  border-radius: 5px;
  text-align: center;
  color: white;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Title = styled.h1`
  font-size: 4rem;
`

const StyledLink = styled(Link)`
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  padding: 10px 20px;
  border-style: solid;
  border-color: white;
  border-width: 2px;
  border-radius: 3px;
  text-decoration: none;
  display: block;
  width: 200px;
  margin: 20px auto;
  transition: color 0.5s, border-color 0.5s, width 0.5s;

  &:hover {
    color: ${props => props.theme.primary};
    border-color: ${props => props.theme.primary};
    width: 220px;
  }

  /* Small screens */
  @media all and (max-width: 767px) {
    font-size: 1rem;
  }
`

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "restaurant.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Overlay />
          <HeroDetails>
            <Title> Bienvenue chez Rest'O </Title>
            <StyledLink to="/menu">Menu</StyledLink>
          </HeroDetails>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 700px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
`

export default StyledBackgroundSection
