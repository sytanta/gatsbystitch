import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import HeaderDesktop from "./header-desktop"
import HeaderMobile from "./header-mobile"

import Container from "../../css/header"

const Header = ({ stickyHeaderID }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container id={stickyHeaderID}>
      <HeaderDesktop />
      <HeaderMobile />
    </Container>
  )
}

Header.propTypes = {
  stickyHeaderID: PropTypes.string.isRequired,
}

export default Header
