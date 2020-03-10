import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"

import { breakpoints } from "../../theme"

const Container = styled.div`
  display: block;
  overflow: hidden;
  position: relative;

  .gatsby-image-wrapper > div {
    min-height: 90px;
  }

  h1 {
    bottom: 0;
    color: #fff;
    font-size: 26px;
    left: 0;
    margin: 0;
    padding: 51px 0 0 45px;
    position: absolute;
    right: 0;
    text-align: left;
    top: 0;
    z-index: 1;

    :before {
      content: " ";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    h1 {
      padding: 43px 0 0;
      text-align: center;
    }
  }

  @media (max-width: ${breakpoints.phablet}px) {
    h1 {
      font-size: calc(2.14286vw + 13.14286px);
      padding: 43px 0 0;
      text-align: center;
    }
  }
`

const Banner = ({ header }) => (
  <StaticQuery
    query={graphql`
      {
        banner157: file(relativePath: { regex: "/banner_page_1/" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 157, srcSetBreakpoints: [157]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        banner240: file(relativePath: { regex: "/banner_page_2/" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 240, srcSetBreakpoints: [240]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        banner479: file(relativePath: { regex: "/banner_page_3/" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 479, srcSetBreakpoints: [479]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        banner599: file(relativePath: { regex: "/banner_page_4/" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 599, srcSetBreakpoints: [599]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        banner1024: file(relativePath: { regex: "/banner_page_5/" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1024, srcSetBreakpoints: [1024]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        banner1442: file(relativePath: { regex: "/banner_page_6/" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1442, srcSetBreakpoints: [1442]) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const source = [
        {
          ...data.banner1442.childImageSharp.fluid,
          media: `(min-width: 1025px)`,
        },
        {
          ...data.banner1024.childImageSharp.fluid,
          media: `(min-width: 600px)`,
        },
        {
          ...data.banner599.childImageSharp.fluid,
          media: `(min-width: 480px)`,
        },
        {
          ...data.banner479.childImageSharp.fluid,
          media: `(min-width: 241px)`,
        },
        {
          ...data.banner240.childImageSharp.fluid,
          media: `(min-width: 158px)`,
        },
        data.banner157.childImageSharp.fluid,
      ]

      return (
        <Container>
          <Img fluid={source} alt="Terms and Conditions" />
          <h1 className="heading">
            <span>Terms and Conditions</span>
          </h1>
        </Container>
      )
    }}
  ></StaticQuery>
)

Banner.propsTypes = {
  header: PropTypes.string.isRequired,
}

export default Banner
