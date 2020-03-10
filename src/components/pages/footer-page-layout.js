import React from "react"

import Banner from "./footer-page-banner"

import Container from "../../css/footer-page-container"

const PageLayout = ({ templateClass, children }) => (
  <Container className={templateClass}>
    <Banner />
    <section className="container">
      <div className="rte">{children}</div>
    </section>
  </Container>
)

export default PageLayout
