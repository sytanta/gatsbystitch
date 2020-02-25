import React from "react"
import styled from "styled-components"

import { breakpoints } from "../../theme"

const Container = styled.section`
  @media (max-width: ${breakpoints.phablet}px) {
    display: none;
  }
`

const Chat = () => (
  <Container className="communication-channel">
    <h2>Chat</h2>
    <p asym="">
      Relive the glory days when instant messenger was king. Hit us
      with&nbsp;a&nbsp;“sup”; 7 days 9–6 PST.
    </p>
    <p>
      <a href="/help" className="chat-expand">
        Let’s Talk
      </a>
    </p>
  </Container>
)

export default Chat
