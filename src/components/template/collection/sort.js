import React from "react"
import styled from "styled-components"

import caretDown from "../../../assets/caret-down.svg"

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  letter-spacing: 0.08em;
  margin: -24px 0 0;
  position: relative;
  text-align: left;
  text-transform: uppercase;
  width: 100%;
  z-index: 1;

  .select-wrapper:last-of-type {
    margin-left: 40px;
  }

  .select-wrapper > * {
    float: left;
  }

  .custom-select {
    border: 0 none;
    font-size: 0.8rem;
    letter-spacing: 0.14em;
    margin: 0;
    position: relative;
    width: 125px;

    .selected-value,
    dd {
      border: 0 none;
      box-shadow: none;
      color: #363636;
      line-height: 28px;
      padding: 1px 10px;
    }

    .select-value-wrap {
      cursor: pointer;
    }

    .caret {
      border: 0 none;
      background: url(${caretDown}) no-repeat;
      background-size: 100%;
      display: block;
      height: 6px;
      position: absolute;
      right: 13px;
      top: 13px;
      width: 10px;
    }

    dl {
      background: #fff;
      padding: 0;
      width: 100% !important;
    }

    dd {
      cursor: pointer;
      margin: 0;
      padding-left: 10px;

      :hover {
        color: #fff;
        background: #999;
      }
    }

    .selected {
      background: #2f3e4b;
      color: #ffffff;
      text-decoration: none;
    }
  }

  .select-list {
    background-clip: padding-box;
    background-color: #ffffff;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
    left: -999em;
    list-style: none;
    margin-bottom: 0;
    margin-top: -1px;
    padding: 0;
    position: absolute;
    top: -999em;
    width: 125px;
    z-index: 100;
  }

  .custom-select.open .select-list {
    left: 0 !important;
    top: auto !important;
  }
`

class Sort extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: "All Sizes",
      filterOpen: false,
      sort: "Sort by",
      sortOpen: false,
    }
  }

  toggleFilter = () => {
    this.setState(state => ({
      sortOpen: false,
      filterOpen: !state.filterOpen,
    }))
  }
  setFilter = e => {
    this.setState({ filter: e.target.textContent, filterOpen: false })
  }

  toggleSort = () => {
    this.setState(state => ({
      sortOpen: !state.sortOpen,
      filterOpen: false,
    }))
  }
  setSort = e => {
    this.setState({ sort: e.target.textContent, sortOpen: false })
  }

  filterValues = [
    { value: "All Sizes", caption: "All Sizes" },
    { value: "XS - 36", caption: "XS - 36" },
    { value: "S - 38", caption: "S - 38" },
    { value: "M - 40", caption: "M - 40" },
    { value: "L - 42", caption: "L - 42" },
    { value: "XL - 44", caption: "XL - 44" },
    { value: "XXL - 46", caption: "XXL - 46" },
  ]

  sortValues = [
    { value: "manual", caption: "Featured" },
    { value: "best-selling", caption: "Best Selling" },
    { value: "price-ascending", caption: "Price: $–$$$" },
    { value: "price-descending", caption: "Price: $$$–$" },
    { value: "title-ascending", caption: "Name: A–Z" },
    { value: "title-descending", caption: "Name: Z–A" },
    { value: "total-reviews-descending", caption: "Most reviews" },
  ]

  render() {
    return (
      <Container className="anw normal-400">
        <div className="select-wrapper">
          <div
            className={`custom-select anw normal-700 ${
              this.state.filterOpen ? "open" : ""
            }`}
            style={{ zIndex: 100 }}
          >
            <div className="select-value-wrap" onClick={this.toggleFilter}>
              <div className="selected-value">{this.state.filter}</div>
              <span className="caret"></span>
            </div>
            <div className="select-list">
              <div className="select-list-outer-wrap">
                <div className="select-list-inner-wrap">
                  <div className="select-list-top"></div>
                  <dl style={{ height: "auto", overflow: "hidden" }}>
                    {this.filterValues.map(filter => (
                      <dd
                        key={filter.value}
                        className={
                          filter.value === this.state.filter ? "selected" : ""
                        }
                        onClick={this.setFilter}
                      >
                        {filter.caption}
                      </dd>
                    ))}
                  </dl>
                  <div className="select-list-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="select-wrapper">
          <div
            className={`custom-select anw normal-700 ${
              this.state.sortOpen ? "open" : ""
            }`}
            style={{ zIndex: 100 }}
          >
            <div className="select-value-wrap" onClick={this.toggleSort}>
              <div className="selected-value">{this.state.sort}</div>
              <span className="caret"></span>
            </div>
            <div className="select-list">
              <div className="select-list-outer-wrap">
                <div className="select-list-inner-wrap">
                  <div className="select-list-top"></div>
                  <dl style={{ height: "auto", overflow: "hidden" }}>
                    {this.sortValues.map(sort => (
                      <dd
                        key={sort.caption}
                        className={
                          sort.caption === this.state.sort ? "selected" : ""
                        }
                        onClick={this.setSort}
                      >
                        {sort.caption}
                      </dd>
                    ))}
                  </dl>
                  <div className="select-list-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Sort
