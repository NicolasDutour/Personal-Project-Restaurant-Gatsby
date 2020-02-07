import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "../components/Shared/Title"

const ContainerMenu = styled.div`
  width: 85%;
  margin: 0 auto;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

const Button = styled.button`
  font-size: 1.8rem;
  margin: 0 20px;
  border: 2px solid ${props => props.theme.primary};
  padding: 5px 10px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    display: block;
  }
`

const Item = styled.div`
  display: flex;
  width: 40%;
  box-shadow: rgba(186, 186, 186, 0.5) 0px 2px 4px 0px;
  padding: 10px;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const ImageMenu = styled.div`
  flex: 1;
  border-radius: 10px;
`

const StyledImg = styled(Img)`
  border-radius: 10px;
  height: 100%;
`

const Details = styled.div`
  flex: 3;
  padding: 0 10px;

  @media (max-width: 992px) {
    margin-bottom: 10px;
  }
`

const TitleItem = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`

const Ingredients = styled.div`
  font-size: 1.2rem;
`

const Price = styled.div`
  flex: 1;
  font-size: 1.8rem;
  text-align: center;
`

const Menu = () => {
  const data = useStaticQuery(graphql`
    query getAllItemMenuQuery {
      allContentfulMenuItem {
        edges {
          node {
            dishPrice
            dishTitle
            dishIngredients
            dishImage {
              fixed(height: 150, width: 150) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Menu" />
      <Title name="Menu" />
      <ContainerMenu>
        <ButtonsWrapper>
          <Button>Tout</Button>
          <Button>Pizza</Button>
          <Button>Burger</Button>
        </ButtonsWrapper>
        <ItemsWrapper>
          {data.allContentfulMenuItem.edges.map((edge, index) => {
            return (
              <Item key={index}>
                <ImageMenu>
                  <StyledImg fixed={edge.node.dishImage.fixed} />
                </ImageMenu>
                <Details>
                  <TitleItem>{edge.node.dishTitle}</TitleItem>
                  <Ingredients>{edge.node.dishIngredients}</Ingredients>
                </Details>
                <Price> {edge.node.dishPrice}€ </Price>
              </Item>
            )
          })}
        </ItemsWrapper>
      </ContainerMenu>
    </Layout>
  )
}

export default Menu
