import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import Hero from "../components/Layout/Hero/Hero"
import Title from "../components/Shared/Title"
import Container from "../components/Shared/Container"

const Description = styled.div`
  font-size: 1.2rem;
  margin-bottom: 20px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const ImageItem = styled.div`
  margin-bottom: 20px;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query getHeroImageQuery {
      allContentfulLayoutHero {
        edges {
          node {
            heroTitle
            heroImage {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
      allFile(filter: { relativeDirectory: { eq: "indexPage" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 400) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={data.allContentfulLayoutHero.edges[0].node.heroTitle}
        image={data.allContentfulLayoutHero.edges[0].node.heroImage.fluid}
      />
      <div>
        <Title name="Notre mission" />
        <Container>
          <Description>
            Récompensé par une étoile au guide Michelin en 2010, le Rest'O est
            devenu la brasserie chic du Tout Paris. L’escalier en fer forgé
            participe à l’ambiance élégante et chaleureuse du lieu tandis que la
            cuisine ouverte rend l’espace si convivial.
          </Description>
          <Description>
            Notre mission est de vous faire découvrir une cuisine diverse et
            variée en nous inspirant des plats les plus connus dans le monde
            entier.
          </Description>
          <ImageContainer>
            {data.allFile.edges.map((edge, index) => (
              <ImageItem>
                <Img fixed={edge.node.childImageSharp.fixed} />
              </ImageItem>
            ))}
          </ImageContainer>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
