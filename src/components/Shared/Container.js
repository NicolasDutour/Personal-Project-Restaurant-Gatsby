import React from "react"
import styled from "styled-components"

const ContainerWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 30px;
`

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

export default Container
