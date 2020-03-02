import React from "react"
import styled from "styled-components"

import Subscribe from "./subscribe"
import Call from "./call"
import Chat from "./chat"
import Email from "./email"
import Aside from "./aside"
import LogoSVG from "../../assets/logo"

import { breakpoints } from "../../theme"

const Container = styled.footer`
  background: #fff;
  border-top: 2px solid #363636;
  padding-bottom: 20px;
  padding-top: 45px;
  text-align: left;

  section {
    flex-basis: 24%;
    padding-right: 3em;
    width: 100%;

    &.communication-channel {
      h2 {
        font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
          "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
          "Lucida Grande", sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.14em;
        line-height: 1.22034;
        margin: 0 0 3em;
        text-transform: uppercase;
      }

      p {
        font-size: 1.6rem;
        letter-spacing: 0.02em;
        line-height: 1.8em;
        max-width: 21em;
        padding-right: 5em;

        &:last-of-type {
          font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
            "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
            "Lucida Grande", sans-serif;
          font-size: 1.4rem;
          letter-spacing: 0.06em;
          font-style: normal;
          font-weight: 700;
          margin: 2em 0;
        }
      }
    }
  }

  section:not(:last-of-type) {
    margin-right: 1.33333%;
  }

  a {
    text-decoration: none;
  }

  .logo {
    color: #0f2130;
    cursor: pointer;
    display: block;
    font-size: 16px;
    line-height: 0;
    height: 16px;
    margin-bottom: 3.7rem;
    order: 6;
    padding-bottom: 0;
    position: relative;
    text-transform: uppercase;
    transition: none;
    width: 10rem;
    z-index: 9;
  }

  aside + .logo {
    display: none;
  }

  nav {
    display: none;
    justify-content: space-between;
    flex-flow: row nowrap;
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.66667em;
    order: 2;

    ul {
      flex-basis: 49.33333%;
    }
  }

  .communication-channels {
    display: none;
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.08em;
    line-height: 2em;
    margin: 0;
    order: 4;
    padding-bottom: 0;
    width: 100%;
  }

  .small-print {
    display: none;
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.08em;
    line-height: 2em;
    margin: 3em 0 0;
    order: 5;
    width: 100%;
  }

  @media (max-width: ${breakpoints.phablet}px) {
    border-top: none;

    nav {
      display: flex;
    }

    .communication-channels,
    .small-print {
      display: block;
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    padding-bottom: 26px;
  }

  @media (max-width: ${breakpoints.xl}px) {
    section {
      flex-basis: 49.33333%;
      padding-right: 1em;

      &.communication-channel p {
        padding-right: 0;
      }
    }
  }
`

const ContainerInner = styled.div`
  background: none;
  display: flex;
  flex-flow: row wrap;
  max-width: none;
  justify-content: flex-start;
  padding: 0 45px;
  text-align: left;

  & > * {
    padding-bottom: 4rem;
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    padding: 0 35px;

    aside + .logo {
      display: block;
      margin-bottom: 0;
    }
  }
`

const Footer = () => (
  <Container>
    <ContainerInner>
      <Subscribe />
      <Call />
      <Chat />
      <Email />
      <nav>
        <ul className="main-menu">
          <li className="nav-item first">
            <a href="/collections/all-mens" title="">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a href="/collections/workshop" title="">
              Workshop
            </a>
          </li>
          <li className="nav-item">
            <a href="/collections/mens-last-call" title="">
              Last Call
            </a>
          </li>
          <li className="nav-item last">
            <a href="https://restitch.taylorstitch.com/" title="">
              Restitch
            </a>
          </li>
        </ul>
        <ul className="footer">
          <li className="nav-item first">
            <a href="/help" title="">
              Help
            </a>
          </li>
        </ul>
      </nav>
      <ul className="communication-channels">
        <li>
          <a href="mailto:hello@taylorstitch.com">Email</a>
        </li>
        <li>
          <span>
            Call — <span className="tel">(415) 304-8208</span>
          </span>
        </li>
        <li>M–F 9am–5pm Pacific</li>
      </ul>
      <ul className="small-print">
        <li>
          <a href="/pages/terms-and-conditions" title="">
            Terms
          </a>
        </li>
        <li>
          <a href="/pages/privacy-policy" title="">
            Privacy
          </a>
        </li>
        <li>
          <a href="https://careers.smartrecruiters.com/TaylorStitch" title="">
            Careers
          </a>
        </li>
        <li>
          <a href="/blogs/dispatches" title="">
            Blog
          </a>
        </li>
        <li>
          <a href="/pages/offers" title="">
            Offers
          </a>
        </li>
      </ul>
      <Aside />
      <span className="logo">
        <LogoSVG
          className="icon"
          role="presentation"
          aria-hidden="true"
          focusable="false"
        />
      </span>
    </ContainerInner>
  </Container>
)

export default Footer
