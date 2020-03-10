import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SocialProof from "../../components/pages/about-us-social-proof"

import applyOnScrollClass from "../../utils/aos"
import { breakpoints, isHeaderMobile } from "../../theme"

const Container = styled.div`
  .banner {
    background: #0f2130;
    display: block;
    max-height: calc(100vh - 50px);
    overflow: hidden;
    position: relative;

    :after {
      content: "";
      display: block;
      height: 0;
      padding-bottom: 177.5%;
      width: 100%;
    }

    .background-video {
      display: block;
      height: 100%;

      video {
        height: calc(100% + 1px);
        left: 50%;
        object-fit: cover;
        object-position: 50% 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 1px);
        z-index: 1;
      }
    }

    .heading {
      align-items: center;
      bottom: 0;
      color: #fff;
      display: flex;
      font-size: 26px;
      justify-content: center;
      left: 0;
      margin: 0;
      z-index: 2;
      padding: 51px 12px 0;
      position: absolute;
      right: 0;
      text-align: left;
      top: 0;

      span {
        background-image: url("https://cdn.shopify.com/s/files/1/0070/1922/t/12/assets/logo-about.svg?v=12454980111382694198");
        background-repeat: no-repeat;
        background-size: 100%;
        display: block;
        max-width: 100vh;
        overflow: hidden;
        position: relative;
        width: 57.77778%;
        text-align: left;
        text-indent: -999em;

        :after {
          content: "";
          display: block;
          height: 0;
          padding-bottom: 34.6%;
          width: 100%;
        }
      }
    }
  }

  h2 {
    font-family: "CD", Georgia, Times, "Times New Roman", serif;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0;
  }

  h2,
  .figcaption .heading,
  figcaption .heading {
    font-size: 44px;
    line-height: 54px;
  }

  h2,
  .figcaption .heading,
  figcaption .heading,
  h3,
  .h3 {
    margin-bottom: 0;
    margin-top: 0;
  }

  h3,
  .h3 {
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.14em;
    line-height: 1;
    text-transform: uppercase;
  }

  p,
  address {
    line-height: 34px;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 2em;
    margin-top: 2em;
  }

  a {
    text-decoration: none;

    :hover {
      color: #363636;
    }
  }

  .aos-appear {
    opacity: 1;
    transform: translate(0, 0);
  }

  .feature-link a:hover u::after {
    background: #0f2130;
  }

  figure > a {
    display: block;
  }

  figcaption {
    margin-bottom: 54px;
    margin-top: 54px;
  }

  p,
  figure,
  address {
    text-align: left;
  }

  .about-intro p {
    font-size: 22px;
    margin-bottom: 4em;
    margin-top: 4em;
  }

  .about-intro,
  .about-outro {
    margin-bottom: 204px;
    margin-top: 204px;

    p {
      grid-column: 4 / 10;
      text-align: center;
    }
  }

  .about-outro p {
    font-size: 22px;
    grid-column: 5 / 9;
    line-height: 1.6;
    margin-bottom: 2em;
    margin-top: 6em;
  }

  .about-intro,
  .about-outro,
  .about-panel,
  .about-locations {
    display: grid;
    grid-gap: 18px;
    grid-template-columns: repeat(12, 1fr);
    margin-left: auto;
    margin-right: auto;
    padding-left: 45px;
    padding-right: 45px;
    max-width: 1350px;
  }

  .about-panel:not(:last-of-type) {
    margin-bottom: 18.2rem;
  }

  .about-panel > a {
    grid-column: 1 / 7;
  }

  .about-panel > a,
  .about-panel figcaption {
    grid-row: 1 / 2;
  }

  .about-panel figcaption {
    align-self: center;
    grid-column: 8 / 13;
    margin-left: 0;
    margin-right: 0;
  }

  .about-video {
    margin-bottom: 182px;
  }

  .about-products {
    max-width: none;
    padding-left: 0;

    & > a {
      grid-column: 1 / 8;
    }

    figcaption {
      grid-column: 8 / 13;
    }
  }

  .about-factories {
    & > a {
      grid-column: 7 / 13;
    }

    figcaption {
      grid-column: 1 / 6;
    }
  }

  .about-locations {
    margin-bottom: 10.4rem;

    figure {
      :nth-of-type(1) {
        grid-column: 1 / 5;
        padding-right: 10%;
      }
      :nth-of-type(2) {
        grid-column: 5 / 9;
        overflow: hidden;
        padding-left: 5%;
        padding-right: 5%;
      }
      :nth-of-type(3) {
        grid-column: 9 / 13;
        padding-left: 10%;
      }

      :nth-of-type(2) > a {
        margin-top: -10rem;
      }
    }

    figcaption {
      margin-left: 0;
      margin-right: 0;
      text-align: center;

      address {
        font-size: 1.8rem;
        font-style: normal;
        margin-top: 1em;
        text-align: center;

        span[itemprop="streetAddress"] {
          display: block;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    .about-intro,
    .about-outro,
    .about-panel,
    .about-locations {
      display: block;
      padding-left: 0;
      padding-right: 0;
    }

    .about-intro,
    .about-outro {
      margin: 0 25px;

      p {
        text-align: left;
      }
    }

    .container {
      padding: 0 12px;
    }

    .about-panel figcaption {
      margin-left: 25px;
      margin-right: 25px;
    }

    .about-panel:not(:last-of-type) {
      margin-bottom: 0;
    }

    .about-locations {
      margin-bottom: 0;

      figure {
        :nth-of-type(1) {
          padding-right: 0;
        }
        :nth-of-type(2) {
          padding-left: 0;
          padding-right: 0;
        }
        :nth-of-type(3) {
          padding-left: 0;
        }

        :nth-of-type(2) > a {
          margin-top: 0;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.phablet}px) {
    h2,
    .figcaption .heading {
      font-size: calc(5vw + 14px);
      line-height: calc(6.42857vw + 15.42857px);
    }

    .about-intro p {
      font-size: calc(2.14286vw + 9.14286px);
    }

    .about-outro p {
      font-size: calc(0.71429vw + 17.71429px);
    }

    .about-video {
      margin-bottom: calc(46.42857vw + -96.57143px);
    }

    p,
    address {
      line-height: 1.77778;
      margin-bottom: 2em;
    }

    .about-panel figcaption {
      margin-bottom: calc(6.42857vw + 15.42857px);
      margin-left: 25px;
      margin-right: 25px;
      margin-top: calc(6.42857vw + 15.42857px);
    }

    .about-locations {
      figcaption {
        margin-bottom: calc(6.42857vw + 15.42857px);
        margin-left: 25px;
        margin-right: 25px;
        margin-top: calc(6.42857vw + 15.42857px);
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    .about-video {
      margin-bottom: 52px;
    }
  }
`

