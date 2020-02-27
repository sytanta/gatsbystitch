import React, { useContext, useState } from "react"
import styled from "styled-components"

import UIContext from "../../../context/ui-context"

import Messages from "./messages"
import Account from "./account"
import Cart from "./cart"

const Container = styled.div`
  background: #fff;
  padding-bottom: 0;
  padding-top: 64px;
  right: 0;

  .drawer-control {
    align-items: center;
    background: #fff;
    display: flex;
    flex-flow: row nowrap;
    height: 64px;
    justify-content: flex-start;
    padding: 7px 25px;
    position: fixed;
    right: 0;
    text-transform: uppercase;
    top: 0;
    width: 320px;
    z-index: 2;

    li {
      align-self: center;
      cursor: pointer;
      font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
        "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
        "Lucida Grande", sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0.14em;
      padding: 0 1.25em;
      text-align: center;

      &.active,
      &:hover {
        color: #f05d5d;
      }

      &.snap-close {
        height: 60px;
        margin-left: -24px;
        margin-right: 0;
        padding: 0;
        width: 60px;

        i {
          display: inline-block;
          height: 100%;
          width: 12px;
        }
      }
    }
  }

  .drawer-control + div {
    position: relative;
    z-index: 1;
  }
`

const DrawerRight = ({ className }) => {
  const { drawerLeftOpen, toggleDrawerRight } = useContext(UIContext)
  const [tab, setTab] = useState("messages")

  const toggleTab = tab => {
    setTab(tab)
  }

  return (
    <Container className={`drawer ${drawerLeftOpen ? "hidden" : ""}`}>
      <ul className="drawer-control">
        <li className="snap-close" onClick={toggleDrawerRight}>
          <i>
            <svg
              className="icon icon-ui-close"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              className="icon"
              viewBox="0 0 400 400"
              id="icon-ui-close"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M400 356.88L243.1 199.99 399.97 43.12 356.88.03 200.01 156.9 43.12 0 .03 43.09l156.9 156.9L0 356.91 43.09 400l156.92-156.93 156.9 156.9L400 356.88z"
              ></path>
            </svg>
          </i>
        </li>
        <li
          className={tab === "messages" ? "active" : ""}
          onClick={() => toggleTab("messages")}
        >
          Messages
        </li>
        <li
          className={tab === "account" ? "active" : ""}
          onClick={() => toggleTab("account")}
        >
          Account
        </li>
        <li
          className={tab === "cart" ? "active" : ""}
          onClick={() => toggleTab("cart")}
        >
          Cart
        </li>
      </ul>
      <div className="section-to-show-wrappers">
        {tab === "messages" ? (
          <Messages />
        ) : tab === "account" ? (
          <Account />
        ) : tab === "cart" ? (
          <Cart />
        ) : (
          ""
        )}
      </div>
      <div className="drawer-loader hidden"></div>
    </Container>
  )
}

export default DrawerRight
