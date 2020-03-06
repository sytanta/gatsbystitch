import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "../../css/mega-menu/categories"

const MMCategories = ({ activeCategory, setCategory }) => (
  <Container>
    <h2 className="anw normal-700">Categories</h2>
    <ul>
      <li>
        <Link
          to="/collections/mens-shirts"
          rel="collection-thumbs"
          className={activeCategory === "shirt" ? "item-active" : ""}
          onMouseEnter={() => {
            setCategory("shirt")
          }}
        >
          Shirts
        </Link>
      </li>
      <li>
        <Link
          to="/collections/mens-knits"
          rel="collection-thumbs"
          className={activeCategory === "knit" ? "item-active" : ""}
          onMouseEnter={() => {
            setCategory("knit")
          }}
        >
          Knits
        </Link>
      </li>
      <li>
        <Link
          to="/collections/mens-bottoms"
          rel="collection-thumbs"
          className={activeCategory === "bottom" ? "item-active" : ""}
          onMouseEnter={() => {
            setCategory("bottom")
          }}
        >
          Bottoms
        </Link>
      </li>
      <li>
        <Link
          to="/collections/mens-denim"
          rel="collection-thumbs"
          className={activeCategory === "denim" ? "item-active" : ""}
          onMouseEnter={() => {
            setCategory("denim")
          }}
        >
          Denim
        </Link>
      </li>
      <li>
        <Link
          to="/collections/mens-outerwear"
          rel="collection-thumbs"
          className={activeCategory === "outerwear" ? "item-active" : ""}
          onMouseEnter={() => {
            setCategory("outerwear")
          }}
        >
          Outerwear
        </Link>
      </li>
      <li>
        <Link
          to="/collections/mens-footwear"
          rel="collection-thumbs"
          className={activeCategory === "footwear" ? "item-active" : ""}
          onMouseEnter={() => {
            setCategory("footwear")
          }}
        >
          Footwear
        </Link>
      </li>
      <li>
        <Link
          to="/collections/the-essentials"
          rel="collection-thumbs"
          className={activeCategory === "essential" ? "item-active" : ""}
          onMouseEnter={() => {
            setCategory("essential")
          }}
        >
          Essentials
        </Link>
      </li>
      <li>
        <Link
          to="/collections/mens-accessories"
          rel="collection-thumbs"
          className={activeCategory === "accessory" ? "item-active" : ""}
          onMouseEnter={() => {
            setCategory("accessory")
          }}
        >
          Accessories
        </Link>
      </li>
    </ul>
  </Container>
)

export default MMCategories
