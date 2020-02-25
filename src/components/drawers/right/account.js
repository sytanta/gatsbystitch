import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Login from "./login"
import Register from "./register"
import ResetPassword from "./reset-password"

import iconCheckSVG from "../../../assets/icon-check.svg"
import iconExclamationSVG from "../../../assets/icon-exclamation.svg"

const Container = styled.aside`
  .switchable-section {
    opacity: 0;
    animation: show 0.4s forwards;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .container {
    padding: 0 25px;
  }

  .switcher {
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;

    .switch-toggle {
      font-size: 1rem;
      text-align: left;

      input {
        opacity: 0;
        position: absolute;
        z-index: 5;

        :checked + label {
          color: #363636;
        }
      }

      label {
        color: #c2c2c2;
        font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
          "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
          "Lucida Grande", sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.14em;
        margin: 0;
        padding: 0;
        position: relative;
        text-transform: uppercase;
        vertical-align: middle;
        z-index: 3;

        :first-of-type {
          margin-right: 20px;
        }
      }
    }
  }

  form {
    text-align: left;

    & > div:not(:last-child) {
      margin-bottom: 25px;
    }

    label {
      display: block;
      font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
        "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
        "Lucida Grande", sans-serif;
      font-size: 0.9rem;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    input {
      background-color: #f0f0f0;
      background-repeat: no-repeat;
      background-position: 95% 50%;
      border: none;
      font-size: 1rem;
      font-style: normal;
      line-height: 1.5em;
      padding: 18px 19px 17px 19px;
      text-align: left;
      width: 100%;

      &:not([type="submit"]) {
        background-image: url(${iconExclamationSVG});
        background-size: auto 13px;
      }

      &.valid {
        background-image: url(${iconCheckSVG});
        background-size: 12px auto;
      }
    }
  }

  .register-link,
  .recover-link,
  .cancel-link {
    background: none;
    border: none;
    display: block;
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.08em;
    padding: 5px 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.1s linear;

    :hover {
      color: #b5aa8f;
    }
  }

  .awesome.reverse,
  .reverse.stamped-button-primary,
  .reverse.shopify-challenge__button,
  .reverse.shopify-challenge__button,
  .reverse.btn,
  .reverse.btn {
    background-color: #b5aa8f !important;
    color: #fff !important;
  }

  .awesome,
  .stamped-button-primary,
  .shopify-challenge__button,
  .shopify-challenge__button {
    background-color: #363636 !important;
    border: 0 !important;
    border-radius: 0 !important;
    color: #fff !important;
    cursor: pointer !important;
    display: inline-block;
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1rem !important;
    font-weight: 700;
    letter-spacing: 0.14em;
    line-height: 1.5em !important;
    position: relative !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding: 1.8rem 2rem !important;
    -webkit-border-radius: 0 !important;
    -moz-border-radius: 0 !important;
    text-align: center !important;
    text-decoration: none !important;
    text-transform: uppercase !important;
    transition: background-color 0.7s ease-in-out;
    -moz-user-select: none;
    -moz-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -webkit-appearance: none;
    vertical-align: middle !important;
  }

  input.awesome:hover {
    background-color: #0f2130 !important;
  }

  .awesome.stretch,
  .stretch.stamped-button-primary,
  .stretch.shopify-challenge__button,
  .stretch.shopify-challenge__button {
    width: 100% !important;
  }

  .awesome.login-fb,
  .login-fb.stamped-button-primary,
  .login-fb.shopify-challenge__button,
  .login-fb.shopify-challenge__button,
  .login-fb.btn {
    background: #4267b2 !important;
  }

  .forgot_password,
  .cancel {
    padding-top: 15px;
  }
`

const Account = () => {
  const [tab, setTab] = useState("login")

  const toggleTab = tab => {
    setTab(tab)
  }

  return (
    <Container id="right-drawer-account">
      <section className="switcher container">
        <div className="switch-toggle">
          <input id="existing_inputsidebar-input" name="toggle" type="radio" />
          <label
            id="existing-customer-switch"
            htmlFor="existing_inputsidebar-input"
            className="main-switch section-switcher"
            data-section-to-show="sidebar-non-customer"
            onClick={() => {
              toggleTab("login")
            }}
          >
            Log&nbsp;In
          </label>
          <input id="new_inputsidebar-input" name="toggle" type="radio" />
          <label
            id="new-customer-switch"
            htmlFor="new_inputsidebar-input"
            className="main-switch section-switcher"
            data-section-to-show="sidebar-new-customer"
            onClick={() => {
              toggleTab("register")
            }}
          >
            Register
          </label>
        </div>
      </section>
      {tab === "login" ? (
        <Login
          resetPassword={() => {
            toggleTab("reset")
          }}
        />
      ) : tab === "register" ? (
        <Register />
      ) : tab === "reset" ? (
        <ResetPassword
          cancel={() => {
            toggleTab("login")
          }}
        />
      ) : (
        ""
      )}
    </Container>
  )
}

export default Account
