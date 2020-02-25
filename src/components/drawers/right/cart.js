import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  .container {
    padding-left: 25px;
    padding-right: 25px;
  }

  .mini-cart__title {
    font-size: 1.6rem;
    line-height: 2rem;
    margin-top: 2.5rem;
    text-align: left;
  }

  .component-cart__empty {
    font-family: "ANW", "Avenir Next", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    margin-bottom: 2em;
    font-size: 1.8rem;
    text-align: left;

    a {
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`

const Cart = ({ node: message }) => (
  <Container id="right-drawer-cart" className="mini-cart">
    <div className="container">
      <h2 className="mini-cart__title">Your Shopping Cart</h2>
    </div>
    <div className="cart-main-wrapper">
      <div className="component-cart__container container">
        <p id="empty" className="component-cart__empty">
          Your shopping bag is currently empty. If you're looking for somewhere
          to start, explore our collection of closet Essentials. You can't go
          wrong.
        </p>
        <p className="component-cart__empty">
          <a href="/collections/the-essentials">Shop The Essentials</a>
        </p>
      </div>
    </div>
    <div className="mini-cart-loader"></div>
  </Container>
)

export default Cart
