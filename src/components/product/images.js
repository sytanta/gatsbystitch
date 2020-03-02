import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { breakpoints } from "../../theme"

const Container = styled.section`
  flex-basis: 49.9%;
  max-width: 49.9%;

  @media (max-width: ${breakpoints.headerMobile}px) {
    flex-basis: 100%;
  max-width: 100%;
  }
`

const ContainerInner = styled.div`
  display: block;
  margin-bottom: 5em;
  overflow: visible;
  position: relative;

  .swiper-slide {
    max-width: 100% !important;
  }

  .swiper-container-product.swiper-container-horizontal
    > .swiper-pagination-bullets {
    bottom: -30px;
    left: 0;
    width: 100%;

    .swiper-pagination-bullet {
      background: #f2f2f2;
      border: 1px solid #f2f2f2;
      border-radius: 50%;
      opacity: 1;
      height: 8px;
      width: 8px;
    }
    .swiper-pagination-bullet-active {
      background: #c2c2c2;
      border-color: #c2c2c2;
    }
  }
`

class Images extends React.Component {
  componentDidMount() {
    const Swiper = window.Swiper

    new Swiper(".swiper-container-product", {
      spaceBetween: 30,
      effect: "fade",
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
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
          query ProductImageSlides {
            images: allFile(
              filter: { relativePath: { regex: "/slide_washed_denim/" } }
              sort: { fields: relativePath }
            ) {
              edges {
                node {
                  childImageSharp {
                    id
                    fluid(
                      quality: 100
                      maxWidth: 1980
                      srcSetBreakpoints: [414, 600, 900, 1200]
                    ) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ images }) => {
          return (
            <Container>
              <ContainerInner>
                <div className="swiper-container-product">
                  <div className="swiper-wrapper">
                    {images.edges.map(({ node: image }) => (
                      <div key={image.id} className="swiper-slide">
                        <Img fluid={image.childImageSharp.fluid} />
                      </div>
                    ))}
                  </div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </ContainerInner>
            </Container>
          )
        }}
      />
    )
  }
}

export default Images
