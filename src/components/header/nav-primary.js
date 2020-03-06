import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import MegaMenu from "./mega-menu"

import Container from "../../css/nav-primary"

import UIContext from "../../context/ui-context"

const NavPrimary = () => {
  const { megaMenuOpen, toggleMegaMenu } = useContext(UIContext)

  return (
    <Container className="nav-primary" aria-label="Departments and Categories">
      <ul className="top-level">
        <li className="nav-item feature-link first has-dropdown">
          <a
            href="/collections/all-mens"
            aria-label="All Men's"
            onMouseEnter={() => {
              if (megaMenuOpen) {
                return
              }
              toggleMegaMenu(true)
            }}
          >
            <span>
              <u>Shop</u>
            </span>
          </a>
          <MegaMenu />
        </li>
        <li className="nav-item feature-link">
          <a href="/collections/workshop" aria-label="">
            <span>
              <u>Workshop</u>
            </span>
          </a>
        </li>
        <li className="nav-item feature-link">
          <a href="/collections/mens-last-call" aria-label="Last Call">
            <span>
              <u>Last Call</u>
            </span>
          </a>
        </li>
        <li className="nav-item feature-link">
          <a href="https://restitch.taylorstitch.com/" aria-label="">
            <span>
              <u>Restitch</u>
            </span>
          </a>
        </li>
      </ul>
    </Container>
  )
}

export default NavPrimary
