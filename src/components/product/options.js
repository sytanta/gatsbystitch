import React, { useContext } from "react"
import styled from "styled-components"

import ReviewIcon from "./review-icon"
import Variants from "./variants"
import ModalRepair from "./modal-repair"
import ModalShipping from "./modal-shipping"
import ModalSize from "./modal-size"

import UIContext from "../../context/ui-context"

import { breakpoints } from "../../theme"

const Container = styled.section`
  clear: right;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 49.9%;
  float: right;
  justify-content: center;
  padding: 0 2% 4em 1em;
  position: relative;
  width: 100%;

  & > * {
    margin: 0 auto;
    width: 350px;
  }

  .pre-title {
    font-size: 1rem;
    letter-spacing: 0.08em;
    text-decoration: none;
  }

  h1 {
    font-size: 2.8rem;
    letter-spacing: 0;
    margin: 1.65em auto 0.75em;
  }

  .colorway {
    display: block;
  }

  .price {
    color: #0f2130;
    font-size: 4rem;
    letter-spacing: 0;
  }

  .afterpay-paragraph {
    font-size: 1.2rem;
    margin: 0;
    padding-right: 0;
    padding-top: 3.35em;
    text-align: center;
  }

  .icon-suite {
    color: #363636;
    display: flex;
    flex-flow: row wrap;
    font-size: 1rem;
    justify-content: space-between;
    letter-spacing: 0.08em;
    padding: 5.75em 0 0;
    text-align: left;

    li {
      cursor: pointer;
      flex-basis: 49.33333%;
      margin-bottom: 2rem;
      overflow: hidden;

      &:hover {
        color: #b5aa8f;
      }

      // :nth-of-type(1) {
      //   display: block;
      //   order: 1;
      // }
      :nth-of-type(2) {
        display: none;
      }
      // :nth-of-type(3) {
      //   order: 2;
      // }
      // :nth-of-type(4) {
      //   order: 3;
      // }

      & > div,
      a {
        cursor: pointer;
        display: inline-block;
        text-decoration: none;
      }
    }

    span {
      max-width: 14em;
      margin-left: 40px;
      font-size: 0.8rem;

      &:nth-of-type(1) {
        display: none;
      }

      &:nth-of-type(2) {
        font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
          "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
          "Lucida Grande", sans-serif;
        margin-bottom: 0.5em;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.6;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }

      &:nth-of-type(n + 2) {
        display: block;
      }

      &:nth-of-type(3) {
        color: #b5aa8f;
        display: none;
        font-family: "CD", Georgia, Times, "Times New Roman", serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 1.2;
        text-transform: none;
      }
    }

    .icon {
      color: #b5aa8f;
      display: block;
      height: 25px;
      float: left;
      width: 25px;
    }
  }

  @media (max-width: ${breakpoints.phablet}px) {
    & > * {
      max-width: 100%;
      width: calc(21.42857vw + 221.42857px);
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    flex-basis: 100%;
    float: none;
    max-width: 100%;
    padding: 4em 1em;
    text-align: center;

    .icon-suite {
      flex-flow: column nowrap;
      padding: 5.75em 1.5em 0;

      li {
        flex-basis: 100%;
        margin-bottom: 3.5rem;

        .icon {
          height: 34px;
          width: 34px;
        }
      }

      span {
        margin-bottom: 0.5em;
        margin-left: 60px;
        max-width: none;

        &:nth-of-type(3) {
          display: block;
        }
      }
    }
  }
`

