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
import { breakpoints } from "../theme"
import "../css/global.css"

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

  &.drawer-left-open {
    transform: translate3d(320px, 0px, 0px);
  }
  &.drawer-right-open {
    transform: translate3d(-320px, 0px, 0px);
  }

  &.drawer-left-open::after,
  &.drawer-right-open::after {
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
`

const ContentInner = styled.div`
  bottom: 0;
  left: 0;
  overflow: auto;
  position: absolute;
  right: 0;
  top: 0;

  &.product-modal-open {
    overflow: hidden;
  }

  main {
    margin-bottom: calc(-72px - 1px);
    min-height: 100vh;
    position: relative;
    top: calc(-72px - 1px);
    transition: opacity 0.3s ease-in;
    // will-change: opacity !important;

    &.top-0 {
      margin-bottom: 0;
      top: 0;
    }
  }

  main.template-product {
    border: 0 none;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    overflow: hidden;
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
      toggleProductHelpModal: modalName => {
        if (modalName && !["repair", "shipping", "size"].includes(modalName)) {
          return
        }

        this.setState(state => {
          const newModal = modalName
            ? state.ui.productHelpModal === modalName
              ? ""
              : modalName
            : ""

          return {
            ui: {
              ...state.ui,
              productHelpModal: newModal || "",
            },
          }
        })
      },
    },
  }

  componentDidMount() {
    if (!this.props.headerClass || this.props.headerClass !== "opaque") {
      checkStickyHeader(stickyHeaderID, asideID)
    }
  }

  render() {
    const contentContainerClass = this.state.ui.drawerRightOpen
      ? "drawer-right-open"
      : this.state.ui.drawerLeftOpen
      ? "drawer-left-open"
      : ""

    const clickHandler = this.state.ui.drawerRightOpen
      ? this.state.ui.toggleDrawerRight
      : this.state.ui.drawerLeftOpen
      ? this.state.ui.toggleDrawerLeft
      : null

    return (
      <UIContext.Provider value={this.state.ui}>
        <Drawers />
        <ContentContainer
          className={contentContainerClass}
          onClick={clickHandler}
        >
          <ContentInner
            className={
              this.state.ui.productHelpModal ? "product-modal-open" : ""
            }
          >
            <Aside id={asideID} />
            <Header
              stickyHeaderID={stickyHeaderID}
              className={this.props.headerClass || ""}
            />
            <main className={this.props.mainClass || ""}>
              {this.props.children}
            </main>
            <Footer />
          </ContentInner>
        </ContentContainer>
      </UIContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerClass: PropTypes.string,
  mainClass: PropTypes.string,
}

export default Layout
