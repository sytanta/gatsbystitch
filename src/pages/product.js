import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../components/product/images"
import Options from "../components/product/options"
import Description from "../components/product/description"
import Reviews from "../components/product/reviews"
import Editorial from "../components/product/editorial"
import Recommendation from "../components/product/recommendation"

const ProductPage = () => (
  <Layout headerClass="opaque" mainClass="top-0 template-product">
    <SEO title="Product detail" />
    <Images />
    <Options />
    <Description />
    <Reviews />
    <Editorial />
    <Recommendation />
  </Layout>
)

export default ProductPage
