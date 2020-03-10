import React from "react"
import { Link } from "gatsby"
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
    <p>
      Relive the glory days when instant messenger was king. Hit us
      with&nbsp;a&nbsp;“sup”; 7 days 9–6 PST.
    </p>
    <p>
      <Link to="" className="chat-expand">
        Let’s Talk
      </Link>
    </p>
  </Container>
)

export default Chat
