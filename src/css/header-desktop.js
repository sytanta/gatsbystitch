import styled from "styled-components"

import { breakpoints } from "../theme"

const HeaderDesktop = styled.div`
  display: block;
  font-size: 11px;
  margin: 0;
  padding: 30px 0 18px;
  text-align: center;
  text-transform: uppercase;
  transition: padding 0.3s ease-in-out;
  // will-change: padding, background !important;
  z-index: 999;

  &.fixed-height {
    padding: 19px 0;
  }

  nav,
  .nav-secondary {
    font-size: 10px;
  }

  nav {
    padding-left: 2.5em;
  }

  .nav-secondary ul > li > a,
  .top-level > li > a {
    letter-spacing: 0.15em;
  }

  a {
    color: #fff;

    &,
    &:hover {
      text-decoration: none;
    }
  }

  .feature-link a,
  .feature-link u {
    text-decoration: none;
  }

  .feature-link a,
  .feature-link span {
    position: relative;
    display: inline-block;
  }

  .feature-link a:focus u::after,
  .feature-link a:hover u::after,
  .feature-link a:active u::after,
  .feature-link .dropdown-active u::after {
    background: #fff;
    width: 100%;
  }

  .feature-link u::after {
    background: transparent;
    bottom: -5px;
    content: "";
    display: block;
    left: 0;
    height: 2px;
    position: absolute;
    width: 0;

    transition: all 0.3s ease-in-out;
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    display: none;
  }
`

export default HeaderDesktop
