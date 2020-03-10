import React, { useEffect } from "react"
import styled from "styled-components"

import { breakpoints } from "../../theme"

const Container = styled.div`
  margin-bottom: 10rem;
  margin-top: 10rem;

  .swiper-slide {
    width: auto;
  }

  figure {
    background-size: cover;
    display: flex;
    flex-flow: column-reverse nowrap;
    justify-content: center;
    height: calc(100vh - 50px);
    max-height: 900px;
    text-align: center !important;
  }

  figcaption,
  blockquote,
  p {
    margin: 0 !important;
  }

  img,
  figcaption {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .swiper-slide-active img,
  .swiper-slide-active figcaption {
    opacity: 1;
  }

  blockquote::before {
    content: "\\201C";
    font-size: 9rem;
    line-height: 0.6;
  }

  p {
    font-size: 44px !important;
    line-height: 54px !important;
    margin: 0 auto !important;
    max-width: 10em;
    padding-left: 25px;
    padding-right: 25px;
    text-align: center;
  }

  time {
    display: block;
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-style: normal;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    margin-top: 2em;
    text-transform: uppercase;
  }

  img {
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    width: 135px;
  }

  @media (max-width: ${breakpoints.phablet}px) {
    p {
      font-size: calc(5vw + 14px) !important;
      line-height: calc(6.42857vw + 15.42857px) !important;
    }
  }
`

