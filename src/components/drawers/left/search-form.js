import React from "react"
import styled from "styled-components"

const Container = styled.form`
  height: 43px;
  overflow: hidden;
  position: relative;

  input {
    border: 0 none;
    display: block;
    font-size: 12px;
    padding: 15.5px 25px;
    text-align: left;
  }

  button {
    background: transparent;
    border: 0 none;
    height: 12px;
    padding: 0;
    position: absolute;
    right: 25px;
    top: 15.5px;
    width: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`

const SearchForm = () => (
  <Container>
    <label htmlFor="search-mobile" className="hidden">
      Search
    </label>
    <input id="search-mobile" type="text" name="q" placeholder="Search" />
    <button type="submit" title="Search">
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
    </button>
  </Container>
)

export default SearchForm
