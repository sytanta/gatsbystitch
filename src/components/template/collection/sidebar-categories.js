import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.ul`
  font-size: 1rem;
  line-height: 1.6em;
  padding: 0.5em 0 0;

  li {
    width: 12em;
  }

  .current {
    color: #b5aa8f;
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.14em;
  }
`

const SidebarCategories = () => (
  <Container>
    <li className="current">
      <Link to="/collections/mens-shirts" activeClassName="current">
        Shirts
      </Link>
    </li>
    <li>
      <Link to="/collections/mens-knits">Knits</Link>
    </li>
    <li>
      <Link to="/collections/mens-bottoms">Bottoms</Link>
    </li>
    <li>
      <Link to="/collections/mens-denim">Denim</Link>
    </li>
    <li>
      <Link to="/collections/mens-outerwear">Outerwear</Link>
    </li>
    <li>
      <Link to="/collections/mens-footwear">Footwear</Link>
    </li>
    <li>
      <Link to="/collections/the-essentials">Essentials</Link>
    </li>
    <li>
      <Link to="/collections/mens-accessories">Accessories</Link>
    </li>
  </Container>
)

export default SidebarCategories
