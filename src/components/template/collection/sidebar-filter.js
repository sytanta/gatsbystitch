import React from "react"
import styled from "styled-components"

const Container = styled.div`
  h3 {
    font-size: 0.9rem;
    letter-spacing: 0.14em;
    margin: 1.6em 0 0;
    white-space: nowrap;
  }

  ul {
    font-size: 1rem;
    line-height: 1.6em;
    padding: 0.5em 0 0;

    li {
      width: 12em;
    }
  }
`

const SidebarFilter = () => (
  <Container>
    <h3 className="anw normal-700">Filter by</h3>
    <ul>
      <li id="new-arrivals-filter" className="dynamic-filter category-filter">
        <a href="/collections/mens-new-arrivals?collectionHandle=mens-shirts">
          New arrivals
        </a>
      </li>
      <li id="best-sellers-filter" className="dynamic-filter category-filter">
        <a href="/collections/mens-best-sellers?collectionHandle=mens-shirts">
          Best sellers
        </a>
      </li>
      <li id="in-stock-filter" className="dynamic-filter category-filter">
        <a href="/collections/mens-in-stock?collectionHandle=mens-shirts">
          In stock
        </a>
      </li>
      <li id="workshop-filter" className="dynamic-filter hidden">
        <a href="/collections/">Workshop</a>
      </li>
    </ul>
  </Container>
)

export default SidebarFilter
