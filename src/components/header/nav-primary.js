import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.nav`
  font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light", "Helvetica Neue Light",
    "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 10px;
  float: left;
  line-height: 19px;
  margin-top: 4px;
  position: relative;
  text-align: right;
  z-index: 1;

  .top-level {
    text-align: left;
  }

  li {
    display: inline-block;
  }

  .top-level > li > a {
    padding-left: 1.75em;
    padding-right: 1.75em;
    position: relative;
    z-index: 1;
  }

  .utility-icon a,
  .utility-icon button {
    display: inline-block;
    height: 16px;
    position: relative;
    top: 3px;
    width: 16px;
  }
`

const NavPrimary = () => (
  <Container className="nav-primary" aria-label="Departments and Categories">
    <ul className="top-level">
      <li className="nav-item feature-link first has-dropdown">
        <a href="/collections/all-mens" aria-label="All Men's">
          <span>
            <u>Shop</u>
          </span>
        </a>
      </li>
      <li className="nav-item feature-link">
        <a href="/collections/workshop" aria-label="">
          <span>
            <u>Workshop</u>
          </span>
        </a>
      </li>
      <li className="nav-item feature-link">
        <a href="/collections/mens-last-call" aria-label="Last Call">
          <span>
            <u>Last Call</u>
          </span>
        </a>
      </li>
      <li className="nav-item feature-link">
        <a href="https://restitch.taylorstitch.com/" aria-label="">
          <span>
            <u>Restitch</u>
          </span>
        </a>
      </li>
    </ul>
  </Container>
)

export default NavPrimary
