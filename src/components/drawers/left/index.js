import React, { useContext, useState } from "react"
import styled from "styled-components"

import SearchForm from "./search-form"
import Menu from "./menu"
import MenuUtility from "./menu-utility"

import UIContext from "../../../context/ui-context"

const Container = styled.div`
  left: 0;
  text-align: left;
`

const ContainerInner = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-height: 100%;

  ul {
    list-style-type: none;
    margin-top: 0;
    padding: 1.2rem 0 0;

    li {
      padding-bottom: 0.6rem;
      padding-top: 0.6rem;

      span,
      a {
        display: block;
        padding-left: 25px;
        padding-right: 25px;
        position: relative;
        text-decoration: none;
      }
    }
  }
`

const DrawerLeft = () => {
  const { drawerRightOpen } = useContext(UIContext)

  const [ui, setUI] = useState({
    shop: false,
    workshop: false,
  })

  const openMenuItem = menu => {
    if (!ui.hasOwnProperty(menu)) {
      return
    }

    const newUI = {
      shop: false,
      workshop: false,
    }

    setUI({
      ...newUI,
      [menu]: !ui[menu],
    })
  }

  return (
    <Container className={`drawer ${drawerRightOpen ? "hidden" : ""}`}>
      <ContainerInner>
        <SearchForm />
        <Menu ui={ui} openMenu={openMenuItem} />
        <MenuUtility
          className={`menu-utility ${ui.shop || ui.workshop ? "hidden" : ""}`}
        />
      </ContainerInner>
    </Container>
  )
}

export default DrawerLeft
