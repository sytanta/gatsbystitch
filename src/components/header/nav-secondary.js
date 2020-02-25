import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "../../css/nav-secondary"

class NavSecondary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: "",
      searchFormVisible: false,
      inputNone: true,
    }

    this.inputElm = React.createRef()
  }

  componentDidMount() {
    this.inputElm.current.addEventListener("animationend", () => {
      if (this.state.searchFormVisible && !this.state.inputNone) {
        // If form is displayed and input has full width, focus on the input
        this.inputElm.current.focus()
      } else if (this.state.inputNone) {
        // If input is shrunk to 0, hide form
        this.setState({
          searchFormVisible: false,
        })
      }
    })
  }

  updateSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  toggleForm = e => {
    if (this.state.searchTerm) {
    } else {
      this.setState(state => {
        if (state.searchFormVisible) {
          // Animate input's length to 0
          return {
            inputNone: true,
          }
        } else {
          // Display form
          return {
            searchFormVisible: true,
            inputNone: false,
          }
        }
      })
    }
  }

  search = e => {
    e.preventDefault()
    this.toggleForm()
  }

  render() {
    let formClass = ""
    if (this.state.searchFormVisible) {
      formClass = "display"
    } else if (this.state.searchFormNone) {
      formClass = "hidden"
    }

    return (
      <Container className="nav-secondary" aria-label="Information and Account">
        <ul>
          <li className="nav-item feature-link">
            <Link
              to="/pages/about-us"
              className="nav-about"
              aria-label="About Us"
            >
              <span>
                <u>About</u>
              </span>
            </Link>
          </li>
          <li className="nav-item feature-link">
            <Link
              to="/help"
              className="nav-support"
              aria-label="Customer Service"
            >
              <span>
                <u>Help</u>
              </span>
            </Link>
          </li>
          <li className="nav-item utility-link utility-icon home-icon">
            <div
              className="open-right-drawer"
              data-section-to-show="#right-drawer-account"
              title="Cart"
              aria-label="Your Account"
            >
              <svg
                className="icon icon-nav-home"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 381 400"
                id="icon-nav-home"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M190.48 0L0 142.86V400h128.57V266.7h123.81V400H381V142.86z"
                ></path>
              </svg>
            </div>
          </li>
          <li className="nav-item utility-link utility-icon cart-icon hidden">
            <Link
              to="/cart"
              className="open-right-drawer"
              data-section-to-show="#right-drawer-cart"
              title="Cart"
              aria-label="Your Shopping Cart"
            >
              <svg
                className="icon icon-nav-cart"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                {/* <use xlink:href="#icon-nav-cart"></use> */}
              </svg>
            </Link>
          </li>
          <li className="nav-item utility-link utility-icon search">
            <div
              title="Search"
              aria-label="Search Our Products"
              className={this.state.searchFormVisible ? "hidden" : ""}
              onClick={this.toggleForm}
            >
              <svg
                className="icon icon-nav-search"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 414.94 401.17"
                id="icon-nav-search"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M163.54 44.41a119.1 119.1 0 0197.93 186.94l-12.35 17.78-17.79 12.34a119.12 119.12 0 11-67.8-217.07m0-44.41a163.54 163.54 0 1093.12 298l98.72 98.72a11.36 11.36 0 0016.07 0l25.22-25.22a11.36 11.36 0 000-16.07l-98.72-98.72A163.51 163.51 0 00163.54 0z"
                ></path>
              </svg>
            </div>
            <form
              method="get"
              role="search"
              className={this.state.searchFormVisible ? "display" : ""}
              onSubmit={this.search}
            >
              <button type="submit" name="Submit Query">
                <svg
                  className="icon icon-nav-search"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 414.94 401.17"
                  id="icon-nav-search-form"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M163.54 44.41a119.1 119.1 0 0197.93 186.94l-12.35 17.78-17.79 12.34a119.12 119.12 0 11-67.8-217.07m0-44.41a163.54 163.54 0 1093.12 298l98.72 98.72a11.36 11.36 0 0016.07 0l25.22-25.22a11.36 11.36 0 000-16.07l-98.72-98.72A163.51 163.51 0 00163.54 0z"
                  ></path>
                </svg>
              </button>
              <label htmlFor="search-box" className="hidden">
                Search
              </label>
              <input
                ref={this.inputElm}
                id="search-box"
                type="text"
                name="search"
                className={this.state.inputNone ? "hide" : "show"}
                value={this.state.searchTerm}
                onChange={this.updateSearchTerm}
              />
            </form>
          </li>
        </ul>
      </Container>
    )
  }
}

export default NavSecondary