const Options = () => {
  const { productHelpModal, toggleProductHelpModal } = useContext(UIContext)

  const toggleHelpModal = modalName => {
    toggleProductHelpModal(modalName)
  }

  return (
    <Container>
      <div className="titling">
        <a
          href="/collections/mens-in-stock"
          className="anw normal-400 uppercase pre-title"
        >
          In Stock
        </a>
        <ReviewIcon />
        <h1
          className="normal-300"
          data-title="The Western Shirt in Washed Denim"
        >
          The Western Shirt
          <span className="colorway">in Washed Denim</span>
        </h1>
        <b className="price normal-300">
          <span>$125</span>
        </b>
        <p className="afterpay-paragraph">
          <span>
            <span>&#8230;</span> or 4 interest-free installments of $31.25 by{" "}
          </span>
          <span className="afterpay-logo-link">
            <img
              className="afterpay-logo"
              alt="Afterpay"
              src="https://static.afterpay.com/integration/product-page/logo-afterpay-black.png"
              srcSet="https://static.afterpay.com/integration/product-page/logo-afterpay-black.png 1x, https://static.afterpay.com/integration/product-page/logo-afterpay-black@2x.png 2x, https://static.afterpay.com/integration/product-page/logo-afterpay-black@3x.png 3x"
              style={{
                verticalAlign: "middle",
                maxWidth: "100px",
                width: "9rem",
              }}
            />{" "}
            <a
              className="afterpay-link"
              tabIndex="0"
              href="https://www.afterpay.com/purchase-payment-agreement"
              style={{
                cursor: "pointer",
                color: "inherit",
                textDecoration: "none",
                display: "none",
              }}
              aria-label="Afterpay Information - Opens a dialog"
            >
              ⓘ
            </a>
          </span>
        </p>
      </div>
      <Variants />
      <div id="bis-embed-wrapper" className="hidden">
        <input
          type="email"
          className="email back-in-stock-email"
          placeholder="Email Address"
        />
        <div
          className="awesome"
          id="back-in-stock-trigger"
          data-originaltext="Notify Me"
          data-processingtext="Processing"
        >
          Notify Me
        </div>
        <div className="bis-response-wrapper">
          <p className="bis-response success"></p>
          <p className="bis-response error"></p>
        </div>
      </div>
      <ul className="icon-suite anw normal-400 uppercase">
        <li
          onClick={() => {
            toggleHelpModal("repair")
          }}
        >
          <div className="icon-shirt modal-is-trigger">
            <span>Guarantee</span>
            <svg
              className="icon icon-shirt"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 932.84 1181.65"
              id="icon-shirt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M885.19 202.63c-16.33-5.56-88.51-26.63-119.86-35.75-8.86-22.46-25.92-65.79-32.36-82.88-15-39.66-24.49-59.24-77.1-71C611.98 3.22 500.18.54 466.96 0h-1.09c-33.21.59-145 3.27-188.9 13.05-52.62 11.72-62.14 31.3-77.1 71-6.45 17.1-23.5 60.43-32.36 82.89-31.35 9.12-103.53 30.19-119.86 35.75-29.39 10-47.65 36.44-47.65 69 0 5.29.47 96.87 1.13 223.62 1.23 233.71 2.9 553.79 2.9 586.83 0 53.94 46.78 99.51 102.17 99.51h720.44c55.38 0 102.17-45.57 102.17-99.51 0-33 1.67-353.12 2.89-586.83.66-126.75 1.14-218.33 1.14-223.62 0-32.62-18.26-59.06-47.65-69.06zm-171.38.8l4.4 11.12c-49.46 126.1-122.09 240.83-131 254.65a4.22 4.22 0 01-6.93.36c-5.57-7.19-10.48-17.3-16.71-30.1-10.46-21.51-24.41-50.2-51.59-85.39 91.89-83.39 143.1-177.78 168.34-235.89 11.59 29.89 32.46 82.66 33.49 85.25zM290.31 72.91c30.36-6.76 113.7-10.46 176.11-11.58 62.41 1.12 145.75 4.82 176.11 11.58q15.4 3.44 20.27 6.51a656.22 656.22 0 01-41.71 88.08c-89.76-6.93-219.6-6.88-305.84.14a709.86 709.86 0 01-44.5-88.63q5.18-2.88 19.56-6.1zm-71.28 130.52c1-2.65 22.86-57.8 34.23-87.3 26.55 57.76 80.27 153.45 173.46 237.87-27.58 35.18-43.62 63.79-55.64 85.24-7.16 12.77-12.82 22.86-18.57 30.28a4.21 4.21 0 01-6.92-.36c-8.87-13.82-81.5-128.53-131-254.65zm216.72 916.81H106.2c-23.37 0-40.83-20.16-40.83-38.17 0-33.2-1.67-353.37-2.89-587.15-.64-121.89-1.14-218.17-1.14-223.3 0-8.85 4.57-10.4 6.07-10.92 14.08-4.79 81.41-24.5 118.52-35.29 50.61 129.11 124.79 246.25 133.85 260.37a35 35 0 0027.83 16h1.55a35 35 0 0027.59-13.53c7.15-9.22 13.61-20.74 21.08-34.07 9.09-16.22 20.61-36.72 37.92-61.06zm34.41-770.28h-1.54l-10.75-9.32c-53.45-46.31-94.15-97.48-124.32-143.6 79.24-5.37 188.15-5.39 269.89 0-29.15 46.12-69.09 97.31-122.53 143.65zm398 576.24H641.51c-9.78 0-30-8.76-30-35.81V682.61h257.91c-.49 87.17-.93 173.44-1.27 243.59zm1.39-274.26h-258v-60h258.34c-.14 19.84-.24 39.9-.35 60zm.82-157c-.11 21.49-.23 43.71-.34 66.37H580.85v329.1c0 45.85 35.47 66.48 60.66 66.48H868c-.32 66.37-.53 113.53-.53 125.2 0 18-17.46 38.17-40.83 38.17H497.09V385.37c19.14 26.8 29.92 48.92 38.94 67.46 6.72 13.83 12.53 25.78 20.06 35.48a35 35 0 0027.59 13.53h1.55a35 35 0 0027.83-16c9.06-14.06 83.24-131.26 133.85-260.36 37.11 10.79 104.44 30.5 118.51 35.3 1.5.52 6.07 2.07 6.07 10.92 0 5.09-.5 101.34-1.14 223.23z"
              ></path>
            </svg>
            <span>Repair Or Replace Guarantee</span>
            <span>Learn more</span>
          </div>
          <div className="visually-hidden"></div>
        </li>
        <li>
          <a href="/help" className="icon-help chat-expand">
            <span>Help</span>
          </a>
        </li>
        <li
          onClick={() => {
            toggleHelpModal("shipping")
          }}
        >
          <div className="icon-shipping modal-is-trigger">
            <span>Shipping</span>
            <svg
              className="icon icon-package"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 1078.1 1179.85"
              id="icon-package"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M1060.01 250.99L553.56 3.31a32.68 32.68 0 00-28.65 0L17.99 251.04a32.31 32.31 0 00-18 29.07v617.46a32.3 32.3 0 0018 29.06l506.92 247.72a32.63 32.63 0 0028.6 0l506.5-247.72a32.3 32.3 0 0018-29.06V280.06a32.28 32.28 0 00-18-29.07zM90.23 286.15a5.83 5.83 0 012.61-2.61L543.59 66.08a5.59 5.59 0 015.41 0v.16l187.5 91.11a5.9 5.9 0 010 10.52L289.58 388.7a5.61 5.61 0 01-5.25 0L92.84 294.06a5.9 5.9 0 01-2.61-7.91zM523 1096.22a5.25 5.25 0 01-4.36 6 5.38 5.38 0 01-3.59-.71L64.52 880.83a5.71 5.71 0 01-3.52-5.25V356.49a5.85 5.85 0 015.84-5.84 6 6 0 012.53.57l192.62 95.49v143a2.56 2.56 0 001.42 2.3l44.86 22.4a2.56 2.56 0 003.72-2.3V471.46l207.9 103.09a5.23 5.23 0 013.1 5.25zm30-574.65l-203.38-100.8a5.9 5.9 0 01-2.59-7.92 5.8 5.8 0 012.59-2.59l447.65-221.43a5.63 5.63 0 015.26 0l205.06 99.48a5.9 5.9 0 010 10.51L558.25 521.56a5.61 5.61 0 01-5.25 0zm464 353.66a5.56 5.56 0 01-3.1 5.73l-419.54 205.62a5.86 5.86 0 01-7.79-2.74 6 6 0 01-.57-2.53V577.06a6.1 6.1 0 013.1-5.26l419.54-210.87a5.83 5.83 0 018.36 5.26z"
              ></path>
            </svg>
            <span>Free Shipping &amp; Free&nbsp;Returns</span>
            <span>Shipping info</span>
          </div>
        </li>
        <li
          onClick={() => {
            toggleHelpModal("size")
          }}
        >
          <div className="icon-sizing modal-is-trigger">
            <span>Sizing</span>
            <svg
              className="icon icon-rule"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 1193.87 1193.86"
              id="icon-rule"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M1184.31 221.69l-206.4-206.4a32.75 32.75 0 00-45.91 0 32.75 32.75 0 000 45.92l176.25 176.25c4.17 4.17 4.17 10.67 0 14.38L939.42 420.67c-4.18 4.17-10.67 4.17-14.38 0L863.35 359a32.47 32.47 0 00-45.92 45.92l61.69 61.68c4.18 4.18 4.18 10.67 0 14.38L710.29 649.79c-4.17 4.18-10.67 4.18-14.38 0L519.66 473.54a32.47 32.47 0 10-45.91 45.92L650 695.71c4.17 4.17 4.17 10.67 0 14.38L481.17 878.92c-4.18 4.17-10.67 4.17-14.38 0l-61.69-61.69a32.47 32.47 0 00-45.92 45.92l61.69 61.69c4.17 4.17 4.17 10.66 0 14.37L252 1108c-4.17 4.18-10.67 4.18-14.38 0L61.41 931.79a32.77 32.77 0 00-45.92 0 32.77 32.77 0 000 45.92l206.4 206.4a32.77 32.77 0 0045.92 0l918.36-918.36c10.67-10.67 10.67-31.54-1.86-44.06z"
              ></path>
            </svg>
            <span>Need a hand? Find&nbsp;your&nbsp;size</span>
            <span>Launch Fit Finder</span>
          </div>
        </li>
        <li className="reviews-variation" style={{ display: "none" }}>
          <a
            className="icon-reviews review-modal-trigger"
            data-iframe="/products/the-western-in-washed-denim?view=product-reviews"
            href="#"
          >
            <span>Reviews</span>
          </a>
        </li>
      </ul>
      {productHelpModal === "repair" ? (
        <ModalRepair />
      ) : productHelpModal === "shipping" ? (
        <ModalShipping />
      ) : productHelpModal === "size" ? (
        <ModalSize />
      ) : (
        ""
      )}
    </Container>
  )
}

export default Options
