import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: block;
  height: auto;
  overflow: hidden;
  position: relative;

  img {
    filter: blur(0);
  }

  h1 {
    bottom: 0;
    color: #fff;
    font-size: 26px;
    left: 0;
    letter-spacing: 0;
    line-height: 1.21429;
    margin: 0;
    padding: 51px 0 0 45px;
    position: absolute;
    right: 0;
    text-align: left;
    top: 0;
    z-index: 1;

    ::before {
      content: " ";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }
`

const Banner = () => (
  <Container>
    <img
      alt="Men&amp;rsquo;s Shirts"
      className="lazyautosizes ls-is-cached lazyloaded"
      srcSet="//cdn.shopify.com/s/files/1/0070/1922/collections/category_mens_shirting_01_large.progressive.jpg?284330 480w,
      //cdn.shopify.com/s/files/1/0070/1922/collections/category_mens_shirting_01_compact.progressive.jpg?284330 160w,
      //cdn.shopify.com/s/files/1/0070/1922/collections/category_mens_shirting_01_medium.progressive.jpg?284330 240w,
      //cdn.shopify.com/s/files/1/0070/1922/collections/category_mens_shirting_01_grande.progressive.jpg?284330 600w,
      //cdn.shopify.com/s/files/1/0070/1922/collections/category_mens_shirting_01_1024x1024.progressive.jpg?284330 1024w,
      //cdn.shopify.com/s/files/1/0070/1922/collections/category_mens_shirting_01_2048x2048.progressive.jpg?284330 2048w"
      data-srcset="//cdn.shopify.com/s/files/1/0070/1922/collections/category_mens_shirting_01_large.progressive.jpg?284330 480w,
      //cdn.shopify.com/s/files/1/0070/1922/collections/category_mens_shirting_01_compact.progressive.jpg?284330 160w,
      //cdn.shopify.com/s/files/1/0070/1922/collections/category_mens_shirting_01_medium.progressive.jpg?284330 240w,
      //cdn.shopify.com/s/files/1/0070/1922/collections/category_mens_shirting_01_grande.progressive.jpg?284330 600w,
      //cdn.shopify.com/s/files/1/0070/1922/collections/category_mens_shirting_01_1024x1024.progressive.jpg?284330 1024w,
      //cdn.shopify.com/s/files/1/0070/1922/collections/category_mens_shirting_01_2048x2048.progressive.jpg?284330 2048w"
      data-sizes="auto"
      sizes="1078px"
    />
    <h1 className="heading cd normal-300">
      <span>Men’s Shirts</span>
    </h1>
  </Container>
)

export default Banner
