import React from "react"
import styled from "styled-components"

const TitleContainer = styled.h2`
  font-size: 2.5rem;
  margin: 30px 0;
  text-align: center;
`

const Title = ({ name }) => {
  return <TitleContainer>{name}</TitleContainer>
}

export default Title
