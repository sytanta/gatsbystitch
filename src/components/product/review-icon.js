import React from "react"
import styled from "styled-components"

const Container = styled.div`
  .stamped-badge {
    cursor: pointer;
    display: block;
    min-height: auto;
    min-width: auto;
  }

  .stamped-badge-starrating {
    color: #b5aa8f;
    margin: 0 3px 0 0 !important;
    vertical-align: top;
  }

  .stamped-fa {
    margin: 0 2px 0 0;
  }
`

const ReviewIcon = () => (
  <Container className="icon-reviews">
    <span
      className="stamped-product-reviews-badge"
      data-id="3679617056845"
      data-product-title="The Western Shirt in Washed Denim"
    >
      <span className="stamped-badge" aria-label="Rated 4.4 out of 5 stars">
        <span className="stamped-badge-starrating" aria-hidden="true">
          <i className="stamped-fa fas fa-star"></i>
          <i className="stamped-fa fas fa-star"></i>
          <i className="stamped-fa fas fa-star"></i>
          <i className="stamped-fa fas fa-star"></i>
          <i className="stamped-fa fas fa-star-half-alt"></i>
        </span>
        <span
          data-reviews="10"
          data-rating="4.4"
          data-label="reviews"
          aria-label="10 reviews"
          data-version="2"
        >
          10 <span> reviews</span>
        </span>
      </span>
    </span>
  </Container>
)

export default ReviewIcon
