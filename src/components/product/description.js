import React from "react"
import styled from "styled-components"

import { getElmComputedStyle, toggleClassName } from "../../utils/dom"

import { breakpoints } from "../../theme"

const Container = styled.section`
  background: #fafafa;
  clear: both;
  float: right;
  max-width: none;
  padding: 1em 0;
  position: relative;
  text-align: left;
  width: 100%;

  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 1350px;
    padding: 0 45px 2.75em;
    text-align: left;

    & > div {
      padding-right: 4rem;
      width: 32.44444%;
    }
  }

  h2 {
    color: #363636;
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.14em;
    line-height: 1.22034;
    margin-top: 5em;
    margin-bottom: 2.5em;
    margin-left: 0;
    margin-right: 0;
    position: relative;
    text-transform: uppercase;
    z-index: 2;
  }

  p {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.6;
    transition: opacity 0.3s linear, height 0.1s linear;
  }

  ul {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.6;
    margin-left: 1em;
    transition: opacity 0.3s linear, height 0.1s linear;
  }

  li {
    list-style: disc outside;
  }

  .fabric-weight {
    p {
      width: 74.66667%;
    }

    ul {
      border-top: 1px solid #363636;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      margin-left: 0;
      margin-top: 4.5rem;
      width: 80%;
    }

    li {
      color: #c2c2c2;
      flex: 0 1 0;
      font-size: 1.4rem;
      list-style: none;
      padding-top: 1em;
      position: relative;
      text-align: center;

      &.range {
        color: #363636;
      }

      ::before {
        background: #363636;
        border-radius: 50%;
        content: "";
        display: block;
        height: 7px;
        left: 50%;
        position: absolute;
        top: 0;
        transform: translate(-4px, -4px);
        width: 7px;
      }

      &.current::before {
        background: #b5aa8f;
        height: 17px;
        transform: translate(-9px, -9px);
        width: 17px;
      }

      :first-of-type {
        text-align: left;

        ::before {
          left: 0;
        }
      }

      :first-of-type::before,
      :last-of-type::before {
        height: 9px;
        width: 9px;
        transform: translateY(-5px);
      }

      :last-of-type::before {
        left: auto;
        right: 0;
      }
    }
  }

  @media (max-width: ${breakpoints.phablet}px) {
    .container {
      display: block;

      & > div {
        padding-right: 0;
        width: 100%;
      }
    }

    h2 {
      cursor: pointer;
      margin-top: 2em;

      ::after {
        content: "+";
        cursor: pointer;
        font-family: "AN", Avenir, "HelveticaNeue-Light", "Helvetica Neue Light",
          "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0.08em;
        line-height: 1rem;
        position: absolute;
        right: 0;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        width: 1em;
        z-index: 1;
      }

      & + .collapsible {
        height: 0;
        opacity: 0;
      }

      &.open {
        ::after {
          content: "-";
        }
      }
      &.open + .collapsible {
        height: auto;
        opacity: 1;
        overflow: hidden;
      }
    }

    .fabric-weight {
      p,
      ul {
        width: 100%;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    padding: 1em;

    .container {
      padding: 0 0 2.75em;
      text-align: left;
    }

    .container > div {
      padding-right: 2rem;
    }
  }
`

const Description = () => {
  const toggleContent = e => {
    const target = e.target
    const elementClickable =
      getElmComputedStyle(target, ":after", "cursor") === "pointer"

    if (elementClickable) {
      toggleClassName(target, "open")
    }
  }

  return (
    <Container>
      <div className="container">
        <div className="details">
          <h2 onClick={toggleContent}>Description</h2>
          <div className="collapsible">
            <p>
              It’s impossible not to make a strong impression with The Western
              Shirt. Vintage-inspired details like angled chest pockets and
              contrast YKK snaps may summon images of smouldering sunsets over
              dusty trails, but thanks to its sophisticated cut and exquisite
              blend of cotton and linen selvage denim, this shirt feels just as
              at home in the big city as it is out on the range.
            </p>
          </div>
          <h2 onClick={toggleContent}>Material</h2>
          <div className="collapsible">
            <p>
              A light washed, mid-weight selvedge denim with a bronze ticker
              (you can see it on the side-seam gusset detail and inside
              placket). The denim is a linen-cotton blend that’s been stone
              washed, softening up the fibers without compromising the structure
              of the thread. The result is a miraculously soft, breathable denim
              that might find its way into your regular button-up rotation.
            </p>
          </div>
          <div className="fabric-weight">
            <h2 onClick={toggleContent}>Garment Weight</h2>
            <div className="collapsible">
              <p>Your daily driver. Burlier than the average button&nbsp;up.</p>
              <ul className="fabric-weight-indicator">
                <li>
                  <span>
                    <span>Light</span>
                  </span>
                </li>
                <li className="range">
                  <span>
                    <span className="hidden">Light-medium</span>
                  </span>
                </li>
                <li className="range current" aria-current="true">
                  <strong>
                    <span>Medium</span>
                  </strong>
                </li>
                <li className="range">
                  <span>
                    <span className="hidden">Medium-heavy</span>
                  </span>
                </li>
                <li>
                  <span>
                    <span>Heavy</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="specs">
          <h2 onClick={toggleContent}>Specifications</h2>
          <div className="collapsible">
            <ul>
              <li>10-oz. 62% Cotton, 38% Linen selvage denim.</li>
              <li>Heavily washed for a lived in feel.</li>
              <li>
                Selvage detailing on inside front placket, inside of cuffs and
                side gussets.
              </li>
              <li>
                Two slanted snap chest pockets, inspired by our favorite vintage
                western shirts.
              </li>
              <li>Western-style front and back yokes.</li>
              <li>Double snap cuffs.</li>
              <li>
                Bar-tack reinforcement on top of the pocket flap, top pocket
                corners, and side gusset.
              </li>
              <li>Genuine YKK western snaps with an antique brass setting.</li>
              <li>Double-needle felled seams throughout.</li>
              <li>Contrast stitching.</li>
              <li>Tailored fit and high armhole.</li>
              <li>Perfect length to tuck or untuck.</li>
              <li>No pleats for easy ironing and clean lines.</li>
              <li>Wash cold and tumble dry low.</li>
              <li>Made in China.</li>
            </ul>
          </div>
        </div>
        <div className="selling-point">
          <h2 onClick={toggleContent}>Limited</h2>
          <div className="collapsible">
            <p>
              This product is part of a small batch manufacturing run that may
              use exclusive materials like dead stock fabrics. The product is
              limited in quantity and may never be in stock again. Limited
              products are available for immediate shipping.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Description
