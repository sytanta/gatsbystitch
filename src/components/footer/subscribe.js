import React from "react"
import styled from "styled-components"

import LogoSVG from "../../assets/logo.js"
import CaretSVG from "../../assets/caret.js"

import { breakpoints } from "../../theme"

const Container = styled.section`
  .logo {
    //   color: #0f2130;
    //   cursor: pointer;
    // display: block;
    //   font-size: 16px;
    //   line-height: 0;
    //   height: 16px;
    //   margin-bottom: 3.7rem;
    //   order: 6;
    //   padding-bottom: 0;
    //   position: relative;
    //   text-transform: uppercase;
    //   transition: none;
    //   width: 10rem;
    //   z-index: 9;
  }

  h2 {
    display: none;
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5em;
  }

  form {
    position: relative;

    input[type="email"] {
      background: #fff;
      border: 1px solid #c2c2c2;
      border-color: #363636;
      border-right-color: rgb(54, 54, 54);
      border-right: 0 none;
      box-sizing: border-box;
      display: inline-block;
      font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
        "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
        "Lucida Grande", sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      height: 34px;
      letter-spacing: 0.14em;
      line-height: 1.3em;
      margin: 0 auto;
      padding: 0 16px;
      text-align: left;
      text-transform: uppercase;
      width: calc(100% - 34px);
    }

    .awesome {
      color: #fff;
      cursor: default;
      font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
        "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
        "Lucida Grande", sans-serif;
      font-size: 12px;
      height: 34px;
      padding: 1em 0;
      width: 34px;

      span {
        color: #fff;
        display: block;
        height: 120%;
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
      }
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    flex-basis: 100% !important;
    margin-right: 1.33333% !important;
    padding-right: 1em !important;
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    .logo {
      display: none !important;
    }

    h2 {
      display: block;
    }

    p {
      font-size: 2.6rem;
      line-height: 1.19231em;
    }
  }

  @media (max-width: ${breakpoints.phablet}px) {
    margin-right: 0 !important;
    padding-right: 0 !important;
  }
`

const Subscribe = () => (
  <Container>
    <span className="logo">
      <LogoSVG
        className="icon"
        role="presentation"
        aria-hidden="true"
        focusable="false"
      />
    </span>
    <h2>Join the Club</h2>
    <p>Receive 20% off your first purchase</p>
    <form className="track validate">
      <label htmlFor="footer-embed-email" className="hidden">
        Email
      </label>
      <input
        id="footer-embed-email"
        type="email"
        name="email"
        className="email manage-customer-field"
        value=""
        placeholder="Enter your email"
        autoComplete="email"
      />
      <button type="submit" className="awesome disabled" title="Subscribe">
        <span>
          <CaretSVG
            className="icon"
            role="presentation"
            aria-hidden="true"
            focusable="false"
          />
        </span>
      </button>
      <div className="messages">
        <div className="success_message good" style={{ display: "none" }}></div>
        <div className="error_message bad" style={{ display: "none" }}></div>
      </div>
    </form>
  </Container>
)

export default Subscribe
