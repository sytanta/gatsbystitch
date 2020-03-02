import React from "react"
import styled from "styled-components"

import { breakpoints } from "../../theme"

const Container = styled.section`
  clear: both;
  margin: 4em auto;
  padding-left: 45px;
  padding-right: 45px;
  width: 100%;

  .container {
    padding-left: 0;
    padding-right: 0;
  }

  h3 {
    font-size: 1.2rem;
    letter-spacing: 0.14em;
    text-align: left;
    text-transform: uppercase;
  }

  ul {
    padding: 1em 0 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    text-align: left;

    li {
      flex-basis: 24%;
      margin-bottom: 3rem;
    }

    figure {
      background: transparent;
      margin: 0;
      overflow: hidden;
      padding-top: 2em;
      position: relative;
      width: 100%;

      a {
        display: block;
        position: relative;
        text-decoration: none;

        ::after {
          content: "";
          display: block;
          height: 0;
          padding-bottom: 100%;
          width: 100%;
        }

        img:not(:first-of-type) {
          opacity: 0;
        }

        :hover {
          img:not(:first-of-type) {
            opacity: 1;
          }
        }
      }

      img {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: 0 auto;
        color: #fff;
        transition: opacity 0.3s ease-in-out;
        backface-visibility: hidden;
        width: 100%;
      }
    }

    figcaption {
      margin: 1em auto 0;
      position: relative;

      b {
        display: block;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        padding: 1em 0;
      }

      .title,
      .subtitle {
        display: block;
        width: 100%;
      }

      .title {
        font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
          "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
          "Lucida Grande", sans-serif;
        font-size: inherit;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      .subtitle {
        font-style: normal;
        font-weight: 300;
        letter-spacing: 0;
      }
    }
  }

  @media (max-width: ${breakpoints.phablet}px) {
    ul {
      figcaption b {
        font-size: calc(1.07143vw + 5.57143px);
        line-height: calc(1.78571vw + 7.28571px);
      }
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    margin: 2em 0;
    padding: 0;

    .container {
      padding: 0 12px;
    }

    ul {
      justify-content: space-evenly;

      li {
        flex-basis: 46%;
      }
    }
  }
`

