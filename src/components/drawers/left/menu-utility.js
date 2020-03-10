import React from "react"
import { Link } from "gatsby"
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
      <Link to="/blogs/changelog">News Feed</Link>
    </li>
    <li>
      <Link to="/pages/about-us">About</Link>
    </li>
    <li>
      <Link to="">Help</Link>
    </li>
  </Container>
)

MenuUtility.propTypes = {
  className: PropTypes.string.isRequired,
}

export default MenuUtility
