import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Slide from "./slide"

import { breakpoints } from "../../theme"

const Container = styled.div`
  margin-bottom: 12em;

  .gatsby-image-wrapper {
    width: 100%;
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    margin-bottom: 2em;
  }
`

class Slider extends React.Component {
  componentDidMount() {
    const Swiper = window.Swiper

    new Swiper(".swiper-container", {
      spaceBetween: 30,
      effect: "fade",
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4500,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query GetSlides {
            slides: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/slides/" } }
              sort: { fields: frontmatter___image___relativePath, order: ASC }
              limit: 10
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    image {
                      childImageSharp {
                        fluid(quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                      relativePath
                    }
                    imageMobile {
                      childImageSharp {
                        fluid(quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                      relativePath
                    }
                    subtitle
                    title
                    link
                    side
                    color
                  }
                }
              }
            }
          }
        `}
        render={({ slides: { edges: slides } }) => (
          <Container className="swiper-container">
            <div className="swiper-wrapper">
              {slides.map(({ node: slide }) => (
                <Slide key={slide.id} slide={slide}></Slide>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Container>
        )}
      ></StaticQuery>
    )
  }
}

export default Slider
