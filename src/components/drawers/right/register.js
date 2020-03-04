import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  background: transparent;
`

const Register = ({ node: message }) => (
  <Container
    id="sidebar-new-customer"
    className="switchable-section login-container"
  >
    <form
      method="post"
      action="/account"
      id="create_customer"
      acceptCharset="UTF-8"
      className="is-invalid"
      autoComplete="off"
    >
      <input type="hidden" name="form_type" value="create_customer" />
      <input type="hidden" name="utf8" value="✓" />
      <div className="bad"></div>
      <div id="first_name" className="clearfix large_form">
        <label htmlFor="first_name" className="login">
          First Name
        </label>
        <input
          type="text"
          name="customer[first_name]"
          id="first_name"
          className="large is-required has-error"
          size="30"
          value=""
          placeholder="First Name"
          autoComplete="given-name"
        />
        <div className="input-is-success"></div>
        <div className="input-is-error"></div>
      </div>
      <div id="last_name" className="clearfix large_form">
        <label htmlFor="last_name" className="login">
          Last Name
        </label>
        <input
          type="text"
          name="customer[last_name]"
          id="last_name"
          className="large is-required has-error"
          size="30"
          value=""
          placeholder="Last Name"
          autoComplete="family-name"
        />
        <div className="input-is-success"></div>
        <div className="input-is-error"></div>
      </div>
      <div id="email" className="clearfix large_form">
        <label htmlFor="email" className="login">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="large is-required has-error"
          size="30"
          name="customer[email]"
          value=""
          placeholder="your@email.com"
          autoComplete="email"
        />
        <div className="input-is-success"></div>
        <div className="input-is-error"></div>
      </div>
      <div id="password" className="clearfix large_form">
        <label htmlFor="password" className="login">
          Password
        </label>
        <input
          type="password"
          name="customer[password]"
          id="password"
          className="large password is-required has-error"
          size="30"
          value=""
          placeholder="••••••••"
          autoComplete="new-password"
        />
        <div className="input-is-success"></div>
        <div className="input-is-error"></div>
      </div>
      <div className="action_bottom">
        <input className="awesome" type="submit" value="Register" />
      </div>
      <div className="action_bottom">
        <a
          href="/tools/social-login/auth/facebook?return_to=https://www.taylorstitch.com/philosophy"
          className="login-fb awesome stretch"
        >
          Connect with Facebook
        </a>
      </div>
    </form>
  </Container>
)

export default Register
