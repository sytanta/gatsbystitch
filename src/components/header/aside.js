import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import AsideReferral from "./aside-referral"
import AsidePromo from "./aside-promo"
import AsideCount from "./aside-count"

import { breakpoints } from "../../theme"

const Container = styled.div`
  ul {
    background: #0f2130;
    color: #ffffff;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    letter-spacing: 0.14em;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-family: "AN", Avenir, "HelveticaNeue-Light", "Helvetica Neue Light",
      "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 10px;
    font-weight: 700;
  }

  li {
    flex-basis: calc(100% / 3);
    height: 50px;
    line-height: 50px;
    list-style: none;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    height: 1px;
    opacity: 0;
    z-index: -1;
  }
`

const Aside = ({ id }) => (
  <Container id={id}>
    <ul>
      <AsideReferral />
      <AsidePromo />
      <AsideCount />
    </ul>
  </Container>
)

Aside.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Aside
