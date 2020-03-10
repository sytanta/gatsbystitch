import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Video from "./video"

import { breakpoints } from "../../theme"

const Container = styled.div`
  .text-only {
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: auto;
    transition: height 0.7s linear;
  }

  .pre-heading {
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .intro {
    font-size: 2rem;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.6em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    max-width: 18em;
    text-align: center;
  }

  a,
  u {
    text-decoration: none;
  }

  u::after {
    background: transparent;
    bottom: -5px;
    content: "";
    display: block;
    left: 0;
    height: 2px;
    position: absolute;
    transition: all 0.3s ease-in-out;
    width: 0;
  }

  .gatsby-image-wrapper {
    position: unset !important;
  }

  .feature-link {
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.14em;
    margin-top: 3rem;
    text-decoration: none;
    text-transform: uppercase;

    a {
      color: #363636;
      display: inline-block;
      position: relative;

      :hover u::after {
        background: #0f2130;
        width: 100%;
      }
    }
  }

  figure {
    align-items: stretch;
    background: #ffffff;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 100vh;
    min-height: auto;
    margin-bottom: 12em;
    margin-top: 12em;
    max-height: 860px;
    overflow: hidden;
    position: relative;

    span {
      color: #363636;
      margin-left: 15.55556%;
      margin-right: 32.44444%;
    }

    a {
      display: block;
    }

    u::after {
      background: #363636;
    }

    figcaption {
      align-items: center;
      display: flex;
      flex-flow: column nowrap;
      left: 0;
      height: 100%;
      justify-content: center;
      position: absolute;
      text-align: center;
      text-decoration: none;
      top: 0;
      width: 100%;
      z-index: 1;

      a {
        align-items: flex-start;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        padding: 38px 45px;
        position: relative;
        width: 100%;
        z-index: 1;

        .pre-heading {
          font-size: 1.2rem;
          margin-bottom: 0.5em;
          text-align: left;
        }

        .heading {
          diplay: block;
          font-size: 42px;
          font-style: normal;
          font-weight: 300;
          letter-spacing: 0;
          line-height: 1.2;
          margin-bottom: 3em;
          margin-top: 0.5em;
          max-width: 15em;
          text-align: left;
          text-transform: none;
        }

        .cta {
          display: inline-flex;
          font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
            "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
            "Lucida Grande", sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          letter-spacing: 0.14em;
          margin-top: 3em;
          padding-bottom: 0.5em;
          position: relative;
          text-transform: uppercase;
        }

        :hover u::after {
          width: 100%;
        }
      }
    }

    &.text-white {
      background: #363636;

      span {
        color: #ffffff;
      }

      a {
        color: #fff;
      }

      u::after {
        background: #fff;
      }
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    figure {
      margin-bottom: 2em;
      margin-top: 2em;

      figcaption a {
        padding: 1.8rem;

        span {
          margin-left: 0;
          margin-right: 0;
        }

        .cta {
          margin-top: 0;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.phablet + 100}px) {
    figure figcaption a {
      .heading {
        font-size: calc(7.14286vw + -0.85714px);
      }

      .cta {
        font-size: calc(2.85714vw + 2.85714px);
      }
    }
  }
`

const Content = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        essential1200: imageSharp(
          fluid: { originalName: { eq: "the-essential-1200.jpg" } }
        ) {
          fluid(quality: 100, maxWidth: 2550, srcSetBreakpoints: [1130]) {
            ...GatsbyImageSharpFluid
          }
        }
        essential900: imageSharp(
          fluid: { originalName: { eq: "the-essential-900.jpg" } }
        ) {
          fluid(quality: 100, maxWidth: 2550, srcSetBreakpoints: [1130]) {
            ...GatsbyImageSharpFluid
          }
        }
        essentialsm: imageSharp(
          fluid: { originalName: { eq: "the-essential-sm.jpg" } }
        ) {
          fluid(quality: 100, maxWidth: 2550, srcSetBreakpoints: [1130]) {
            ...GatsbyImageSharpFluid
          }
        }

        footwear1200: imageSharp(
          fluid: { originalName: { eq: "footwear-1200.jpg" } }
        ) {
          fluid(quality: 100, maxWidth: 2550, srcSetBreakpoints: [1130]) {
            ...GatsbyImageSharpFluid
          }
        }
        footwear900: imageSharp(
          fluid: { originalName: { eq: "footwear-900.jpg" } }
        ) {
          fluid(quality: 100, maxWidth: 2550, srcSetBreakpoints: [1130]) {
            ...GatsbyImageSharpFluid
          }
        }
        footwearsm: imageSharp(
          fluid: { originalName: { eq: "footwear-sm.jpg" } }
        ) {
          fluid(quality: 100, maxWidth: 2550, srcSetBreakpoints: [1130]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={({
      essential1200,
      essential900,
      essentialsm,
      footwear1200,
      footwear900,
      footwearsm,
    }) => {
      const sourcesEssential = [
        essentialsm.fluid,
        {
          ...essential900.fluid,
          media: `(min-width: 950px)`,
        },
        {
          ...essential1200.fluid,
          media: `(min-width: 1200px)`,
        },
      ]

      const sourcesFootware = [
        footwearsm.fluid,
        {
          ...footwear900.fluid,
          media: `(min-width: 900px)`,
        },
        {
          ...footwear1200.fluid,
          media: `(min-width: 1200px)`,
        },
      ]

      return (
        <Container>
          <div className="text-only">
            <h1 className="pre-heading">
              Responsibly Built For The&nbsp;Long&nbsp;haul
            </h1>
            <h2 className="intro">
              We’re challenging the way the clothing industry operates. The way
              we source. The way we sew. The way we sell.
            </h2>
            <p className="feature-link">
              <a href="/pages/about-us" title="About Us and Our Mission">
                <u>Learn More</u>
              </a>
            </p>
          </div>

          <figure className="large-overlay text-white">
            <a href="/collections/the-essentials">
              <Img fluid={sourcesEssential} />
            </a>
            <figcaption>
              <a href="/collections/the-essentials">
                <span className="pre-heading">
                  The Essentials – Ships Immediately
                </span>
                <span className="heading">
                  The responsibly built&nbsp;staples
                  that&nbsp;define&nbsp;Taylor&nbsp;Stitch.
                </span>
                <span className="cta">
                  <u>SHOP ESSENTIALS</u>
                </span>
              </a>
            </figcaption>
          </figure>

          <div className="text-only">
            <h2 className="pre-heading">Free Shipping &amp; Returns</h2>
            <h3 className="intro">
              We repair or replace any defect outside of normal wear for life
              and we’ll cover the cost of shipping your gear.
            </h3>
          </div>

          <figure className="large-overlay">
            <a href="/blogs/worn-torn/2019-footwear">
              <Img fluid={sourcesFootware} />
            </a>
            <figcaption>
              <a href="/blogs/worn-torn/2019-footwear">
                <span className="pre-heading">Goodyear Welt Footwear</span>
                <span className="heading">
                  A&nbsp;selection&nbsp;created&nbsp;to
                  never&nbsp;go&nbsp;out&nbsp;of&nbsp;style.
                </span>
                <span className="cta">
                  <u>Shop Footwear</u>
                </span>
              </a>
            </figcaption>
          </figure>

          <Video />
        </Container>
      )
    }}
  />
)

export default Content
