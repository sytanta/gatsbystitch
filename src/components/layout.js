import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import UIContext from "../context/ui-context"

import Drawers from "./drawers"
import Aside from "./header/aside"
import Header from "./header/header"
import Footer from "./footer"

import checkStickyHeader from "../utils/header"
import "../css/global.css"
import { breakpoints } from "../theme"

const ContentContainer = styled.div`
  background: #fff;
  bottom: 0;
  height: auto;
  left: 0;
  overflow: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
  z-index: 9;

  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;

  &.drawer-right-open {
    transform: translate3d(-320px, 0px, 0px);

    ::after {
      background: rgba(0, 0, 0, 0.2);
      content: "";
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      z-index: 99999;
      width: 100%;
    }
  }
`

const ContentInner = styled.div`
  bottom: 0;
  left: 0;
  overflow: auto;
  position: absolute;
  right: 0;
  top: 0;

  main {
    margin-bottom: calc(-72px - 1px);
    min-height: 100vh;
    position: relative;
    top: calc(-72px - 1px);
    transition: opacity 0.3s ease-in;
    will-change: opacity;
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    main {
      margin-bottom: -43px;
      top: -43px;
    }
  }
`

const asideID = "aside"
const stickyHeaderID = "sticky-header"

class Layout extends React.Component {
  state = {
    ui: {
      ...UIContext,
      toggleDrawerLeft: () => {
        this.setState(state => ({
          ui: {
            ...state.ui,
            drawerLeftOpen: !state.ui.drawerLeftOpen,
          },
        }))
      },
      toggleDrawerRight: () => {
        this.setState(state => ({
          ui: {
            ...state.ui,
            drawerRightOpen: !state.ui.drawerRightOpen,
          },
        }))
      },
    },
  }

  componentDidMount() {
    checkStickyHeader(stickyHeaderID, asideID)
  }

  render() {
    return (
      <UIContext.Provider value={this.state.ui}>
        <Drawers />
        <ContentContainer
          className={this.state.ui.drawerRightOpen ? "drawer-right-open" : ""}
          onClick={
            this.state.ui.drawerRightOpen
              ? this.state.ui.toggleDrawerRight
              : null
          }
        >
          <ContentInner>
            <Aside id={asideID} />
            <Header stickyHeaderID={stickyHeaderID} />
            <main>{this.props.children}</main>
            <Footer />
          </ContentInner>
        </ContentContainer>
      </UIContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
