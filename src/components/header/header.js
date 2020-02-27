import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import HeaderDesktop from "./header-desktop"
import HeaderMobile from "./header-mobile"

import Container from "../../css/header"

const Header = ({ stickyHeaderID, className }) => {
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
    <Container id={stickyHeaderID} className={className}>
      <HeaderDesktop />
      <HeaderMobile />
    </Container>
  )
}

Header.propTypes = {
  stickyHeaderID: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Header
