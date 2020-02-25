import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Slider from "../components/home/slider"
import Content from "../components/home/content"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <Content />
  </Layout>
)

export default IndexPage