const Recommendation = () => (
  <Container id="featured" className="images">
    <div className="recommendations-group group-basket container">
      <h3 className="anw normal-700">Recommendations for you</h3>
      <ul className="product matrix">
        <li>
          <figure>
            <a href="/products/the-cash-shirt-in-indigo-sashiko">
              <img
                className="lazyload feature"
                alt="The Cash Shirt in Indigo Sashiko - featured image"
                src="https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q419_product_cash_shirt_indigo_sashiko_001_large.jpg?v=1574707310"
                srcSet="https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q419_product_cash_shirt_indigo_sashiko_001_large.jpg?v=1574707310 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q419_product_cash_shirt_indigo_sashiko_001_compact.jpg?v=1574707310 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q419_product_cash_shirt_indigo_sashiko_001_medium.jpg?v=1574707310 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q419_product_cash_shirt_indigo_sashiko_001_grande.jpg?v=1574707310 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q419_product_cash_shirt_indigo_sashiko_001_1024x1024.jpg?v=1574707310} 1024w"
                data-srcset="https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q419_product_cash_shirt_indigo_sashiko_001_large.jpg?v=1574707310 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q419_product_cash_shirt_indigo_sashiko_001_compact.jpg?v=1574707310 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q419_product_cash_shirt_indigo_sashiko_001_medium.jpg?v=1574707310 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q419_product_cash_shirt_indigo_sashiko_001_grande.jpg?v=1574707310 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q419_product_cash_shirt_indigo_sashiko_001_1024x1024.jpg?v=1574707310} 1024w"
                data-sizes="auto"
              />
              <img
                className="lazyunload lazypreload swap ls-is-cached lazyautosizes lazyloaded"
                alt="The Cash Shirt in Indigo Sashiko - alternate view"
                srcSet="https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_product_cash_shirt_indigo_sashiko_006_large.jpg?v=1581530114 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_product_cash_shirt_indigo_sashiko_006_compact.jpg?v=1581530114 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_product_cash_shirt_indigo_sashiko_006_medium.jpg?v=1581530114 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_product_cash_shirt_indigo_sashiko_006_grande.jpg?v=1581530114 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_product_cash_shirt_indigo_sashiko_006_1024x1024.jpg?v=1581530114} 1024w"
                data-srcset="https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_product_cash_shirt_indigo_sashiko_006_large.jpg?v=1581530114 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_product_cash_shirt_indigo_sashiko_006_compact.jpg?v=1581530114 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_product_cash_shirt_indigo_sashiko_006_medium.jpg?v=1581530114 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_product_cash_shirt_indigo_sashiko_006_grande.jpg?v=1581530114 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_product_cash_shirt_indigo_sashiko_006_1024x1024.jpg?v=1581530114} 1024w"
                data-sizes="auto"
                sizes="324px"
              />
            </a>
            <figcaption>
              <b>
                <span className="title">The Cash Shirt</span>
                <span className="subtitle">in Indigo Sashiko</span>
                <span>$125</span>
              </b>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <a href="/products/the-california-in-indigo-dobby">
              <img
                className="lazyload feature"
                alt="The California in Indigo Dobby - featured image"
                src="https://cdn.shopify.com/s/files/1/0070/1922/products/INDIGO_DOBI_CALY_2_large.jpg?v=1571341344"
                srcSet="https://cdn.shopify.com/s/files/1/0070/1922/products/INDIGO_DOBI_CALY_2_large.jpg?v=1571341344 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/INDIGO_DOBI_CALY_2_compact.jpg?v=1571341344 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/INDIGO_DOBI_CALY_2_medium.jpg?v=1571341344 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/INDIGO_DOBI_CALY_2_grande.jpg?v=1571341344 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/INDIGO_DOBI_CALY_2_1024x1024.jpg?v=1571341344} 1024w"
                data-srcset="https://cdn.shopify.com/s/files/1/0070/1922/products/INDIGO_DOBI_CALY_2_large.jpg?v=1571341344 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/INDIGO_DOBI_CALY_2_compact.jpg?v=1571341344 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/INDIGO_DOBI_CALY_2_medium.jpg?v=1571341344 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/INDIGO_DOBI_CALY_2_grande.jpg?v=1571341344 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/INDIGO_DOBI_CALY_2_1024x1024.jpg?v=1571341344} 1024w"
                data-sizes="auto"
              />
              <img
                className="lazyunload lazypreload swap ls-is-cached lazyautosizes lazyloaded"
                alt="The California in Indigo Dobby - alternate view"
                srcSet="https://cdn.shopify.com/s/files/1/0070/1922/products/mens_workshop_Q319_california_indigo_dobby_04_large.jpg?v=1571341362 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/mens_workshop_Q319_california_indigo_dobby_04_compact.jpg?v=1571341362 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/mens_workshop_Q319_california_indigo_dobby_04_medium.jpg?v=1571341362 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/mens_workshop_Q319_california_indigo_dobby_04_grande.jpg?v=1571341362 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/mens_workshop_Q319_california_indigo_dobby_04_1024x1024.jpg?v=1571341362} 1024w"
                data-srcset="https://cdn.shopify.com/s/files/1/0070/1922/products/mens_workshop_Q319_california_indigo_dobby_04_large.jpg?v=1571341362 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/mens_workshop_Q319_california_indigo_dobby_04_compact.jpg?v=1571341362 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/mens_workshop_Q319_california_indigo_dobby_04_medium.jpg?v=1571341362 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/mens_workshop_Q319_california_indigo_dobby_04_grande.jpg?v=1571341362 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/mens_workshop_Q319_california_indigo_dobby_04_1024x1024.jpg?v=1571341362} 1024w"
                data-sizes="auto"
                sizes="324px"
              />
            </a>
            <figcaption>
              <b>
                <span className="title">The California</span>
                <span className="subtitle">in Indigo Dobby</span>
                <span>$125</span>
              </b>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <a href="/products/the-crater-shirt-in-navy-plaid-2">
              <img
                className="lazyload feature"
                alt="The Crater Shirt in Navy Plaid - featured image"
                src="https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_001_large.jpg?v=1571340411"
                srcSet="https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_001_large.jpg?v=1571340411 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_001_compact.jpg?v=1571340411 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_001_medium.jpg?v=1571340411 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_001_grande.jpg?v=1571340411 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_001_1024x1024.jpg?v=1571340411} 1024w"
                data-srcset="https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_001_large.jpg?v=1571340411 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_001_compact.jpg?v=1571340411 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_001_medium.jpg?v=1571340411 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_001_grande.jpg?v=1571340411 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_001_1024x1024.jpg?v=1571340411} 1024w"
                data-sizes="auto"
              />
              <img
                className="lazyunload lazypreload swap ls-is-cached lazyautosizes lazyloaded"
                alt="The Crater Shirt in Navy Plaid - alternate view"
                srcSet="https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_002_large.jpg?v=1571340435 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_002_compact.jpg?v=1571340435 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_002_medium.jpg?v=1571340435 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_002_grande.jpg?v=1571340435 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_002_1024x1024.jpg?v=1571340435} 1024w"
                data-srcset="https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_002_large.jpg?v=1571340435 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_002_compact.jpg?v=1571340435 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_002_medium.jpg?v=1571340435 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_002_grande.jpg?v=1571340435 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_mens_Q319_product_crater_navy_plaid_002_1024x1024.jpg?v=1571340435} 1024w"
                data-sizes="auto"
                sizes="324px"
              />
            </a>
            <figcaption>
              <b>
                <span className="title">The Crater Shirt</span>
                <span className="subtitle">in Navy Plaid</span>
                <span className="sale-price">$99</span>
                &nbsp;&nbsp;
                <del>$128</del>
              </b>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <a href="/products/the-western-in-washed-denim">
              <img
                className="lazyload feature"
                alt="The Western Shirt in Washed Denim - featured image"
                src="https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_001_large.jpg?v=1579560997"
                srcSet="https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_001_large.jpg?v=1579560997 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_001_compact.jpg?v=1579560997 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_001_medium.jpg?v=1579560997 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_001_grande.jpg?v=1579560997 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_001_1024x1024.jpg?v=1579560997} 1024w"
                data-srcset="https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_001_large.jpg?v=1579560997 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_001_compact.jpg?v=1579560997 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_001_medium.jpg?v=1579560997 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_001_grande.jpg?v=1579560997 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_001_1024x1024.jpg?v=1579560997} 1024w"
                data-sizes="auto"
              />
              <img
                className="lazyunload lazypreload swap ls-is-cached lazyautosizes lazyloaded"
                alt="The Western Shirt in Washed Denim - alternate view"
                srcSet="https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_002_large.jpg?v=1579561395 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_002_compact.jpg?v=1579561395 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_002_medium.jpg?v=1579561395 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_002_grande.jpg?v=1579561395 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_002_1024x1024.jpg?v=1579561395} 1024w"
                data-srcset="https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_002_large.jpg?v=1579561395 480w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_002_compact.jpg?v=1579561395 160w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_002_medium.jpg?v=1579561395 240w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_002_grande.jpg?v=1579561395 600w, https://cdn.shopify.com/s/files/1/0070/1922/products/instock_mens_Q120_western_washed_denim_002_1024x1024.jpg?v=1579561395} 1024w"
                data-sizes="auto"
                sizes="324px"
              />
            </a>
            <figcaption>
              <b>
                <span className="title">The Western Shirt</span>
                <span className="subtitle">in Washed Denim</span>{" "}
                <span>$125</span>
              </b>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </Container>
)

export default Recommendation
