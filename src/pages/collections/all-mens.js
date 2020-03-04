import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import Slider from "../../components/home/slider"
import Content from "../../components/home/content"

import { breakpoints } from "../../theme"

const Container = styled.div`
  & > figure {
    align-items: stretch;
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    justify-content: center;
    margin-bottom: 12em;
    max-height: 860px;
    min-height: auto;

    :last-child {
      margin-bottom: 0;
    }
  }

  & > figure,
  .two-column > figure {
    background: #363636;
    overflow: hidden;
    position: relative;
  }

  figcaption a {
    align-items: flex-start;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: 38px 45px;
    position: relative;
    text-decoration: none;
    width: 100%;
    z-index: 1;

    span {
      text-align: left;
    }
  }

  .large-overlay span {
    margin-left: 15.55556%;
    margin-right: 32.44444%;
  }

  a .pre-heading {
    display: inline-flex;
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.14em;
    margin-bottom: 0.5em;
    text-align: left;
    text-transform: uppercase;
  }

  a .heading {
    max-width: 15em;
  }

  .large-overlay .heading {
    font-size: 42px;
  }

  .cta {
    display: inline-flex;
    font-size: 20px;
    margin-top: 3em;
  }

  a:hover u::after {
    background: #fff;
  }

  .container {
    margin-bottom: 12em;
    margin-top: 12em;
    padding: 0;
  }
  .container,
  .two-column {
    height: auto;
  }

  .two-column {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    figure {
      flex-basis: 45.77778%;
      margin: 0;
    }

    figcaption a {
      align-items: flex-start;
      display: flex;
      flex-flow: column nowrap;
      left: 0;
      height: 100%;
      justify-content: center;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    figcaption a span:first-of-type {
      margin-top: auto;
    }

    .pre-heading {
      font-family: "CD", Georgia, Times, "Times New Roman", serif;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 300;
      letter-spacing: 0;
      margin-bottom: 0.5em;
      text-transform: none;
    }

    .heading {
      font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
        "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
        "Lucida Grande", sans-serif;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0.14em;
      max-width: 15em;
      text-transform: uppercase;
    }
  }

  .gatsby-image-wrapper {
    line-height: 0;
    position: unset !important;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    .container {
      margin-bottom: 0 !important;
      margin-top: 0;
    }

    .two-column {
      flex-flow: column;

      figure {
        flex-basis: 100%;
        margin-bottom: 2em;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    .cta {
      margin-top: 0;
    }
  }

  @media (max-width: ${breakpoints.phablet}px) {
    .large-overlay .heading {
      font-size: calc(7.14286vw + -0.85714px);
    }

    .large-overlay .cta {
      font-size: calc(2.85714vw + 2.85714px);
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    & > figure,
    .container {
      margin-bottom: 2em;
      margin-top: 0;
    }

    .two-column {
      justify-content: space-evenly;
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    figcaption a {
      padding: 1.8rem;
    }

    .large-overlay span {
      margin-left: 0;
      margin-right: 0;
    }
  }
`

