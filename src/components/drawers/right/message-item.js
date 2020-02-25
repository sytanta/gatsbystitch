import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.article`
  margin-bottom: 2.25em;
  padding: 0 0 0 62px;
  position: relative;
  text-align: left;

  .avatar {
    border-radius: 50%;
    height: auto;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 5px;
    width: 44px;
  }

  figcaption {
    padding-bottom: 1.5rem;

    .author {
      font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
        "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
        "Lucida Grande", sans-serif;
      font-weight: 700;
      font-size: 0.9rem;
      font-style: normal;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .position {
      font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
        "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
        "Lucida Grande", sans-serif;
      font-size: 0.9rem;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0.08em;
    }
  }

  a {
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.06em;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;

    ::after {
      content: "";
      border-color: transparent transparent transparent #363636;
      border-style: solid;
      border-width: 3px 0 3px 4px;
      display: block;
      height: 0;
      position: absolute;
      right: -8px;
      top: 2px;
      width: 0;
      transition: border-color 0.3s ease-in-out;
    }

    &:hover::after {
      border-color: transparent transparent transparent #b5aa8f;
    }
  }

  p {
    font-family: "CD", Georgia, Times, "Times New Roman", serif;
    font-size: 1.5rem;
    letter-spacing: 0.04em;
    line-height: 1.4em;
    margin-bottom: 0.75em;
    margin-top: 0;
  }
`

const MessageItem = ({ message }) => {
  return (
    <Container>
      <figure>
        <div className="avatar">
          <Img
            alt=""
            fluid={message.frontmatter.author.avatar.childImageSharp.fluid}
            style={{ width: "44px" }}
          />
        </div>
        <figcaption>
          <span className="author">{message.frontmatter.author.name}</span>
          {` `}
          <span className="position">
            {message.frontmatter.author.position}
          </span>
        </figcaption>
      </figure>
      <div>
        <div dangerouslySetInnerHTML={{ __html: message.html }}></div>
        <p>
          <a
            href={message.frontmatter.link}
            className="chat-expand snap-close"
          >
            {message.frontmatter.linkLabel}
          </a>
        </p>
      </div>
    </Container>
  )
}

export default MessageItem
