import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.ul`
  margin-bottom: auto;

  span,
  a {
    cursor: pointer;
    font-family: "CD", Georgia, Times, "Times New Roman", serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0;

    i {
      display: inline-block;
      height: 9px;
      line-height: 0;
      margin-left: 0.25em;
      width: 5px;
      transform: rotate(-90deg);
      vertical-align: middle;
    }
  }

  .accordion-submenu {
    display: none;

    h2 {
      font-size: 1.8rem;
      line-height: 1.33333em;
      margin: 25px;
    }

    ul {
      padding: 25px 0;

      li {
        padding-bottom: 1.2rem;
        padding-top: 1.2rem;
      }

      &.two-column {
        columns: 2;

        li {
          display: inline-block;
        }
      }
    }

    a {
      font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
        "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
        "Lucida Grande", sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }
  }

  .open {
    .accordion-header i {
      transform: rotate(90deg);
    }

    .accordion-submenu {
      display: block;
    }
  }
`

const Menu = ({ ui, openMenu }) => {
  const menuItemClassName = ui.shop || ui.workshop ? "hidden" : ""
  const shopItemClassName = ui.workshop ? "hidden" : ui.shop ? "open" : ""
  const workshopItemClassName = ui.shop ? "hidden" : ui.workshop ? "open" : ""

  return (
    <Container className="menu-categories">
      <li className={shopItemClassName}>
        <span
          className="accordion-header"
          onClick={() => {
            openMenu("shop")
          }}
        >
          Shop{` `}
          <i>
            <svg
              className="icon icon-ui-caret"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 230.17 399.98"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M230.17 370l-30 30-170-170-.14.16-30-30 .13-.16-.16-.14 30-30 .14.16 170-170 30 30-170 170z"
              ></path>
            </svg>
          </i>
        </span>
        <div className="accordion-submenu">
          <ul className="two-column">
            <li>
              <a href="/collections/mens-shirts">Shirts</a>
            </li>
            <li>
              <a href="/collections/mens-knits">Knits</a>
            </li>
            <li>
              <a href="/collections/mens-bottoms">Bottoms</a>
            </li>
            <li>
              <a href="/collections/mens-denim">Denim</a>
            </li>
            <li>
              <a href="/collections/mens-outerwear">Outerwear</a>
            </li>
            <li>
              <a href="/collections/mens-footwear">Footwear</a>
            </li>
            <li>
              <a href="/collections/the-essentials">Essentials</a>
            </li>
            <li>
              <a href="/collections/mens-accessories">Accessories</a>
            </li>
          </ul>
        </div>
      </li>
      <li className={workshopItemClassName}>
        <span
          className="accordion-header"
          onClick={() => {
            openMenu("workshop")
          }}
        >
          Workshop{` `}
          <i>
            <svg
              className="icon icon-ui-caret"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 230.17 399.98"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M230.17 370l-30 30-170-170-.14.16-30-30 .13-.16-.16-.14 30-30 .14.16 170-170 30 30-170 170z"
              ></path>
            </svg>
          </i>
        </span>
        <div className="accordion-submenu">
          <h2>
            We design new products. You crowd fund them and save 20%. Our planet
            takes on less waste. We deliver them when they’re seasonally
            appropriate. Everybody wins.
          </h2>
          <ul>
            <li>
              <a href="/collections/workshop#active-projects-tab">
                Active Workshop
              </a>
            </li>
            <li>
              <a href="/collections/workshop#in-production-tab">
                In Production
              </a>
            </li>
            <li>
              <a href="/collections/workshop#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </li>
      <li className={menuItemClassName}>
        <a href="/collections/mens-last-call">Last Call</a>
      </li>
      <li className={menuItemClassName}>
        <a href="https://restitch.taylorstitch.com/">Restitch</a>
      </li>
      <li className={menuItemClassName}>
        <a href="/pages/the-commons">The Common Club</a>
      </li>
    </Container>
  )
}

Menu.propTypes = {
  ui: PropTypes.object.isRequired,
  openMenu: PropTypes.func.isRequired,
}

export default Menu
