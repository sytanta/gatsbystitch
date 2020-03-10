import React from "react"
import { Link } from "gatsby"
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
              <Link to="/collections/mens-shirts">Shirts</Link>
            </li>
            <li>
              <Link to="/collections/mens-knits">Knits</Link>
            </li>
            <li>
              <Link to="/collections/mens-bottoms">Bottoms</Link>
            </li>
            <li>
              <Link to="/collections/mens-denim">Denim</Link>
            </li>
            <li>
              <Link to="/collections/mens-outerwear">Outerwear</Link>
            </li>
            <li>
              <Link to="/collections/mens-footwear">Footwear</Link>
            </li>
            <li>
              <Link to="/collections/the-essentials">Essentials</Link>
            </li>
            <li>
              <Link to="/collections/mens-accessories">Accessories</Link>
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
              <Link to="/collections/workshop#active-projects-tab">
                Active Workshop
              </Link>
            </li>
            <li>
              <Link to="/collections/workshop#in-production-tab">
                In Production
              </Link>
            </li>
            <li>
              <Link to="/collections/workshop#faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </li>
      <li className={menuItemClassName}>
        <Link to="/collections/mens-last-call">Last Call</Link>
      </li>
      <li className={menuItemClassName}>
        <Link to="">Restitch</Link>
      </li>
      <li className={menuItemClassName}>
        <Link to="/pages/the-commons">The Common Club</Link>
      </li>
    </Container>
  )
}

Menu.propTypes = {
  ui: PropTypes.object.isRequired,
  openMenu: PropTypes.func.isRequired,
}

export default Menu
