import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  button.recover-link {
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
  }
`

const Login = ({ resetPassword }) => (
  <Container
    id="sidebar-non-customer"
    className="switchable-section container login-container"
  >
    <form
      id="customer_login"
      acceptCharset="UTF-8"
      className="is-invalid"
      autoComplete="off"
    >
      <input type="hidden" name="form_type" value="customer_login" />
      <input type="hidden" name="utf8" value="✓" />
      <input type="hidden" name="return_to" value="/pages/account-overview" />
      <div className="bad"></div>
      <div id="login_email" className="clearfix">
        <label htmlFor="customer_email" className="login">
          Email Address
        </label>
        <input
          type="email"
          name="customer[email]"
          id="customer_email"
          className="large is-required has-error"
          size="30"
          value=""
          placeholder="your@email.com"
          autoComplete="email"
        />
        <div className="input-is-success"></div>
        <div className="input-is-error"></div>
      </div>
      <div id="login_password" className="clearfix">
        <label htmlFor="customer_password" className="login">
          Password
        </label>
        <input
          type="password"
          name="customer[password]"
          id="customer_password"
          className="large password is-required has-error"
          size="30"
          value=""
          placeholder="••••••••"
          autoComplete="current-password"
        />
        <div className="input-is-success"></div>
        <div className="input-is-error"></div>
      </div>
      <div className="action_bottom">
        <input
          className="awesome stretch reverse"
          type="submit"
          value="Log In"
        />
      </div>
      <div className="action_bottom">
        <a
          href="/tools/social-login/auth/facebook?return_to=https://www.taylorstitch.com/pages/account-overview"
          className="login-fb awesome stretch"
        >
          Connect with Facebook
        </a>
      </div>
      <div className="action_bottom">
        <p className="forgot_password">
          <button
            className="section-switcher recover-link"
            type="button"
            onClick={resetPassword}
          >
            Reset your password
          </button>
        </p>
      </div>
    </form>
  </Container>
)

Login.propTypes = {
  resetPassword: PropTypes.func.isRequired,
}

export default Login