const AboutPage = ({
  data: {
    exports414,
    exports600,
    exports900,
    exports1200,
    exportsValencia414,
    exportsValencia600,
    exportsValencia900,
    exportsValencia1200,
  },
}) => {
  const sources = exports414.nodes.map((_, index) => [
    {
      ...exports1200.nodes[index].childImageSharp.fluid,
      media: `(min-width: 901px)`,
    },
    {
      ...exports900.nodes[index].childImageSharp.fluid,
      media: `(min-width: 601px)`,
    },
    {
      ...exports600.nodes[index].childImageSharp.fluid,
      media: `(min-width: 414px)`,
    },
    exports414.nodes[index].childImageSharp.fluid,
  ])

  const sourcesValencia = exportsValencia414.nodes.map((_, index) => [
    {
      ...exportsValencia1200.nodes[index].childImageSharp.fluid,
      media: `(min-width: 901px)`,
    },
    {
      ...exportsValencia900.nodes[index].childImageSharp.fluid,
      media: `(min-width: 601px)`,
    },
    {
      ...exportsValencia600.nodes[index].childImageSharp.fluid,
      media: `(min-width: 415px)`,
    },
    exportsValencia414.nodes[index].childImageSharp.fluid,
  ])

  const aosFadeClass = isHeaderMobile() ? "" : "aos aos-fade"
  const aosFadeUpClass = isHeaderMobile() ? "" : "aos aos-fade-up"

  useEffect(() => {
    if (window.matchMedia(`(min-width: ${breakpoints.headerMobile + 1}px)`)) {
      applyOnScrollClass("aos", "aos-appear")
    }
  }, [])

  return (
    <Layout>
      <SEO title="About us" />
      <Container>
        <section className="banner">
          <h1 className="heading">
            <span>Responsibly Built For The Long Haul</span>
          </h1>
          <div className="background-video">
            <video
              src="/videos/taylorstitch.mp4"
              className="lazyloaded"
              poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEklEQVR42mP8X8+AFzCOKgADAJ1vDXivFXd/AAAAAElFTkSuQmCC"
              data-poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEklEQVR42mP8X8+AFzCOKgADAJ1vDXivFXd/AAAAAElFTkSuQmCC"
              autoPlay
              preload="auto"
              playsInline={true}
              muted={true}
              loop
              role="region"
              aria-label="Video Player"
              data-expand="-10"
            ></video>
          </div>
        </section>
        <section className="about-intro container">
          <p className={`${aosFadeClass} aos-delay-100`}>
            Constructed to perfection and responsibly built for the long haul.
            We’ve taken 10 years of feedback and are doubling down on our
            commitment to building the best possible clothing while pledging to
            limit our environmental impact. From fiber to fabric to factory to
            end functionality, Taylor Stitch has grown from a need for products
            without limitations that could handle chopping wood, surf sessions,
            snagging trout, or simply heading to the office. On top of making
            the world’s best apparel, we’re asking questions about how we can
            protect wild, forever.
          </p>
        </section>
        <section className="about-video">
          <div className="video-embed">
            <iframe
              src="https://player.vimeo.com/video/291769835?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowFullScreen=""
              width=""
              height=""
              frameBorder="0"
            ></iframe>
          </div>
        </section>
        <figure className="about-products about-panel">
          <Link to="/collections/mens-shirts">
            <Img
              fluid={sources[0]}
              alt="Taylor Stitch product, featuring jeans and a tee."
            />
          </Link>
          <figcaption>
            <h2>Products That Wear&nbsp;in&nbsp;Not&nbsp;Out</h2>
            <p className={`${aosFadeClass} aos-delay-50`}>
              We’ve always considered ourselves a shirting company at our very
              core. Always have. Always will. In fact, when we were just getting
              our vision for Taylor Stitch off the ground ten years ago, we
              turned to the country’s oldest family of shirtmakers to learn from
              the very best. And we were spared no lesson of construction—from
              fit and balance to the importance of French seams to why 22
              stitches-per-inch matters on a shirt.
            </p>
            <p className={`${aosFadeClass} aos-delay-50`}>
              You can bet this technical DNA is central to every single product
              we make. Build for the long haul, design products that wear in not
              out, and use the best most sustainable fabrics available—even if
              that means making them yourself.
            </p>
            <p className={`h3 feature-link ${aosFadeClass} aos-delay-150`}>
              <Link to="/collections/mens-shirts">
                <u>Shop Our Signature Shirting</u>
              </Link>
            </p>
          </figcaption>
        </figure>
        <figure className={`about-fabric about-panel ${aosFadeClass} aos-delay-150`}>
          <Link to="/collections/mens-shirts">
            <Img
              fluid={sources[1]}
              alt="A photo of Taylor Stitch and their custom fabrics."
            />
          </Link>
          <figcaption>
            <h3 className={`${aosFadeClass} aos-delay-50`}>Fabrics</h3>
            <p className={`${aosFadeClass} aos-delay-50`}>
              It’s about protecting our places. No matter where you live, we
              only have one world to care for. We’re committed to using recycled
              and regenerative fibers wherever possible. This will help lower
              water usage, get rid of chemicals and pesticides which harm
              workers and leach into the rivers and help close the loop to
              create a cradle to cradle supply chain. It’s going to take some
              time but we hope everyone joins us.
            </p>
            <p className={`h3 feature-link ${aosFadeClass} aos-delay-50`}>
              <Link to="/collections/mens-shirts">
                <u>Explore Our Fabrics</u>
              </Link>
            </p>
          </figcaption>
        </figure>
        <figure className={`about-factories about-panel ${aosFadeClass} aos-delay-150`}>
          <Link to="/blogs/factories">
            <Img
              fluid={sources[2]}
              alt="We call our factories centers of excellence."
            />
          </Link>
          <figcaption>
            <h3 className={`${aosFadeClass} aos-delay-50`}>Factories</h3>
            <p className={`${aosFadeClass} aos-delay-50`}>
              Responsibly built for the long haul—we can’t do it alone. Our
              construction partners are joining us in our commitment to
              challenge the way the clothing industry operates. From sourcing to
              sewing, they’re the best in the business.
            </p>
            <p className={`h3 feature-link ${aosFadeClass} aos-delay-50`}>
              <Link to="/blogs/factories">
                <u>Our Factory Partners</u>
              </Link>
            </p>
          </figcaption>
        </figure>
        <figure className={`about-wf about-panel ${aosFadeClass} aos-delay-150`}>
          <Link to="/pages/wild-forever">
            <Img
              fluid={sources[3]}
              alt="Volunteers working on maintaining our wild."
            />
          </Link>
          <figcaption>
            <h3 className={`${aosFadeClass} aos-delay-50`}>Wild Forever</h3>
            <p className={`${aosFadeClass} aos-delay-50`}>
              A happy blend of education, volunteering, building community and
              having some fun together. We’ll be partnering with other companies
              who share our values, awesome customers, and local organizations
              to have no bad days. We’ll do things like blaze trails, clean up
              trash, help out on a farm and whatever else our community wants to
              learn about and participate in.
            </p>
            <p className={`h3 feature-link ${aosFadeClass} aos-delay-50`}>
              <Link to="/pages/wild-forever">
                <u>Read Our Mission</u>
              </Link>
            </p>
          </figcaption>
        </figure>
        <SocialProof />
        <section className="about-outro container">
          <p className={`${aosFadeClass} aos-delay-50`}>
            We’d love to meet you in person the next time you’re in town. Stop
            by and say hello.
          </p>
        </section>
        <section className="about-locations">
          <figure className={`location ${aosFadeUpClass} aos-delay-800`}>
            <Link to="/pages/locations-valencia">
              <Img
                fluid={sourcesValencia[0]}
                alt="Our Valencia flagship store."
              />
            </Link>
            <figcaption>
              <h3>
                <Link to="/pages/locations-valencia">Valencia</Link>
              </h3>
              <address
                itemProp="address"
                itemScope=""
                itemType="http://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">383 Valencia Street,</span>
                {` `}
                <span itemProp="addressLocality">San Francisco,</span>
                {` `}
                <span itemProp="addressRegion">CA</span>
                {` `}
                <span itemProp="postalCode">94103</span>
              </address>
            </figcaption>
          </figure>
          <figure className={`location ${aosFadeUpClass} aos-delay-400`}>
            <Link to="/pages/locations-chestnut">
              <Img
                fluid={sourcesValencia[1]}
                alt="The San Francisco location on Chestnut Street."
              />
            </Link>
            <figcaption>
              <h3>
                <Link to="/pages/locations-chestnut">Chestnut</Link>
              </h3>
              <address
                itemProp="address"
                itemScope=""
                itemType="http://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">2030 Chestnut Street,</span>
                {` `}
                <span itemProp="addressLocality">San Francisco,</span>
                {` `}
                <span itemProp="addressRegion">CA</span>
                {` `}
                <span itemProp="postalCode">94115</span>
              </address>
            </figcaption>
          </figure>
          <figure className={`location ${aosFadeUpClass} aos-delay-1200`}>
            <Link to="/pages/locations-kamakura">
              <Img
                fluid={sourcesValencia[2]}
                alt="Our latest location in Kamakura, Japan."
              />
            </Link>
            <figcaption>
              <h3>
                <Link to="/pages/locations-kamakura">Kamakura</Link>
              </h3>
              <address
                itemProp="address"
                itemScope=""
                itemType="http://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">Chome-1-1,</span>
                {` `}
                <span itemProp="addressLocality">Shichirigahama,</span>
                {` `}
                <span itemProp="addressRegion">Kamakura,</span>
                {` `}
                <span itemProp="addressCountry">Japan</span>
              </address>
            </figcaption>
          </figure>
        </section>
      </Container>
    </Layout>
  )
}

