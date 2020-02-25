import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div``

const ResetPassword = ({ cancel }) => (
  <Container
    id="sidebar-recover-password"
    className="switchable-section container login-container"
  >
    <form
      method="post"
      action="/account/recover"
      acceptCharset="UTF-8"
      className="is-invalid"
      autoComplete="off"
    >
      <input type="hidden" name="form_type" value="recover_customer_password" />
      <input type="hidden" name="utf8" value="✓" />
      <div className="bad"></div>
      <div id="recover_email" className="clearfix large_form">
        <label htmlFor="email">Reset your password</label>
        <input
          type="email"
          name="email"
          id="recover-email"
          className="large has-error"
          size="30"
          value=""
          placeholder="Email Address"
          autoComplete="email"
        />
        <div className="input-is-success"></div>
        <div className="input-is-error"></div>
      </div>
      <div className="action_bottom">
        <input
          type="hidden"
          name="checkout_url"
          value="/account/login#recover-password"
        />
        <input className="awesome stretch reverse" type="submit" value="Submit" />
      </div>
      <div className="action_bottom">
        <p className="note">
          <button
            id="cancel-reset"
            className="section-switcher cancel-link"
            type="button"
            onClick={cancel}
          >
            Cancel
          </button>
        </p>
      </div>
    </form>
  </Container>
)

ResetPassword.propTypes = {
  cancel: PropTypes.func.isRequired,
}

export default ResetPassword
