import React from "react"
import styled from "styled-components"

import { breakpoints } from "../../theme"

const Container = styled.section`
  @media (max-width: ${breakpoints.phablet}px) {
    display: none;
  }
`

const Email = () => (
  <Container className="communication-channel">
    <h2>Email</h2>
    <p asym="">
      Drop us a line anytime and we’ll get back to you within 24&nbsp;hours.
    </p>
    <p>
      <a href="mailto:hello@taylorstitch.com">Contact Us</a>
    </p>
  </Container>
)

export default Email