export default AboutPage

export const AboutPageQuery = graphql`
  query AboutPageQuery {
    exports414: allFile(
      filter: { relativePath: { regex: "/aboutpage_export_414/" } }
      sort: { fields: relativePath, order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(quality: 100, maxWidth: 414, srcSetBreakpoints: [414]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    exports600: allFile(
      filter: { relativePath: { regex: "/aboutpage_export_600/" } }
      sort: { fields: relativePath, order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    exports900: allFile(
      filter: { relativePath: { regex: "/aboutpage_export_900/" } }
      sort: { fields: relativePath, order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(quality: 100, maxWidth: 900, srcSetBreakpoints: [900]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    exports1200: allFile(
      filter: { relativePath: { regex: "/aboutpage_export_1200/" } }
      sort: { fields: relativePath, order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(quality: 100, maxWidth: 950, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }

    exportsValencia414: allFile(
      filter: { relativePath: { regex: "/aboutpage_export_valencia_414/" } }
      sort: { fields: relativePath, order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(quality: 100, maxWidth: 414, srcSetBreakpoints: [414]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    exportsValencia600: allFile(
      filter: { relativePath: { regex: "/aboutpage_export_valencia_600/" } }
      sort: { fields: relativePath, order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    exportsValencia900: allFile(
      filter: { relativePath: { regex: "/aboutpage_export_valencia_900/" } }
      sort: { fields: relativePath, order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(quality: 100, maxWidth: 900, srcSetBreakpoints: [900]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    exportsValencia1200: allFile(
      filter: { relativePath: { regex: "/aboutpage_export_valencia_1200/" } }
      sort: { fields: relativePath, order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