const AllMens = ({ data }) => {
  const sourceOuterwear = [
    {
      ...data.outerwear2880.edges[0].node.childImageSharp.fluid,
      media: `(min-width: 1441px)`,
    },
    {
      ...data.outerwear2048.edges[0].node.childImageSharp.fluid,
      media: `(min-width: 901px)`,
    },
    data.outerwear1130.edges[0].node.childImageSharp.fluid,
  ]

  const sourceMenKnits = [
    {
      ...data.menknits1340.edges[0].node.childImageSharp.fluid,
      media: `(min-width: 1441px)`,
    },
    {
      ...data.menknits670.edges[0].node.childImageSharp.fluid,
      media: `(min-width: 901px)`,
    },
    data.menknits556.edges[0].node.childImageSharp.fluid,
  ]

  const sourceMenShirts = [
    {
      ...data.menshirts1340.edges[0].node.childImageSharp.fluid,
      media: `(min-width: 1441px)`,
    },
    {
      ...data.menshirts670.edges[0].node.childImageSharp.fluid,
      media: `(min-width: 901px)`,
    },
    data.menshirts556.edges[0].node.childImageSharp.fluid,
  ]

  const sourceDispatches = [
    {
      ...data.dispatches2880.edges[0].node.childImageSharp.fluid,
      media: `(min-width: 1441px)`,
    },
    {
      ...data.dispatches2048.edges[0].node.childImageSharp.fluid,
      media: `(min-width: 901px)`,
    },
    data.dispatches1130.edges[0].node.childImageSharp.fluid,
  ]
  const sourceEssentials = [
    {
      ...data.essentials2048.edges[0].node.childImageSharp.fluid,
      media: `(min-width: 901px)`,
    },
    data.essentials1130.edges[0].node.childImageSharp.fluid,
  ]

  return (
    <Container>
      <Layout>
        <SEO title="All mens" />
        <h1 className="hidden">All Men's</h1>
        <Container>
          <figure className="large-overlay text-white">
            <a href="/collections/mens-outerwear">
              <Img fluid={sourceOuterwear} alt="Cold Weather Layers" />
            </a>
            <figcaption className="feature-link">
              <a href="/collections/mens-outerwear">
                <span className="pre-heading">Cold Weather Layers</span>
                <span className="heading">
                  Vintage is fine for some but we prefer to get there on our
                  own. With&nbsp;every construction detail finely tuned, each
                  wear will prove the worth of our jackets.
                </span>
                <span className="cta">
                  <u>Shop Outerwear</u>
                </span>
              </a>
            </figcaption>
          </figure>
          <div className="container two-column">
            <figure className="text-white">
              <a href="/collections/mens-knits">
                <Img fluid={sourceMenKnits} alt="Taylor Stitch - Knits" />
              </a>
              <figcaption className="feature-link">
                <a href="/collections/mens-knits">
                  <span className="pre-heading">
                    Base Layers For Fall &amp; Winter
                  </span>
                  <span className="heading">
                    <u>Shop Knits</u>
                  </span>
                </a>
              </figcaption>
            </figure>
            <figure className="text-white">
              <a href="/collections/mens-shirts">
                <Img
                  fluid={sourceMenShirts}
                  alt="Taylor Stitch - Mens Shirting"
                />
              </a>
              <figcaption className="feature-link">
                <a href="/collections/mens-shirts">
                  <span className="pre-heading">
                    Button-Ups &amp; Button-Downs
                  </span>
                  <span className="heading">
                    <u>Shop Shirts</u>
                  </span>
                </a>
              </figcaption>
            </figure>
          </div>
          <figure className="text-white">
            <a href="/blogs/dispatches">
              <Img fluid={sourceDispatches} alt="Taylor Stitch - Dispatch" />
            </a>
            <figcaption className="feature-link">
              <a href="/blogs/dispatches">
                <span className="pre-heading"></span>
                <span className="heading">
                  <u></u>
                </span>
              </a>
            </figcaption>
          </figure>
          <figure className="large-overlay text-white">
            <a href="/collections/the-essentials">
              <Img
                fluid={sourceEssentials}
                alt="Essentials — Always In Stock. Ready To Ship."
              />
            </a>
            <figcaption className="feature-link">
              <a href="/collections/the-essentials">
                <span className="pre-heading">
                  The Essentials — Ship Immediately
                </span>
                <span className="heading">
                  Our custom milled twill is soft, sturdy and built to last.
                </span>
                <span className="cta">
                  <u>Shop Essentials</u>
                </span>
              </a>
            </figcaption>
          </figure>
        </Container>
      </Layout>
    </Container>
  )
}

export default AllMens

export const AllMensQuery = graphql`
  query AllMensQuery {
    outerwear1130: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/outerwear_1130/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 900, srcSetBreakpoints: [1130]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    outerwear2048: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/outerwear_2048/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1440, srcSetBreakpoints: [2048]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    outerwear2880: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/outerwear_2880/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2880, srcSetBreakpoints: [2880]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    menknits556: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/men_knits_556/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 556, srcSetBreakpoints: [556]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    menknits670: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/men_knits_670/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 335, srcSetBreakpoints: [670]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    menknits1340: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/men_knits_1340/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 670, srcSetBreakpoints: [1340]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    menshirts556: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/men_shirts_556/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 556, srcSetBreakpoints: [556]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    menshirts670: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/men_shirts_670/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 335, srcSetBreakpoints: [670]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    menshirts1340: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/men_shirts_1340/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 670, srcSetBreakpoints: [1340]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    dispatches1130: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/dispatches_1130/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1130, srcSetBreakpoints: [1130]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    dispatches2048: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/dispatches_2048/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2048, srcSetBreakpoints: [2048]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    dispatches2880: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/dispatches_2880/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2880, srcSetBreakpoints: [2880]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    essentials1130: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/essentials_1130/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1130, srcSetBreakpoints: [1130]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    essentials2048: allFile(
      filter: {
        relativePath: { regex: "/collections/all-mens/essentials_2048/" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2048, srcSetBreakpoints: [2048]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