const SocialProof = () => {
  useEffect(() => {
    const Swiper = window.Swiper

    new Swiper(".swiper-container", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 18,
      autoplay: false,
      loop: false,
    })
  }, [])

  return (
    <Container className="shopify-section about-social-proof">
      <section className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <figure
              data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_414x.progressive.jpg?v=13263027478774572691 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_600x.progressive.jpg?v=13263027478774572691 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_900x.progressive.jpg?v=13263027478774572691 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1200x.progressive.jpg?v=13263027478774572691 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1442x.progressive.jpg?v=13263027478774572691 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10.progressive.jpg?v=13263027478774572691 1980w"
              style={{
                backgroundImage:
                  'url("https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1200x.progressive.jpg?v=13263027478774572691")',
              }}
            >
              <img
                src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-daily-beast.png?v=1567728731"
                alt="The Daily Beast"
              />
              <figcaption>
                <blockquote className="text-white">
                  <p>
                    Taylor Stitch’s New Line of Boots Combine Eco-Friendliness
                    with High-End Style and Durability
                  </p>
                  <time>April 16, 2019</time>
                </blockquote>
              </figcaption>
              {/* <picture style="display: none;">
                        <source
                          data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_414x.progressive.jpg?v=13263027478774572691 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_600x.progressive.jpg?v=13263027478774572691 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_900x.progressive.jpg?v=13263027478774572691 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1200x.progressive.jpg?v=13263027478774572691 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1442x.progressive.jpg?v=13263027478774572691 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10.progressive.jpg?v=13263027478774572691 1980w"
                          sizes="987px"
                          srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_414x.progressive.jpg?v=13263027478774572691 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_600x.progressive.jpg?v=13263027478774572691 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_900x.progressive.jpg?v=13263027478774572691 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1200x.progressive.jpg?v=13263027478774572691 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1442x.progressive.jpg?v=13263027478774572691 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10.progressive.jpg?v=13263027478774572691 1980w"
                        />
                        <img
                          alt=""
                          className="lazyautosizes lazyloaded ls-is-cached"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="987px"
                        />
                      </picture> */}
            </figure>
          </div>

          <div className="swiper-slide">
            <figure
              data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_414x.progressive.jpg?v=6157585297563008081 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_600x.progressive.jpg?v=6157585297563008081 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_900x.progressive.jpg?v=6157585297563008081 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1200x.progressive.jpg?v=6157585297563008081 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1442x.progressive.jpg?v=6157585297563008081 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01.progressive.jpg?v=6157585297563008081 1980w"
              style={{
                backgroundImage:
                  'url("https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1200x.progressive.jpg?v=6157585297563008081")',
              }}
            >
              <img
                src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-entrepreneur.png?v=1567728731"
                alt="Entrepreneur"
              />
              <figcaption>
                <blockquote className="text-white">
                  <p>Taylor Stitch Makes Us Rethink Our Wardrobe</p>
                  <time>July, 2019</time>
                </blockquote>
              </figcaption>
              {/* <picture style="display: none;">
                      <source
                        data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_414x.progressive.jpg?v=6157585297563008081 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_600x.progressive.jpg?v=6157585297563008081 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_900x.progressive.jpg?v=6157585297563008081 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1200x.progressive.jpg?v=6157585297563008081 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1442x.progressive.jpg?v=6157585297563008081 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01.progressive.jpg?v=6157585297563008081 1980w"
                        sizes="987px"
                        srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_414x.progressive.jpg?v=6157585297563008081 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_600x.progressive.jpg?v=6157585297563008081 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_900x.progressive.jpg?v=6157585297563008081 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1200x.progressive.jpg?v=6157585297563008081 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1442x.progressive.jpg?v=6157585297563008081 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01.progressive.jpg?v=6157585297563008081 1980w"
                      >
                        <img
                          alt=""
                          className="lazyautosizes lazyloaded ls-is-cached"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="987px"
                        />
                      </picture> */}
            </figure>
          </div>

          <div className="swiper-slide">
            <figure
              data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_414x.progressive.jpg?v=165950946095081757 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_600x.progressive.jpg?v=165950946095081757 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_900x.progressive.jpg?v=165950946095081757 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1200x.progressive.jpg?v=165950946095081757 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1442x.progressive.jpg?v=165950946095081757 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02.progressive.jpg?v=165950946095081757 1980w"
              style={{
                backgroundImage:
                  'url("https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1442x.progressive.jpg?v=165950946095081757")',
              }}
            >
              <img
                src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-fast-company.png?v=1567728731"
                alt="Fast Company"
              />
              <figcaption>
                <blockquote className="text-white">
                  <p>
                    Taylor Stitch launches repair-and-resell platform Restitch
                  </p>
                  <time>May 21, 2019</time>
                </blockquote>
              </figcaption>
              {/* <picture style="display: none;">
                        <source
                          data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_414x.progressive.jpg?v=165950946095081757 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_600x.progressive.jpg?v=165950946095081757 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_900x.progressive.jpg?v=165950946095081757 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1200x.progressive.jpg?v=165950946095081757 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1442x.progressive.jpg?v=165950946095081757 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02.progressive.jpg?v=165950946095081757 1980w"
                          sizes="987px"
                          srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_414x.progressive.jpg?v=165950946095081757 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_600x.progressive.jpg?v=165950946095081757 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_900x.progressive.jpg?v=165950946095081757 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1200x.progressive.jpg?v=165950946095081757 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1442x.progressive.jpg?v=165950946095081757 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02.progressive.jpg?v=165950946095081757 1980w"
                        />
                        <img
                          alt=""
                          className="lazyautosizes lazyloaded ls-is-cached"
                          data-sizes="auto"
                          data-parent-fit="cover"
                          sizes="987px"
                        />
                      </picture> */}
            </figure>
          </div>

          <div className="swiper-slide">
            <figure
              data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_414x.progressive.jpg?v=7750703524387571263 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_600x.progressive.jpg?v=7750703524387571263 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_900x.progressive.jpg?v=7750703524387571263 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1200x.progressive.jpg?v=7750703524387571263 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1442x.progressive.jpg?v=7750703524387571263 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03.progressive.jpg?v=7750703524387571263 1980w"
              style={{
                backgroundImage:
                  'url("https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1442x.progressive.jpg?v=7750703524387571263")',
              }}
            >
              <img
                src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-forbes.png?v=1567728731"
                alt="Forbes"
              />
              <figcaption>
                <blockquote className="text-white">
                  <p>
                    Taylor Stitch Launches 100% Organic Denim With ISKO Mills As
                    Denim Market Reaches 5 Billion Dollars
                  </p>
                  <time>May 10, 2019</time>
                </blockquote>
              </figcaption>
              {/* <picture style="display: none;">
                          <source
                            data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_414x.progressive.jpg?v=7750703524387571263 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_600x.progressive.jpg?v=7750703524387571263 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_900x.progressive.jpg?v=7750703524387571263 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1200x.progressive.jpg?v=7750703524387571263 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1442x.progressive.jpg?v=7750703524387571263 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03.progressive.jpg?v=7750703524387571263 1980w"
                            sizes="987px"
                            srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_414x.progressive.jpg?v=7750703524387571263 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_600x.progressive.jpg?v=7750703524387571263 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_900x.progressive.jpg?v=7750703524387571263 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1200x.progressive.jpg?v=7750703524387571263 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1442x.progressive.jpg?v=7750703524387571263 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03.progressive.jpg?v=7750703524387571263 1980w"
                          />
                          <img
                            alt=""
                            className="lazyautosizes lazyloaded ls-is-cached"
                            data-sizes="auto"
                            data-parent-fit="cover"
                            sizes="987px"
                          />
                        </picture> */}
            </figure>
          </div>

          {/* <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_414x.progressive.jpg?v=9275146717922166164 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_600x.progressive.jpg?v=9275146717922166164 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_900x.progressive.jpg?v=9275146717922166164 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1200x.progressive.jpg?v=9275146717922166164 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1442x.progressive.jpg?v=9275146717922166164 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04.progressive.jpg?v=9275146717922166164 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1442x.progressive.jpg?v=9275146717922166164&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-forbes.png?v=1567728731" alt="Forbes"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Menswear Brand Adopts A Repair Program To Make Fashion More Eco-Friendly</p>
                      <time>May 29, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_414x.progressive.jpg?v=9275146717922166164 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_600x.progressive.jpg?v=9275146717922166164 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_900x.progressive.jpg?v=9275146717922166164 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1200x.progressive.jpg?v=9275146717922166164 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1442x.progressive.jpg?v=9275146717922166164 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04.progressive.jpg?v=9275146717922166164 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_414x.progressive.jpg?v=9275146717922166164 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_600x.progressive.jpg?v=9275146717922166164 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_900x.progressive.jpg?v=9275146717922166164 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1200x.progressive.jpg?v=9275146717922166164 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1442x.progressive.jpg?v=9275146717922166164 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04.progressive.jpg?v=9275146717922166164 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide" style="width: 1005px;" data-slick-index="3" aria-hidden="true" tabindex="-1">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_414x.progressive.jpg?v=10412756741971335145 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_600x.progressive.jpg?v=10412756741971335145 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_900x.progressive.jpg?v=10412756741971335145 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1200x.progressive.jpg?v=10412756741971335145 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1442x.progressive.jpg?v=10412756741971335145 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05.progressive.jpg?v=10412756741971335145 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1442x.progressive.jpg?v=10412756741971335145&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-mens-journal.png?v=1567728731" alt="Men’s Journal"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Taylor Stitch Launches Bold, Innovative Clothing Recycling Program</p>
                      <time>May 22, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_414x.progressive.jpg?v=10412756741971335145 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_600x.progressive.jpg?v=10412756741971335145 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_900x.progressive.jpg?v=10412756741971335145 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1200x.progressive.jpg?v=10412756741971335145 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1442x.progressive.jpg?v=10412756741971335145 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05.progressive.jpg?v=10412756741971335145 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_414x.progressive.jpg?v=10412756741971335145 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_600x.progressive.jpg?v=10412756741971335145 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_900x.progressive.jpg?v=10412756741971335145 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1200x.progressive.jpg?v=10412756741971335145 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1442x.progressive.jpg?v=10412756741971335145 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05.progressive.jpg?v=10412756741971335145 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide" style="width: 1005px;" data-slick-index="4" aria-hidden="true" tabindex="-1">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_414x.progressive.jpg?v=18158621996112069163 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_600x.progressive.jpg?v=18158621996112069163 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_900x.progressive.jpg?v=18158621996112069163 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1200x.progressive.jpg?v=18158621996112069163 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1442x.progressive.jpg?v=18158621996112069163 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06.progressive.jpg?v=18158621996112069163 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1442x.progressive.jpg?v=18158621996112069163&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-wwd.png?v=1567728730" alt="WWD"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Taylor Stitch to Launch Recycling Program</p>
                      <time>2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_414x.progressive.jpg?v=18158621996112069163 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_600x.progressive.jpg?v=18158621996112069163 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_900x.progressive.jpg?v=18158621996112069163 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1200x.progressive.jpg?v=18158621996112069163 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1442x.progressive.jpg?v=18158621996112069163 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06.progressive.jpg?v=18158621996112069163 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_414x.progressive.jpg?v=18158621996112069163 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_600x.progressive.jpg?v=18158621996112069163 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_900x.progressive.jpg?v=18158621996112069163 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1200x.progressive.jpg?v=18158621996112069163 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1442x.progressive.jpg?v=18158621996112069163 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06.progressive.jpg?v=18158621996112069163 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide" style="width: 1005px;" data-slick-index="5" aria-hidden="true" tabindex="-1">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_414x.progressive.jpg?v=9603452554886835159 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_600x.progressive.jpg?v=9603452554886835159 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_900x.progressive.jpg?v=9603452554886835159 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1200x.progressive.jpg?v=9603452554886835159 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1442x.progressive.jpg?v=9603452554886835159 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07.progressive.jpg?v=9603452554886835159 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1442x.progressive.jpg?v=9603452554886835159&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-business-insider.png?v=1567730431" alt="Business Insider"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Taylor Stitch Organic ’68 Denim review: high-quality selvedge jeans</p>
                      <time>May 24, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_414x.progressive.jpg?v=9603452554886835159 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_600x.progressive.jpg?v=9603452554886835159 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_900x.progressive.jpg?v=9603452554886835159 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1200x.progressive.jpg?v=9603452554886835159 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1442x.progressive.jpg?v=9603452554886835159 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07.progressive.jpg?v=9603452554886835159 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_414x.progressive.jpg?v=9603452554886835159 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_600x.progressive.jpg?v=9603452554886835159 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_900x.progressive.jpg?v=9603452554886835159 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1200x.progressive.jpg?v=9603452554886835159 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1442x.progressive.jpg?v=9603452554886835159 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07.progressive.jpg?v=9603452554886835159 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide" style="width: 1005px;" data-slick-index="6" aria-hidden="true" tabindex="-1">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_414x.progressive.jpg?v=4722021597426180096 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_600x.progressive.jpg?v=4722021597426180096 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_900x.progressive.jpg?v=4722021597426180096 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1200x.progressive.jpg?v=4722021597426180096 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1442x.progressive.jpg?v=4722021597426180096 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08.progressive.jpg?v=4722021597426180096 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1442x.progressive.jpg?v=4722021597426180096&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-business-insider.png?v=1567730431" alt="Business Insider"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>The best men’s linen shirts you can buy</p>
                      <time>September 12, 2018</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_414x.progressive.jpg?v=4722021597426180096 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_600x.progressive.jpg?v=4722021597426180096 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_900x.progressive.jpg?v=4722021597426180096 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1200x.progressive.jpg?v=4722021597426180096 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1442x.progressive.jpg?v=4722021597426180096 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08.progressive.jpg?v=4722021597426180096 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_414x.progressive.jpg?v=4722021597426180096 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_600x.progressive.jpg?v=4722021597426180096 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_900x.progressive.jpg?v=4722021597426180096 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1200x.progressive.jpg?v=4722021597426180096 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1442x.progressive.jpg?v=4722021597426180096 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08.progressive.jpg?v=4722021597426180096 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide" style="width: 1005px;" data-slick-index="7" aria-hidden="true" tabindex="-1">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_414x.progressive.jpg?v=6493284173412914933 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_600x.progressive.jpg?v=6493284173412914933 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_900x.progressive.jpg?v=6493284173412914933 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1200x.progressive.jpg?v=6493284173412914933 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1442x.progressive.jpg?v=6493284173412914933 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09.progressive.jpg?v=6493284173412914933 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1442x.progressive.jpg?v=6493284173412914933&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-gear-patrol.png?v=1567728731" alt="Gear Patrol"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>These New Work Pants Are Made From a Uniquely Durable Fabric</p>
                      <time>February 10, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_414x.progressive.jpg?v=6493284173412914933 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_600x.progressive.jpg?v=6493284173412914933 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_900x.progressive.jpg?v=6493284173412914933 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1200x.progressive.jpg?v=6493284173412914933 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1442x.progressive.jpg?v=6493284173412914933 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09.progressive.jpg?v=6493284173412914933 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_414x.progressive.jpg?v=6493284173412914933 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_600x.progressive.jpg?v=6493284173412914933 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_900x.progressive.jpg?v=6493284173412914933 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1200x.progressive.jpg?v=6493284173412914933 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1442x.progressive.jpg?v=6493284173412914933 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09.progressive.jpg?v=6493284173412914933 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide" style="width: 1005px;" data-slick-index="8" aria-hidden="true" tabindex="-1">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_414x.progressive.jpg?v=13263027478774572691 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_600x.progressive.jpg?v=13263027478774572691 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_900x.progressive.jpg?v=13263027478774572691 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1200x.progressive.jpg?v=13263027478774572691 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1442x.progressive.jpg?v=13263027478774572691 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10.progressive.jpg?v=13263027478774572691 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1442x.progressive.jpg?v=13263027478774572691&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-daily-beast.png?v=1567728731" alt="The Daily Beast"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Taylor Stitch’s New Line of Boots Combine Eco-Friendliness with High-End Style and Durability</p>
                      <time>April 16, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_414x.progressive.jpg?v=13263027478774572691 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_600x.progressive.jpg?v=13263027478774572691 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_900x.progressive.jpg?v=13263027478774572691 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1200x.progressive.jpg?v=13263027478774572691 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1442x.progressive.jpg?v=13263027478774572691 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10.progressive.jpg?v=13263027478774572691 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_414x.progressive.jpg?v=13263027478774572691 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_600x.progressive.jpg?v=13263027478774572691 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_900x.progressive.jpg?v=13263027478774572691 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1200x.progressive.jpg?v=13263027478774572691 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1442x.progressive.jpg?v=13263027478774572691 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10.progressive.jpg?v=13263027478774572691 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide" style="width: 1005px;" data-slick-index="9" aria-hidden="true" tabindex="-1">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_414x.progressive.jpg?v=6157585297563008081 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_600x.progressive.jpg?v=6157585297563008081 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_900x.progressive.jpg?v=6157585297563008081 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1200x.progressive.jpg?v=6157585297563008081 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1442x.progressive.jpg?v=6157585297563008081 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01.progressive.jpg?v=6157585297563008081 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1442x.progressive.jpg?v=6157585297563008081&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-entrepreneur.png?v=1567728731" alt="Entrepreneur"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Taylor Stitch Makes Us Rethink Our Wardrobe</p>
                      <time>July, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_414x.progressive.jpg?v=6157585297563008081 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_600x.progressive.jpg?v=6157585297563008081 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_900x.progressive.jpg?v=6157585297563008081 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1200x.progressive.jpg?v=6157585297563008081 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1442x.progressive.jpg?v=6157585297563008081 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01.progressive.jpg?v=6157585297563008081 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_414x.progressive.jpg?v=6157585297563008081 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_600x.progressive.jpg?v=6157585297563008081 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_900x.progressive.jpg?v=6157585297563008081 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1200x.progressive.jpg?v=6157585297563008081 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1442x.progressive.jpg?v=6157585297563008081 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01.progressive.jpg?v=6157585297563008081 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide slick-cloned" style="width: 1005px;" tabindex="-1" data-slick-index="10" aria-hidden="true">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_414x.progressive.jpg?v=165950946095081757 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_600x.progressive.jpg?v=165950946095081757 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_900x.progressive.jpg?v=165950946095081757 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1200x.progressive.jpg?v=165950946095081757 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1442x.progressive.jpg?v=165950946095081757 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02.progressive.jpg?v=165950946095081757 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1200x.progressive.jpg?v=165950946095081757&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-fast-company.png?v=1567728731" alt="Fast Company"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Taylor Stitch launches repair-and-resell platform Restitch</p>
                      <time>May 21, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_414x.progressive.jpg?v=165950946095081757 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_600x.progressive.jpg?v=165950946095081757 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_900x.progressive.jpg?v=165950946095081757 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1200x.progressive.jpg?v=165950946095081757 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1442x.progressive.jpg?v=165950946095081757 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02.progressive.jpg?v=165950946095081757 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_414x.progressive.jpg?v=165950946095081757 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_600x.progressive.jpg?v=165950946095081757 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_900x.progressive.jpg?v=165950946095081757 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1200x.progressive.jpg?v=165950946095081757 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02_1442x.progressive.jpg?v=165950946095081757 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_02.progressive.jpg?v=165950946095081757 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide slick-cloned" style="width: 1005px;" data-slick-index="11" aria-hidden="true" tabindex="-1">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_414x.progressive.jpg?v=7750703524387571263 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_600x.progressive.jpg?v=7750703524387571263 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_900x.progressive.jpg?v=7750703524387571263 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1200x.progressive.jpg?v=7750703524387571263 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1442x.progressive.jpg?v=7750703524387571263 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03.progressive.jpg?v=7750703524387571263 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1200x.progressive.jpg?v=7750703524387571263&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-forbes.png?v=1567728731" alt="Forbes"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Taylor Stitch Launches 100% Organic Denim With ISKO Mills As Denim Market Reaches 5 Billion Dollars</p>
                      <time>May 10, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_414x.progressive.jpg?v=7750703524387571263 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_600x.progressive.jpg?v=7750703524387571263 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_900x.progressive.jpg?v=7750703524387571263 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1200x.progressive.jpg?v=7750703524387571263 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1442x.progressive.jpg?v=7750703524387571263 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03.progressive.jpg?v=7750703524387571263 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_414x.progressive.jpg?v=7750703524387571263 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_600x.progressive.jpg?v=7750703524387571263 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_900x.progressive.jpg?v=7750703524387571263 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1200x.progressive.jpg?v=7750703524387571263 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03_1442x.progressive.jpg?v=7750703524387571263 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_03.progressive.jpg?v=7750703524387571263 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide slick-cloned" style="width: 1005px;" tabindex="-1" data-slick-index="12" aria-hidden="true">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_414x.progressive.jpg?v=9275146717922166164 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_600x.progressive.jpg?v=9275146717922166164 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_900x.progressive.jpg?v=9275146717922166164 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1200x.progressive.jpg?v=9275146717922166164 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1442x.progressive.jpg?v=9275146717922166164 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04.progressive.jpg?v=9275146717922166164 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1200x.progressive.jpg?v=9275146717922166164&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-forbes.png?v=1567728731" alt="Forbes"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Menswear Brand Adopts A Repair Program To Make Fashion More Eco-Friendly</p>
                      <time>May 29, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_414x.progressive.jpg?v=9275146717922166164 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_600x.progressive.jpg?v=9275146717922166164 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_900x.progressive.jpg?v=9275146717922166164 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1200x.progressive.jpg?v=9275146717922166164 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1442x.progressive.jpg?v=9275146717922166164 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04.progressive.jpg?v=9275146717922166164 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_414x.progressive.jpg?v=9275146717922166164 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_600x.progressive.jpg?v=9275146717922166164 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_900x.progressive.jpg?v=9275146717922166164 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1200x.progressive.jpg?v=9275146717922166164 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04_1442x.progressive.jpg?v=9275146717922166164 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_04.progressive.jpg?v=9275146717922166164 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide slick-cloned" style="width: 1005px;" tabindex="-1" data-slick-index="13" aria-hidden="true">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_414x.progressive.jpg?v=10412756741971335145 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_600x.progressive.jpg?v=10412756741971335145 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_900x.progressive.jpg?v=10412756741971335145 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1200x.progressive.jpg?v=10412756741971335145 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1442x.progressive.jpg?v=10412756741971335145 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05.progressive.jpg?v=10412756741971335145 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1200x.progressive.jpg?v=10412756741971335145&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-mens-journal.png?v=1567728731" alt="Men’s Journal"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Taylor Stitch Launches Bold, Innovative Clothing Recycling Program</p>
                      <time>May 22, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_414x.progressive.jpg?v=10412756741971335145 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_600x.progressive.jpg?v=10412756741971335145 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_900x.progressive.jpg?v=10412756741971335145 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1200x.progressive.jpg?v=10412756741971335145 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1442x.progressive.jpg?v=10412756741971335145 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05.progressive.jpg?v=10412756741971335145 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_414x.progressive.jpg?v=10412756741971335145 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_600x.progressive.jpg?v=10412756741971335145 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_900x.progressive.jpg?v=10412756741971335145 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1200x.progressive.jpg?v=10412756741971335145 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05_1442x.progressive.jpg?v=10412756741971335145 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_05.progressive.jpg?v=10412756741971335145 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide slick-cloned" style="width: 1005px;" tabindex="-1" data-slick-index="14" aria-hidden="true">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_414x.progressive.jpg?v=18158621996112069163 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_600x.progressive.jpg?v=18158621996112069163 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_900x.progressive.jpg?v=18158621996112069163 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1200x.progressive.jpg?v=18158621996112069163 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1442x.progressive.jpg?v=18158621996112069163 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06.progressive.jpg?v=18158621996112069163 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1200x.progressive.jpg?v=18158621996112069163&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-wwd.png?v=1567728730" alt="WWD"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Taylor Stitch to Launch Recycling Program</p>
                      <time>2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_414x.progressive.jpg?v=18158621996112069163 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_600x.progressive.jpg?v=18158621996112069163 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_900x.progressive.jpg?v=18158621996112069163 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1200x.progressive.jpg?v=18158621996112069163 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1442x.progressive.jpg?v=18158621996112069163 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06.progressive.jpg?v=18158621996112069163 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_414x.progressive.jpg?v=18158621996112069163 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_600x.progressive.jpg?v=18158621996112069163 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_900x.progressive.jpg?v=18158621996112069163 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1200x.progressive.jpg?v=18158621996112069163 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06_1442x.progressive.jpg?v=18158621996112069163 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_06.progressive.jpg?v=18158621996112069163 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide slick-cloned" style="width: 1005px;" tabindex="-1" data-slick-index="15" aria-hidden="true">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_414x.progressive.jpg?v=9603452554886835159 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_600x.progressive.jpg?v=9603452554886835159 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_900x.progressive.jpg?v=9603452554886835159 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1200x.progressive.jpg?v=9603452554886835159 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1442x.progressive.jpg?v=9603452554886835159 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07.progressive.jpg?v=9603452554886835159 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1200x.progressive.jpg?v=9603452554886835159&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-business-insider.png?v=1567730431" alt="Business Insider"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Taylor Stitch Organic ’68 Denim review: high-quality selvedge jeans</p>
                      <time>May 24, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_414x.progressive.jpg?v=9603452554886835159 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_600x.progressive.jpg?v=9603452554886835159 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_900x.progressive.jpg?v=9603452554886835159 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1200x.progressive.jpg?v=9603452554886835159 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1442x.progressive.jpg?v=9603452554886835159 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07.progressive.jpg?v=9603452554886835159 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_414x.progressive.jpg?v=9603452554886835159 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_600x.progressive.jpg?v=9603452554886835159 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_900x.progressive.jpg?v=9603452554886835159 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1200x.progressive.jpg?v=9603452554886835159 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07_1442x.progressive.jpg?v=9603452554886835159 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_07.progressive.jpg?v=9603452554886835159 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide slick-cloned" style="width: 1005px;" tabindex="-1" data-slick-index="16" aria-hidden="true">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_414x.progressive.jpg?v=4722021597426180096 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_600x.progressive.jpg?v=4722021597426180096 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_900x.progressive.jpg?v=4722021597426180096 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1200x.progressive.jpg?v=4722021597426180096 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1442x.progressive.jpg?v=4722021597426180096 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08.progressive.jpg?v=4722021597426180096 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1200x.progressive.jpg?v=4722021597426180096&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-business-insider.png?v=1567730431" alt="Business Insider"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>The best men’s linen shirts you can buy</p>
                      <time>September 12, 2018</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_414x.progressive.jpg?v=4722021597426180096 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_600x.progressive.jpg?v=4722021597426180096 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_900x.progressive.jpg?v=4722021597426180096 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1200x.progressive.jpg?v=4722021597426180096 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1442x.progressive.jpg?v=4722021597426180096 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08.progressive.jpg?v=4722021597426180096 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_414x.progressive.jpg?v=4722021597426180096 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_600x.progressive.jpg?v=4722021597426180096 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_900x.progressive.jpg?v=4722021597426180096 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1200x.progressive.jpg?v=4722021597426180096 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08_1442x.progressive.jpg?v=4722021597426180096 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_08.progressive.jpg?v=4722021597426180096 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide slick-cloned" style="width: 1005px;" tabindex="-1" data-slick-index="17" aria-hidden="true">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_414x.progressive.jpg?v=6493284173412914933 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_600x.progressive.jpg?v=6493284173412914933 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_900x.progressive.jpg?v=6493284173412914933 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1200x.progressive.jpg?v=6493284173412914933 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1442x.progressive.jpg?v=6493284173412914933 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09.progressive.jpg?v=6493284173412914933 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1200x.progressive.jpg?v=6493284173412914933&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-gear-patrol.png?v=1567728731" alt="Gear Patrol"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>These New Work Pants Are Made From a Uniquely Durable Fabric</p>
                      <time>February 10, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_414x.progressive.jpg?v=6493284173412914933 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_600x.progressive.jpg?v=6493284173412914933 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_900x.progressive.jpg?v=6493284173412914933 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1200x.progressive.jpg?v=6493284173412914933 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1442x.progressive.jpg?v=6493284173412914933 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09.progressive.jpg?v=6493284173412914933 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_414x.progressive.jpg?v=6493284173412914933 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_600x.progressive.jpg?v=6493284173412914933 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_900x.progressive.jpg?v=6493284173412914933 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1200x.progressive.jpg?v=6493284173412914933 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09_1442x.progressive.jpg?v=6493284173412914933 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_09.progressive.jpg?v=6493284173412914933 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide slick-cloned" style="width: 1005px;" tabindex="-1" data-slick-index="18" aria-hidden="true">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_414x.progressive.jpg?v=13263027478774572691 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_600x.progressive.jpg?v=13263027478774572691 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_900x.progressive.jpg?v=13263027478774572691 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1200x.progressive.jpg?v=13263027478774572691 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1442x.progressive.jpg?v=13263027478774572691 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10.progressive.jpg?v=13263027478774572691 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1200x.progressive.jpg?v=13263027478774572691&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-daily-beast.png?v=1567728731" alt="The Daily Beast"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Taylor Stitch’s New Line of Boots Combine Eco-Friendliness with High-End Style and Durability</p>
                      <time>April 16, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_414x.progressive.jpg?v=13263027478774572691 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_600x.progressive.jpg?v=13263027478774572691 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_900x.progressive.jpg?v=13263027478774572691 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1200x.progressive.jpg?v=13263027478774572691 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1442x.progressive.jpg?v=13263027478774572691 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10.progressive.jpg?v=13263027478774572691 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_414x.progressive.jpg?v=13263027478774572691 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_600x.progressive.jpg?v=13263027478774572691 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_900x.progressive.jpg?v=13263027478774572691 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1200x.progressive.jpg?v=13263027478774572691 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10_1442x.progressive.jpg?v=13263027478774572691 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_10.progressive.jpg?v=13263027478774572691 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a><a href="" className="social-proof-slide slick-slide slick-cloned" style="width: 1005px;" tabindex="-1" data-slick-index="19" aria-hidden="true">
                <figure className="lazypreload lazyloaded" data-bgset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_414x.progressive.jpg?v=6157585297563008081 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_600x.progressive.jpg?v=6157585297563008081 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_900x.progressive.jpg?v=6157585297563008081 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1200x.progressive.jpg?v=6157585297563008081 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1442x.progressive.jpg?v=6157585297563008081 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01.progressive.jpg?v=6157585297563008081 1980w" style="background-image: url(&quot;https://cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1200x.progressive.jpg?v=6157585297563008081&quot;);">
                  <img src="//cdn.shopify.com/s/files/1/0070/1922/files/social-proof-logo-entrepreneur.png?v=1567728731" alt="Entrepreneur"/>
                  <figcaption>
                    <blockquote className="text-white">
                      <p>Taylor Stitch Makes Us Rethink Our Wardrobe</p>
                      <time>July, 2019</time>
                    </blockquote>
                  </figcaption>
                <picture style="display: none;"><source data-srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_414x.progressive.jpg?v=6157585297563008081 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_600x.progressive.jpg?v=6157585297563008081 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_900x.progressive.jpg?v=6157585297563008081 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1200x.progressive.jpg?v=6157585297563008081 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1442x.progressive.jpg?v=6157585297563008081 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01.progressive.jpg?v=6157585297563008081 1980w" sizes="987px" srcset="//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_414x.progressive.jpg?v=6157585297563008081 414w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_600x.progressive.jpg?v=6157585297563008081 600w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_900x.progressive.jpg?v=6157585297563008081 900w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1200x.progressive.jpg?v=6157585297563008081 1200w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01_1442x.progressive.jpg?v=6157585297563008081 1442w,//cdn.shopify.com/s/files/1/0070/1922/files/aboutpage_socialproof_01.progressive.jpg?v=6157585297563008081 1980w"><img alt="" className="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="987px"/></picture></figure>
              </a></div>
              </div><div className="flex-direction-nav flex-nav-next slick-arrow" style=""><a className="flex-next white" title="Next Slide"></a></div> */}
        </div>
      </section>
    </Container>
  )
}

export default SocialProof
