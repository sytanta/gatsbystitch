import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/template/collection/banner"
import Breadcrumb from "../components/template/collection/breadcrumb"
import Sidebar from "../components/template/collection/sidebar"
import Products from "../components/template/collection/products"

const ContentContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

const Collection = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <section className="content clearfix">
      <Breadcrumb />
      <ContentContainer>
        <Sidebar />
        <Products />
      </ContentContainer>
    </section>
  </Layout>
)

export default Collection
