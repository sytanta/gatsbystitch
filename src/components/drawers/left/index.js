import React from "react"
import styled from "styled-components"

const Container = styled.div`
  left: 0;
  text-align: left;
`

const DrawerLeft = ({ className }) => (
  <Container className={className}>Left</Container>
)

export default DrawerLeft
