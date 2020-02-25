import React from "react"
import styled from "styled-components"

import Logo from "./logo"
import NavSecondary from "./nav-secondary"
import NavPrimary from "./nav-primary"

import { breakpoints } from "../../theme"
import Container from "../../css/header-desktop"

const ContainerInner = styled.div`
  padding: 0 45px;
`

const HeaderDesktop = () => (
  <Container className="header-desktop">
    <ContainerInner className="clearfix">
      <Logo />
      <NavSecondary />
      <NavPrimary />
    </ContainerInner>
  </Container>
)

export default HeaderDesktop
