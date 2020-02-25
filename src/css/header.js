import styled from "styled-components"

import HeaderDesktop from "./header-desktop"
import HeaderMobile from "./header-mobile"
import Logo from "./logo"
import NavSecondary from "./nav-secondary"

const Header = styled.header`
  background: linear-gradient(rgba(54, 54, 54, 0.1), rgba(54, 54, 54, 0));
  left: 0;
  position: sticky;
  top: 0;
  width: 100%;
  will-change: top;
  z-index: 99999;

  transition: height ease-in-out 0.3s, color linear 0.1s;

  &.opaque {
    background: #fff;
    border-bottom: 1px solid #fff;

    ${HeaderDesktop} {
      padding: 19px 0;
    }

    ${HeaderDesktop} a {
      text-decoration: none;
      color: #0f2130;
    }

    ${HeaderDesktop} .feature-link a:focus u::after,
    ${HeaderDesktop} .feature-link a:hover u::after,
    ${HeaderDesktop} .feature-link a:active u::after,
    ${HeaderDesktop} .feature-link .dropdown-active u::after {
      background: #0f2130;
    }

    ${HeaderMobile} a,
    ${HeaderMobile} .open-left {
      color: #0f2130;
    }

    ${Logo} {
      text-decoration: none;
      color: #0f2130;
    }

    ${NavSecondary} .utility-icon a,
    ${NavSecondary} .utility-icon div,
    ${NavSecondary} .utility-icon button {
      color: #0f2130;
    }

    ${NavSecondary} form input {
      border-bottom: 1px solid #0f2130;
        color: #0f2130;
    }
  }

  .logo {
    cursor: pointer;
    position: relative;
    z-index: 9;
    display: block;
    width: 149px;
    height: 16px;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 0;
    transition: none;
  }

  .feature-link {
    text-decoration: none;
  }
`

export default Header
