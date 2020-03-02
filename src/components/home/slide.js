import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { breakpoints } from "../../theme"

const Container = styled.div`
  section {
    height: 100%;
    width: 100%;
  }

  .gatsby-image-wrapper {
    line-height: 0;
  }

  .textoverlay {
    display: table;
    height: 100%;
    left: 0 !important;
    margin: 0 auto;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  .encircle {
    display: table-cell;
    text-align: center;
    top: 0;
    vertical-align: middle;
  }

  .internaloffset {
    display: table;
    height: 100%;
    padding: 1vw 13vw;
    width: 100%;
  }

  .tightwidth {
    display: table;
    height: 100%;
    max-width: 33.333%;
    text-align: left;
    white-space: normal;
    moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    &.right {
      float: right;
    }
  }

  .tightwidth .offsetabs {
    display: table-cell;
    position: relative;
    vertical-align: middle;

    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }

    .headline {
      border-color: #ffffff;
      color: #ffffff;
      display: block;
      font-family: "ANW", "AN", Avenir, Helvetica, Arial, sans-serif;
      font-size: 10px;
      font-weight: bold;
      letter-spacing: 0.16em;
      line-height: 1.2;
      padding: 0 0 48px 0;
      text-transform: uppercase;
    }

    .lead {
      border-color: #ffffff;
      color: #ffffff;
      font-family: "CD", Georgia, Times, Times New Roman, serif;
      font-size: 44px;
      letter-spacing: 0;
      line-height: 1;
      margin: -30px 0 44px;
      padding: normal;
    }

    &.black {
      .headline,
      .lead {
        border-color: #363636;
        color: #363636;
      }
    }
  }

  .linkprompt {
    background-color: #b5aa8f;
    border-color: #ffffff;
    color: #ffffff;
    display: inline-block;
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.14em;
    line-height: normal;
    padding: 14px 24px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.7s ease-in-out;

    :hover {
      background-color: #363636;
      color: #ffffff;
    }
  }

  @media (max-width: ${breakpoints.phablet}px) {
    .gatsby-image-wrapper {
      & > div {
        display: none;
      }
      picture + picture {
        display: block;
        img {
          position: relative !important;
        }
      }
    }

    .tightwidth {
      max-width: none;

      &.right {
        float: none;
      }
    }

    .tightwidth .offsetabs {
      &.black {
        .headline,
        .lead {
          border-color: #ffffff;
          color: #ffffff;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    .internaloffset {
      padding: 1vw 36px;
    }
  }
`

const Slide = ({ slide: { frontmatter: slide } }) => {
  const sources = [
    slide.imageMobile.childImageSharp.fluid,
    {
      ...slide.image.childImageSharp.fluid,
      media: `(min-width: 550px)`,
    },
  ]

  return (
    <Container className="swiper-slide">
      <Img fluid={sources} />
      <section className="textoverlay rightaligned showformobile stylemob_hot_theme hot_theme">
        <div className="encircle">
          <div className="internaloffset">
            <div className={`tightwidth ${slide.side}`}>
              <section className={`offsetabs ${slide.color} ${slide.side}`}>
                <div
                  className="textfits headline"
                  dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                ></div>
                <div
                  className="lead"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                ></div>
                <Link className="linkprompt" to={slide.link}>
                  SHOP NOW
                </Link>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
}

export default Slide
