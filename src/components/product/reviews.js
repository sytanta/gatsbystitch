import React from "react"
import styled from "styled-components"

import { breakpoints } from "../../theme"

const Container = styled.section`
  clear: both;
  padding-top: 4em;
  width: 100%;

  h3 {
    display: block;
    font-size: 1.2rem;
    letter-spacing: 0.14em;
    padding-left: 45px;
    text-align: left;
    text-transform: uppercase;
  }

  .people-highlight {
    font-family: "Open Sans";
    margin-left: auto;
    margin-right: auto;
    padding-left: 45px;
    padding-right: 45px;
  }

  .reviews-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    text-align: center;
  }

  .ratings-wrapper {
    align-items: flex-start;
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 10rem !important;
    margin-right: 2%;
    margin-top: 12rem;
    min-width: 0;
    text-align: left !important;
    width: 32.44444%;
  }

  .reviews-rating {
    font-size: 20px;
    order: 3;

    i {
      color: #b5aa8f;
      font-size: 1.4rem;
      margin-right: 2px;
      padding: 0;
    }
  }

  .reviews-message {
    font-family: "CD", Georgia, Times, "Times New Roman", serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 34px;
    margin-bottom: 1em;
    margin-top: 1em;
    order: 2;
    overflow-wrap: break-word;
    padding-right: 8.44444%;
    width: 100%;
  }

  .reviews-author {
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.14em;
    order: 1;
    padding-top: 5rem;
    position: relative;
    text-transform: uppercase;

    :before {
      content: "\\201c";
      font-family: "CD", Georgia, Times, "Times New Roman", serif;
      font-size: 10rem;
      font-style: normal;
      font-weight: 300;
      left: 0;
      letter-spacing: 0;
      line-height: 0.8em;
      position: absolute;
      top: 0;
      text-indent: -0.05em;
    }

    .verified-badge {
      color: #b5aa8f;
      display: block;
      font-size: 0.8rem;
      margin-top: 0.4rem;
      position: relative;
      text-transform: uppercase;

      i {
        font-size: 1.2rem;
        margin-right: 4px;
        vertical-align: text-top;
      }
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    padding: 0;

    h3 {
      display: none;
    }

    .people-highlight {
      padding: 0 12px;
    }

    .reviews-wrapper {
      flex-flow: row wrap;
    }

    .ratings-wrapper {
      margin: 2rem 0 !important;
      width: 100%;
    }
  }
`

const Reviews = () => (
  <Container>
    <h3 className="anw normal-700">What They’re Saying</h3>
    <div className="people-highlight">
      <div className="reviews-wrapper">
        <div className="ratings-wrapper">
          <div className="reviews-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="reviews-message">
            One of my got to pieces for sure. Would recommend 10/10.{" "}
          </div>
          <div className="reviews-author" before="“">
            <span className="verified-badge" data-type="buyer">
              <i className="fas fa-award"></i> Verified Buyer
            </span>
          </div>
        </div>
        <div className="ratings-wrapper">
          <div className="reviews-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="reviews-message">
            Absolutely LOVE this shirt. Unfortunately, once my wife spotted it
            she has hijacked it and won’t give it back!
          </div>
          <div className="reviews-author">
            michael b.
            <span className="verified-badge" data-type="buyer">
              <i className="fas fa-award"></i> Verified Buyer
            </span>
          </div>
        </div>
        <div className="ratings-wrapper">
          <div className="reviews-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="reviews-message">
            Perfect slim fit, great heavy denim, killer color and styling. No
            complaints about this one whatsoever.
          </div>
          <div className="reviews-author">
            Lewis B.
            <span className="verified-badge" data-type="buyer">
              <i className="fas fa-award"></i> Verified Buyer
            </span>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default Reviews
