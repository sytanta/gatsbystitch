import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.ul`
  border-bottom: 0 none;
  color: #c2c2c2;
  font-size: 0.8rem;
  padding: 3em 0 0;
  position: relative;
  text-align: left;
  max-width: none;
  z-index: 1;

  a {
    color: #c2c2c2;

    :hover {
      color: #b5aa8f;
    }
  }
`

const Breadcrumb = () => (
  <Container
    className="breadcrumb anw inline-menu clearfix"
    itemScope=""
    itemType="http://schema.org/BreadcrumbList"
  >
    <li
      itemProp="itemListElement"
      itemScope=""
      itemType="http://schema.org/ListItem"
    >
      <Link
        to="https://www.taylorstitch.com"
        itemProp="item"
        className="home-link"
      >
        <span itemProp="name">Taylor Stitch</span>
      </Link>
    </li>
    <li className="separator">&nbsp;/&nbsp;</li>
    <li
      itemProp="itemListElement"
      itemScope=""
      itemType="http://schema.org/ListItem"
    >
      <Link to="/collections/all-mens" itemProp="item">
        <span itemProp="name">Men's</span>
      </Link>
    </li>
    <li className="separator">&nbsp;/&nbsp;</li>
    <li
      itemProp="itemListElement"
      itemScope=""
      itemType="http://schema.org/ListItem"
    >
      <Link to="/collections/mens-shirts" itemProp="item">
        <span itemProp="name">Men's Shirts</span>
      </Link>
    </li>
  </Container>
)

export default Breadcrumb
