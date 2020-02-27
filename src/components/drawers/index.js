import React from "react"
import styled from "styled-components"

import DrawerLeft from "./left"
import DrawerRight from "./right"

const Container = styled.div`
  background: #fff;
  bottom: 0;
  height: auto;
  left: 0;
  position: absolute;
  top: 0;
  right: 0;
  width: auto;

  .drawer {
    bottom: 0;
    height: auto;
    max-width: 320px;
    overflow: auto;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;

    -webkit-overflow-scrolling: touch;
    -webkit-transition: width 0.3s ease;
    -moz-transition: width 0.3s ease;
    -ms-transition: width 0.3s ease;
    -o-transition: width 0.3s ease;
    transition: width 0.3s ease;
  }
`

const Drawers = () => (
  <Container>
    <DrawerLeft />
    <DrawerRight />
  </Container>
)

export default Drawers
