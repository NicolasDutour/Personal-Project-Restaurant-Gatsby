import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import Hero from "../components/Layout/Hero/Hero"

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
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={data.allContentfulLayoutHero.edges[0].node.heroTitle}
        image={data.allContentfulLayoutHero.edges[0].node.heroImage.fluid}
      />
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
      <div>gfdgdfgfd</div>
    </Layout>
  )
}

export default IndexPage
