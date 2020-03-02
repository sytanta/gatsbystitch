import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Images from "../components/product/images"
import Options from "../components/product/options"
import Description from "../components/product/description"
import Reviews from "../components/product/reviews"
import Editorial from "../components/product/editorial"
import Recommendation from "../components/product/recommendation"
import ModalRepair from "../components/product/modal-repair"
import ModalShipping from "../components/product/modal-shipping"
import ModalSize from "../components/product/modal-size"

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
