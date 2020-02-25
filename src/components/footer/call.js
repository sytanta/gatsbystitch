import React from "react"
import styled from "styled-components"

import { breakpoints } from "../../theme"

const Container = styled.section`
  @media (max-width: ${breakpoints.phablet}px) {
    display: none;
  }
`

const Call = () => (
  <Container className="communication-channel">
    <h2>Call</h2>
    <p>
      We’d love to engage in some good old fashioned conversation. Available M–F
      9am–5pm Pacific.
    </p>
    <p>
      <span className="tel">(415) 304-8208</span>
    </p>
  </Container>
)

export default Call
