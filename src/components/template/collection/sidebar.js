import React from "react"
import styled from "styled-components"

import SidebarCategories from "./sidebar-categories"
import SidebarFilter from "./sidebar-filter"

const Container = styled.div`
  display: flex;

  &,
  aside {
    letter-spacing: 0.08em;
    text-align: left;
    text-transform: uppercase;
    z-index: 1;
  }

  aside {
    display: flex;
    flex-basis: 15.55556%;
    flex-flow: column nowrap;
    order: 1;
    padding: 1em 0 0;
    top: 0px;
    width: 120px;
  }

  a {
    display: block;
    padding: 0.5em 0;
    text-decoration: none;
    word-break: keep-all;
  }
`

const Sidebar = () => (
  <Container>
    <aside className="anw normal-400">
      <SidebarCategories />
      <SidebarFilter />
    </aside>
  </Container>
)

export default Sidebar
