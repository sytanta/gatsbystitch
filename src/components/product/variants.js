import React, { useState } from "react"
import styled from "styled-components"

import caretDown from "../../assets/caret-down.svg"

const Container = styled.form`
  fieldset {
    border: 0;
    clear: both;
    margin: 0;
    padding-top: 1rem;
    padding: 1rem 0 0;
    text-align: center;

    div {
      text-align: left;
    }

    .custom-select {
      font-size: 1rem;
      float: left;
      letter-spacing: 0.08em;
      margin-bottom: 1.75em;
      margin-right: 10px;
      position: relative;
      width: 100%;

      dl,
      dd {
        margin: 0;
      }

      select {
        display: none;
      }

      .selected {
        background: #2f3e4b;
        color: #ffffff;
        text-decoration: none;
      }

      .selected-value {
        border: 1px solid #adabac;
        padding: 5px 10px 5px 20px;
      }

      dd {
        padding: 2px 10px 2px 20px;

        :hover {
          background: #999;
          color: #fff;
        }
      }

      .selected-value,
      dd {
        background: #fff;
        border-radius: 0;
        color: #757374;
        cursor: pointer;
        line-height: 27px;
        overflow: hidden;

        span {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0);
          clear: right;
          display: none !important;
          float: left;
          height: 26px;
          line-height: inherit;
          margin-right: 10px;
          margin-top: 6px;
          position: relative;
          width: 26px;
        }
      }

      .selected-value {
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
          0 1px 2px rgba(0, 0, 0, 0.05);
        margin-bottom: 0;
        text-shadow: none;
      }

      .select-list {
        background-color: #ffffff;
        background-clip: padding-box;
        border: 1px solid #adabac;
        border-radius: 0;
        border-top-color: rgb(173, 171, 172);
        border-top: 0 none;
        box-shadow: none;
        left: -999em;
        margin: -1px 0 0;
        padding: 0;
        position: absolute;
        top: -999em;
        width: 100%;
        z-index: 100;

        &.open {
          left: 0;
          top: auto;
        }

        dl {
          background: #fff;
          padding: 0 0 10px;
          width: 100% !important;
        }

        dd {
          margin: 0;
        }
      }
    }
  }

  .select-value-wrap .caret {
    background: url(${caretDown}) no-repeat;
    background-size: auto;
    background-size: 100%;
    border: 0 none;
    cursor: pointer;
    display: block;
    height: 8px;
    position: absolute;
    right: 23px;
    top: 16px;
    width: 14px;
  }

  .awesome {
    padding: 1.3em 2em !important;
    width: 100%;

    :hover {
      background-color: #b5aa8f !important;
      color: #fff !important;
    }
  }
`

const Variants = () => {
  const [dropdownState, setDropdown] = useState({
    color: false,
    size: false,
  })

  const toggleDropdown = optionName => {
    if (!dropdownState.hasOwnProperty(optionName)) {
      return
    }

    const newState = {
      color: false,
      size: false,
    }

    setDropdown({
      ...newState,
      [optionName]: !dropdownState[optionName],
    })
  }

  return (
    <Container action="/cart/add" method="post" id="add-to-cart">
      <fieldset>
        <div>
          <div
            className="custom-select anw normal-400 uppercase"
            id="select-product-colors"
          >
            <select id="product-colors" name="color" data-collection="">
              <option
                className="natural-corded-denim"
                data-product-title="The Western Shirt in Natural Corded Denim"
                value="/products/the-western-shirt-in-natural-corded-denim"
              >
                Natural Corded Denim
              </option>
              <option
                className="indigo-crepe"
                data-product-title="The Western Shirt in Indigo Crepe"
                value="/products/the-western-shirt-in-indigo-crepe"
              >
                Indigo Crepe
              </option>
              <option
                className="indigo-stripe"
                data-product-title="The Western Shirt in Indigo Stripe"
                value="/products/the-western-shirt-in-indigo-stripe"
              >
                Indigo Stripe
              </option>
              <option
                className="washed-denim"
                data-product-title="The Western Shirt in Washed Denim"
                value="/products/the-western-in-washed-denim"
                selected="selected"
              >
                Washed Denim
              </option>
            </select>
            <div
              className="select-value-wrap"
              onClick={() => {
                toggleDropdown("color")
              }}
            >
              <div className="selected-value">
                <span className="washed-denim"></span>Washed Denim
              </div>{" "}
              <span className="caret"></span>
            </div>
            <div className={`select-list ${dropdownState.color ? "open" : ""}`}>
              <div className="selectListOuterWrap">
                <div className="selectListInnerWrap">
                  <div className="selectListTop"></div>
                  <dl>
                    <dd className="itm-0">
                      <span className="natural-corded-denim"></span>Natural
                      Corded Denim
                    </dd>
                    <dd className="itm-1">
                      <span className="indigo-crepe"></span>Indigo Crepe
                    </dd>
                    <dd className="itm-2">
                      <span className="indigo-stripe"></span>Indigo Stripe
                    </dd>
                    <dd className="itm-3 selected">
                      <span className="washed-denim"></span>Washed Denim
                    </dd>
                  </dl>
                  <div className="selectListBottom"></div>
                </div>
              </div>
            </div>
          </div>
          <select
            id="styled-select-hidden-1"
            name="id"
            data-size-pref-shirts="false"
            className="styled-select hidden"
          >
            <option value="28906746413133">XS - 36 | $125</option>
            <option value="28906746478669">S - 38 | $125</option>
            <option value="28906746544205">M - 40 | $125</option>
            <option value="28906746609741">L - 42 | $125</option>
            <option value="28906746675277">XL - 44 | $125</option>
            <option value="28906746740813">XXL - 46 | $125</option>
          </select>
          <div className="select-wrapper">
            <div
              className="custom-select anw normal-400 uppercase"
              id="select-single-option-select-0"
            >
              <select
                id="single-option-select-0"
                className="single-option-select select-boxed-hidden hidden"
                name="Size"
              >
                <option value="XS - 36" selected="selected">
                  XS - 36
                </option>
                <option value="S - 38">S - 38</option>
                <option value="M - 40">M - 40</option>
                <option value="L - 42">L - 42</option>
                <option value="XL - 44" className="strike-through-unavailable">
                  XL - 44
                </option>
                <option value="XXL - 46" className="strike-through-unavailable">
                  XXL - 46
                </option>
              </select>
              <div
                className="select-value-wrap"
                onClick={() => {
                  toggleDropdown("size")
                }}
              >
                <div className="selected-value">XS - 36</div>{" "}
                <span className="caret"></span>{" "}
              </div>
              <div
                className={`select-list ${dropdownState.size ? "open" : ""}`}
              >
                <div className="selectListOuterWrap">
                  <div className="selectListInnerWrap">
                    <div className="selectListTop"></div>
                    <dl style={{ height: "auto", overflow: "hidden" }}>
                      <dd className="itm-0">XS - 36</dd>
                      <dd className="itm-1">S - 38</dd>
                      <dd className="itm-2">M - 40</dd>
                      <dd className="itm-3">L - 42</dd>
                      <dd className="itm-4">
                        <span className="strike-through-unavailable"></span>XL -
                        44
                      </dd>
                      <dd className="itm-5">
                        <span className="strike-through-unavailable"></span>XXL
                        - 46
                      </dd>
                    </dl>
                    <div className="selectListBottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <input
        type="submit"
        value="Add to cart"
        className="awesome anw"
        data-originalvalue="Add to cart"
      />
    </Container>
  )
}

export default Variants
