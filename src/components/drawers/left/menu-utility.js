import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.ul`
  margin-bottom: 1rem;

  a {
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
`

const MenuUtility = ({ className }) => (
  <Container className={className}>
    <li>
      <a href="/blogs/changelog">News Feed</a>
    </li>
    <li>
      <a href="/pages/about-us">About</a>
    </li>
    <li>
      <a href="/help">Help</a>
    </li>
  </Container>
)

MenuUtility.propTypes = {
  className: PropTypes.string.isRequired,
}

export default MenuUtility
