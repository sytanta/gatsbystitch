import React, { useContext } from "react"
import styled from "styled-components"

import Logo from "./logo"
import NavSecondary from "./nav-secondary"
import NavPrimary from "./nav-primary"

import { breakpoints } from "../../theme"
import Container from "../../css/header-desktop"

import UIContext from "../../context/ui-context"

const ContainerInner = styled.div`
  padding: 0 45px;
`

const HeaderDesktop = () => {
  const { toggleMegaMenu } = useContext(UIContext)

  return (
    <Container
      className="header-desktop"
      onMouseLeave={() => {
        toggleMegaMenu(false)
      }}
    >
      <ContainerInner className="clearfix">
        <Logo />
        <NavSecondary />
        <NavPrimary />
      </ContainerInner>
    </Container>
  )
}

export default HeaderDesktop
