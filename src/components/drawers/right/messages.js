import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import MessageItem from "./message-item"

const Container = styled.aside`
  padding-left: 25px;
  padding-right: 20px;
  padding-top: 1.2rem;
`

const Messages = ({ node: message }) => (
  <StaticQuery
    query={graphql`
      query GetMessages {
        messages: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/messages/" } }
          sort: { order: ASC, fields: frontmatter___title }
        ) {
          edges {
            node {
              frontmatter {
                author {
                  avatar {
                    childImageSharp {
                      fluid(maxWidth: 50, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                  name
                  position
                }
                link
                linkLabel
              }
              html
              id
            }
          }
        }
      }
    `}
    render={({ messages }) => (
      <Container id="right-drawer-changelog" className="changelog">
        {messages.edges.map(({ node: message }) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </Container>
    )}
  />
)

export default Messages
