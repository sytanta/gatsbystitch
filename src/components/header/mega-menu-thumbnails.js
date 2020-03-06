import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import MMThumbnailItem from "./mega-menu-thumbnail-item"

import Container from "../../css/mega-menu/thumbnails"

const MMThumbnails = ({ activeCategory }) => {
  const data = useStaticQuery(graphql`
    query MegaMenu {
      shirts: allContentfulGbsMegaMenuItem(
        filter: { category: { eq: "shirt" }, node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            alt
            id
            title
            subtitle
            link
            category
            images {
              title
              file {
                url
                details {
                  image {
                    width
                  }
                }
              }
            }
          }
        }
      }

      knits: allContentfulGbsMegaMenuItem(
        filter: { category: { eq: "knit" }, node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            alt
            id
            title
            subtitle
            link
            category
            images {
              title
              file {
                url
                details {
                  image {
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const thumbnails = activeCategory === "shirt" ? <MMThumbnailItem /> : ""
  const images =
    activeCategory === "shirt" ? data.shirts.edges : data.knits.edges

    return (
    <Container>
      <MMThumbnailItem images={images} />
      {/* <div className="thumbnail-handle-wrapper " data-linked-to="knits">
        <figure>
          <a href="/products/the-apres-hoodie-in-natural-hemp-stripe">
            <img
              alt="The Après Hoodie in Natural Hemp Stripe"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_natural_stripe_001_414x.progressive.jpg?v=1580760761"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_natural_stripe_001_600x.progressive.jpg?v=1580760761"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_natural_stripe_001_414x.progressive.jpg?v=1580760761 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_natural_stripe_001_600x.progressive.jpg?v=1580760761 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_natural_stripe_001_900x.progressive.jpg?v=1580760761 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_natural_stripe_001_1200x.progressive.jpg?v=1580760761 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_natural_stripe_001_1442x.progressive.jpg?v=1580760761 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_natural_stripe_001.progressive.jpg?v=1580760761 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-apres-hoodie-in-natural-hemp-stripe">
              <span className="title">The Après Hoodie</span>
              <span className="subtitle">in Natural Hemp Stripe</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-apres-hoodie-in-olive-hemp-donegal">
            <img
              alt="The Après Hoodie in Olive Hemp Donegal"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_olive_donegal_001_414x.progressive.jpg?v=1580760838"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_olive_donegal_001_600x.progressive.jpg?v=1580760838"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_olive_donegal_001_414x.progressive.jpg?v=1580760838 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_olive_donegal_001_600x.progressive.jpg?v=1580760838 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_olive_donegal_001_900x.progressive.jpg?v=1580760838 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_olive_donegal_001_1200x.progressive.jpg?v=1580760838 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_olive_donegal_001_1442x.progressive.jpg?v=1580760838 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_apres_olive_donegal_001.progressive.jpg?v=1580760838 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-apres-hoodie-in-olive-hemp-donegal">
              <span className="title">The Après Hoodie</span>
              <span className="subtitle">in Olive Hemp Donegal</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-apres-hoodie-in-heather-grey">
            <img
              alt="The Après Hoodie in Heather Grey"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q419_apres_hoodie_heather_grey_001_414x.progressive.jpg?v=1572034103"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q419_apres_hoodie_heather_grey_001_600x.progressive.jpg?v=1572034103"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q419_apres_hoodie_heather_grey_001_414x.progressive.jpg?v=1572034103 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q419_apres_hoodie_heather_grey_001_600x.progressive.jpg?v=1572034103 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q419_apres_hoodie_heather_grey_001_900x.progressive.jpg?v=1572034103 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q419_apres_hoodie_heather_grey_001_1200x.progressive.jpg?v=1572034103 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q419_apres_hoodie_heather_grey_001_1442x.progressive.jpg?v=1572034103 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q419_apres_hoodie_heather_grey_001.progressive.jpg?v=1572034103 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-apres-hoodie-in-heather-grey">
              <span className="title">The Après Hoodie</span>
              <span className="subtitle">in Heather Grey</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-crewneck-in-rust-donegal-terry">
            <img
              alt="The Crewneck in Rust Donegal Terry"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_crewneck_rust_terry_001_414x.progressive.jpg?v=1578519171"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_crewneck_rust_terry_001_600x.progressive.jpg?v=1578519171"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_crewneck_rust_terry_001_414x.progressive.jpg?v=1578519171 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_crewneck_rust_terry_001_600x.progressive.jpg?v=1578519171 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_crewneck_rust_terry_001_900x.progressive.jpg?v=1578519171 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_crewneck_rust_terry_001_1200x.progressive.jpg?v=1578519171 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_crewneck_rust_terry_001_1442x.progressive.jpg?v=1578519171 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_crewneck_rust_terry_001.progressive.jpg?v=1578519171 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-crewneck-in-rust-donegal-terry">
              <span className="title">The Crewneck</span>
              <span className="subtitle">in Rust Donegal Terry</span>
            </a>
          </figcaption>
        </figure>
      </div>
      <div className="thumbnail-handle-wrapper " data-linked-to="bottoms">
        <figure>
          <a href="/products/the-gibson-trouser-in-navy">
            <img
              alt="The Gibson Trouser in Navy"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_navy_001_414x.progressive.jpg?v=1582827550"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_navy_001_600x.progressive.jpg?v=1582827550"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_navy_001_414x.progressive.jpg?v=1582827550 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_navy_001_600x.progressive.jpg?v=1582827550 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_navy_001_900x.progressive.jpg?v=1582827550 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_navy_001_1200x.progressive.jpg?v=1582827550 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_navy_001_1442x.progressive.jpg?v=1582827550 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_navy_001.progressive.jpg?v=1582827550 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-gibson-trouser-in-navy">
              <span className="title">The Gibson Trouser</span>
              <span className="subtitle">in Navy</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-gibson-trouser-in-gravel">
            <img
              alt="The Gibson Trouser in Gravel"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_gravel_001_414x.progressive.jpg?v=1582762328"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_gravel_001_600x.progressive.jpg?v=1582762328"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_gravel_001_414x.progressive.jpg?v=1582762328 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_gravel_001_600x.progressive.jpg?v=1582762328 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_gravel_001_900x.progressive.jpg?v=1582762328 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_gravel_001_1200x.progressive.jpg?v=1582762328 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_gravel_001_1442x.progressive.jpg?v=1582762328 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_trouser_gravel_001.progressive.jpg?v=1582762328 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-gibson-trouser-in-gravel">
              <span className="title">The Gibson Trouser</span>
              <span className="subtitle">in Gravel</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-camp-pant-in-charcoal-reverse-sateen">
            <img
              alt="The Camp Pant in Charcoal Reverse Sateen"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_product_camp_charcoal_sateen_001_414x.progressive.jpg?v=1581632150"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_product_camp_charcoal_sateen_001_600x.progressive.jpg?v=1581632150"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_product_camp_charcoal_sateen_001_414x.progressive.jpg?v=1581632150 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_product_camp_charcoal_sateen_001_600x.progressive.jpg?v=1581632150 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_product_camp_charcoal_sateen_001_900x.progressive.jpg?v=1581632150 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_product_camp_charcoal_sateen_001_1200x.progressive.jpg?v=1581632150 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_product_camp_charcoal_sateen_001_1442x.progressive.jpg?v=1581632150 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_product_camp_charcoal_sateen_001.progressive.jpg?v=1581632150 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-camp-pant-in-charcoal-reverse-sateen">
              <span className="title">The Camp Pant</span>
              <span className="subtitle">in Charcoal Reverse Sateen</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-camp-pant-in-olive-reverse-sateen">
            <img
              alt="The Camp Pant in Olive Reverse Sateen"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_camp_charcoal_sateen_001_414x.progressive.jpg?v=1581635666"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_camp_charcoal_sateen_001_600x.progressive.jpg?v=1581635666"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_camp_charcoal_sateen_001_414x.progressive.jpg?v=1581635666 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_camp_charcoal_sateen_001_600x.progressive.jpg?v=1581635666 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_camp_charcoal_sateen_001_900x.progressive.jpg?v=1581635666 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_camp_charcoal_sateen_001_1200x.progressive.jpg?v=1581635666 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_camp_charcoal_sateen_001_1442x.progressive.jpg?v=1581635666 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_m_Q120_camp_charcoal_sateen_001.progressive.jpg?v=1581635666 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-camp-pant-in-olive-reverse-sateen">
              <span className="title">The Camp Pant</span>
              <span className="subtitle">in Olive Reverse Sateen</span>
            </a>
          </figcaption>
        </figure>
      </div>
      <div className="thumbnail-handle-wrapper " data-linked-to="denim">
        <figure>
          <a href="/products/the-democratic-jean-in-yamaashi-orimono-recover-selvage">
            <img
              alt="The Democratic Jean in Yamaashi Orimono Recover Selvage"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-DEMO-1_414x.progressive.jpg?v=1571334567"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-DEMO-1_600x.progressive.jpg?v=1571334567"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-DEMO-1_414x.progressive.jpg?v=1571334567 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-DEMO-1_600x.progressive.jpg?v=1571334567 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-DEMO-1_900x.progressive.jpg?v=1571334567 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-DEMO-1_1200x.progressive.jpg?v=1571334567 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-DEMO-1_1442x.progressive.jpg?v=1571334567 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-DEMO-1.progressive.jpg?v=1571334567 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-democratic-jean-in-yamaashi-orimono-recover-selvage">
              <span className="title">The Democratic Jean</span>
              <span className="subtitle">
                in Yamaashi Orimono Recover Selvage
              </span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-slim-jean-in-yamaashi-orimono-recover-selvage">
            <img
              alt="The Slim Jean in Yamaashi Orimono Recover Selvage"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-SLIM-1_414x.progressive.jpg?v=1571334229"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-SLIM-1_600x.progressive.jpg?v=1571334229"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-SLIM-1_414x.progressive.jpg?v=1571334229 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-SLIM-1_600x.progressive.jpg?v=1571334229 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-SLIM-1_900x.progressive.jpg?v=1571334229 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-SLIM-1_1200x.progressive.jpg?v=1571334229 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-SLIM-1_1442x.progressive.jpg?v=1571334229 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/JAPANESE-RECOVER-SLIM-1.progressive.jpg?v=1571334229 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-slim-jean-in-yamaashi-orimono-recover-selvage">
              <span className="title">The Slim Jean</span>
              <span className="subtitle">
                in Yamaashi Orimono Recover Selvage
              </span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-democratic-jean-in-green-cast-selvage">
            <img
              alt="The Democratic Jean in Green Cast Selvage"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_dem_jeans_green_cast_selvage_001_414x.progressive.jpg?v=1573759423"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_dem_jeans_green_cast_selvage_001_600x.progressive.jpg?v=1573759423"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_dem_jeans_green_cast_selvage_001_414x.progressive.jpg?v=1573759423 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_dem_jeans_green_cast_selvage_001_600x.progressive.jpg?v=1573759423 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_dem_jeans_green_cast_selvage_001_900x.progressive.jpg?v=1573759423 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_dem_jeans_green_cast_selvage_001_1200x.progressive.jpg?v=1573759423 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_dem_jeans_green_cast_selvage_001_1442x.progressive.jpg?v=1573759423 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_dem_jeans_green_cast_selvage_001.progressive.jpg?v=1573759423 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-democratic-jean-in-green-cast-selvage">
              <span className="title">The Democratic Jean</span>
              <span className="subtitle">in Green Cast Selvage</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-slim-jean-in-green-cast-selvage">
            <img
              alt="The Slim Jean in Green Cast Selvage"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_slim_jeans_green_cast_selvage_001_414x.progressive.jpg?v=1573761516"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_slim_jeans_green_cast_selvage_001_600x.progressive.jpg?v=1573761516"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_slim_jeans_green_cast_selvage_001_414x.progressive.jpg?v=1573761516 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_slim_jeans_green_cast_selvage_001_600x.progressive.jpg?v=1573761516 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_slim_jeans_green_cast_selvage_001_900x.progressive.jpg?v=1573761516 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_slim_jeans_green_cast_selvage_001_1200x.progressive.jpg?v=1573761516 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_slim_jeans_green_cast_selvage_001_1442x.progressive.jpg?v=1573761516 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_slim_jeans_green_cast_selvage_001.progressive.jpg?v=1573761516 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-slim-jean-in-green-cast-selvage">
              <span className="title">The Slim Jean</span>
              <span className="subtitle">in Green Cast Selvage</span>
            </a>
          </figcaption>
        </figure>
      </div>
      <div className="thumbnail-handle-wrapper " data-linked-to="outerwear">
        <figure>
          <a href="/products/the-gibson-jacket-in-gravel">
            <img
              alt="The Gibson Jacket in Gravel"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_gravel_001_414x.progressive.jpg?v=1582762283"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_gravel_001_600x.progressive.jpg?v=1582762283"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_gravel_001_414x.progressive.jpg?v=1582762283 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_gravel_001_600x.progressive.jpg?v=1582762283 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_gravel_001_900x.progressive.jpg?v=1582762283 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_gravel_001_1200x.progressive.jpg?v=1582762283 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_gravel_001_1442x.progressive.jpg?v=1582762283 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_gravel_001.progressive.jpg?v=1582762283 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-gibson-jacket-in-gravel">
              <span className="title">The Gibson Jacket</span>
              <span className="subtitle">in Gravel</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-gibson-jacket-in-navy">
            <img
              alt="The Gibson Jacket in Navy"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_navy_001_414x.progressive.jpg?v=1582762299"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_navy_001_600x.progressive.jpg?v=1582762299"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_navy_001_414x.progressive.jpg?v=1582762299 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_navy_001_600x.progressive.jpg?v=1582762299 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_navy_001_900x.progressive.jpg?v=1582762299 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_navy_001_1200x.progressive.jpg?v=1582762299 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_navy_001_1442x.progressive.jpg?v=1582762299 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_gibson_jacket_navy_001.progressive.jpg?v=1582762299 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-gibson-jacket-in-navy">
              <span className="title">The Gibson Jacket</span>
              <span className="subtitle">in Navy</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-moto-jacket-in-whiskey-steerhide">
            <img
              alt="The Moto Jacket in Whiskey Steerhide"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_whiskey_001_414x.progressive.jpg?v=1570080371"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_whiskey_001_600x.progressive.jpg?v=1570080371"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_whiskey_001_414x.progressive.jpg?v=1570080371 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_whiskey_001_600x.progressive.jpg?v=1570080371 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_whiskey_001_900x.progressive.jpg?v=1570080371 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_whiskey_001_1200x.progressive.jpg?v=1570080371 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_whiskey_001_1442x.progressive.jpg?v=1570080371 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_whiskey_001.progressive.jpg?v=1570080371 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-moto-jacket-in-whiskey-steerhide">
              <span className="title">The Moto Jacket</span>
              <span className="subtitle">in Whiskey Steerhide</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-moto-jacket-in-espresso-steerhide">
            <img
              alt="The Moto Jacket in Espresso Steerhide"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_espresso_001_414x.progressive.jpg?v=1570078841"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_espresso_001_600x.progressive.jpg?v=1570078841"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_espresso_001_414x.progressive.jpg?v=1570078841 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_espresso_001_600x.progressive.jpg?v=1570078841 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_espresso_001_900x.progressive.jpg?v=1570078841 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_espresso_001_1200x.progressive.jpg?v=1570078841 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_espresso_001_1442x.progressive.jpg?v=1570078841 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/moto_jacket_espresso_001.progressive.jpg?v=1570078841 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-moto-jacket-in-espresso-steerhide">
              <span className="title">The Moto Jacket</span>
              <span className="subtitle">in Espresso Steerhide</span>
            </a>
          </figcaption>
        </figure>
      </div>
      <div className="thumbnail-handle-wrapper " data-linked-to="footwear">
        <figure>
          <a href="/products/the-unlined-chukka-in-butterscotch-weatherproof-suede">
            <img
              alt="The Unlined Chukka in Butterscotch Weatherproof Suede"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_unlined_weatherproof_chukka_001_414x.progressive.jpg?v=1581551415"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_unlined_weatherproof_chukka_001_600x.progressive.jpg?v=1581551415"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_unlined_weatherproof_chukka_001_414x.progressive.jpg?v=1581551415 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_unlined_weatherproof_chukka_001_600x.progressive.jpg?v=1581551415 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_unlined_weatherproof_chukka_001_900x.progressive.jpg?v=1581551415 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_unlined_weatherproof_chukka_001_1200x.progressive.jpg?v=1581551415 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_unlined_weatherproof_chukka_001_1442x.progressive.jpg?v=1581551415 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_unlined_weatherproof_chukka_001.progressive.jpg?v=1581551415 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-unlined-chukka-in-butterscotch-weatherproof-suede">
              <span className="title">The Unlined Chukka</span>
              <span className="subtitle">in Butterscotch Weatherproof Suede</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-ranch-boot-in-espresso-grizzly">
            <img
              alt="The Ranch Boot in Espresso Grizzly"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_ranch_boot_espresso_001_414x.progressive.jpg?v=1571346770"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_ranch_boot_espresso_001_600x.progressive.jpg?v=1571346770"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_ranch_boot_espresso_001_414x.progressive.jpg?v=1571346770 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_ranch_boot_espresso_001_600x.progressive.jpg?v=1571346770 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_ranch_boot_espresso_001_900x.progressive.jpg?v=1571346770 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_ranch_boot_espresso_001_1200x.progressive.jpg?v=1571346770 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_ranch_boot_espresso_001_1442x.progressive.jpg?v=1571346770 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_ranch_boot_espresso_001.progressive.jpg?v=1571346770 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-ranch-boot-in-espresso-grizzly">
              <span className="title">The Ranch Boot</span>
              <span className="subtitle">in Espresso Grizzly</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-moto-boot-in-black-waterproof-nubuck">
            <img
              alt="The Moto Boot in Black Waterproof Nubuck"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/The_Moto_Boot_1_414x.progressive.jpg?v=1570728487"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/The_Moto_Boot_1_600x.progressive.jpg?v=1570728487"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/The_Moto_Boot_1_414x.progressive.jpg?v=1570728487 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/The_Moto_Boot_1_600x.progressive.jpg?v=1570728487 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/The_Moto_Boot_1_900x.progressive.jpg?v=1570728487 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/The_Moto_Boot_1_1200x.progressive.jpg?v=1570728487 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/The_Moto_Boot_1_1442x.progressive.jpg?v=1570728487 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/The_Moto_Boot_1.progressive.jpg?v=1570728487 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-moto-boot-in-black-waterproof-nubuck">
              <span className="title">The Moto Boot</span>
              <span className="subtitle">in Black Waterproof Nubuck</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-moto-boot-in-waterproof-snuff-suede">
            <img
              alt="The Moto Boot in Weatherproof Snuff Suede"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/motot_boot_selects-1_414x.progressive.jpg?v=1571785778"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/motot_boot_selects-1_600x.progressive.jpg?v=1571785778"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/motot_boot_selects-1_414x.progressive.jpg?v=1571785778 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/motot_boot_selects-1_600x.progressive.jpg?v=1571785778 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/motot_boot_selects-1_900x.progressive.jpg?v=1571785778 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/motot_boot_selects-1_1200x.progressive.jpg?v=1571785778 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/motot_boot_selects-1_1442x.progressive.jpg?v=1571785778 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/motot_boot_selects-1.progressive.jpg?v=1571785778 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-moto-boot-in-waterproof-snuff-suede">
              <span className="title">The Moto Boot</span>
              <span className="subtitle">in Weatherproof Snuff Suede</span>
            </a>
          </figcaption>
        </figure>
      </div>
      <div className="thumbnail-handle-wrapper " data-linked-to="essentials">
        <figure>
          <a href="/products/the-blue-everyday-oxford-jack">
            <img
              alt="The Jack in Blue Everyday Oxford"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-24_55aca5cb-f2ac-414b-b970-baf71e2b4c90_414x.progressive.jpg?v=1548354970"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-24_55aca5cb-f2ac-414b-b970-baf71e2b4c90_600x.progressive.jpg?v=1548354970"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-24_55aca5cb-f2ac-414b-b970-baf71e2b4c90_414x.progressive.jpg?v=1548354970 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-24_55aca5cb-f2ac-414b-b970-baf71e2b4c90_600x.progressive.jpg?v=1548354970 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-24_55aca5cb-f2ac-414b-b970-baf71e2b4c90_900x.progressive.jpg?v=1548354970 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-24_55aca5cb-f2ac-414b-b970-baf71e2b4c90_1200x.progressive.jpg?v=1548354970 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-24_55aca5cb-f2ac-414b-b970-baf71e2b4c90_1442x.progressive.jpg?v=1548354970 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-24_55aca5cb-f2ac-414b-b970-baf71e2b4c90.progressive.jpg?v=1548354970 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-blue-everyday-oxford-jack">
              <span className="title">The Jack</span>
              <span className="subtitle">in Blue Everyday Oxford</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-charcoal-everyday-oxford-jack">
            <img
              alt="The Jack in Charcoal Everyday Oxford"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-1_0937e172-2675-4514-bbf3-910d6509e76c_414x.progressive.jpg?v=1571447812"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-1_0937e172-2675-4514-bbf3-910d6509e76c_600x.progressive.jpg?v=1571447812"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-1_0937e172-2675-4514-bbf3-910d6509e76c_414x.progressive.jpg?v=1571447812 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-1_0937e172-2675-4514-bbf3-910d6509e76c_600x.progressive.jpg?v=1571447812 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-1_0937e172-2675-4514-bbf3-910d6509e76c_900x.progressive.jpg?v=1571447812 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-1_0937e172-2675-4514-bbf3-910d6509e76c_1200x.progressive.jpg?v=1571447812 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-1_0937e172-2675-4514-bbf3-910d6509e76c_1442x.progressive.jpg?v=1571447812 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/download-1_0937e172-2675-4514-bbf3-910d6509e76c.progressive.jpg?v=1571447812 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-charcoal-everyday-oxford-jack">
              <span className="title">The Jack</span>
              <span className="subtitle">in Charcoal Everyday Oxford</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-white-everyday-oxford-jack">
            <img
              alt="The Jack in White Everyday Oxford"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/jack_white_layflat_002_414x.progressive.jpg?v=1548194374"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/jack_white_layflat_002_600x.progressive.jpg?v=1548194374"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/jack_white_layflat_002_414x.progressive.jpg?v=1548194374 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/jack_white_layflat_002_600x.progressive.jpg?v=1548194374 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/jack_white_layflat_002_900x.progressive.jpg?v=1548194374 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/jack_white_layflat_002_1200x.progressive.jpg?v=1548194374 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/jack_white_layflat_002_1442x.progressive.jpg?v=1548194374 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/jack_white_layflat_002.progressive.jpg?v=1548194374 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-white-everyday-oxford-jack">
              <span className="title">The Jack</span>
              <span className="subtitle">in White Everyday Oxford</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/dark-indigo-star-jack-1">
            <img
              alt="The Jack in Indigo Star"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/indigo_star_jack_01_fe6e0279-3acd-4021-aca3-ce5d1d0955e1_414x.progressive.jpg?v=1548179637"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/indigo_star_jack_01_fe6e0279-3acd-4021-aca3-ce5d1d0955e1_600x.progressive.jpg?v=1548179637"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/indigo_star_jack_01_fe6e0279-3acd-4021-aca3-ce5d1d0955e1_414x.progressive.jpg?v=1548179637 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/indigo_star_jack_01_fe6e0279-3acd-4021-aca3-ce5d1d0955e1_600x.progressive.jpg?v=1548179637 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/indigo_star_jack_01_fe6e0279-3acd-4021-aca3-ce5d1d0955e1_900x.progressive.jpg?v=1548179637 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/indigo_star_jack_01_fe6e0279-3acd-4021-aca3-ce5d1d0955e1_1200x.progressive.jpg?v=1548179637 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/indigo_star_jack_01_fe6e0279-3acd-4021-aca3-ce5d1d0955e1_1442x.progressive.jpg?v=1548179637 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/indigo_star_jack_01_fe6e0279-3acd-4021-aca3-ce5d1d0955e1.progressive.jpg?v=1548179637 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/dark-indigo-star-jack-1">
              <span className="title">The Jack</span>
              <span className="subtitle">in Indigo Star</span>
            </a>
          </figcaption>
        </figure>
      </div>
      <div className="thumbnail-handle-wrapper " data-linked-to="accessories">
        <figure>
          <a href="/products/the-jack-mason-x-taylor-stitch-aviator-multi-scale-chronograph">
            <img
              alt="The Jack Mason x Taylor Stitch Aviator Multi‑Scale Chronograph"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_jack_mason_watch_001_414x.progressive.jpg?v=1572902058"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_jack_mason_watch_001_600x.progressive.jpg?v=1572902058"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_jack_mason_watch_001_414x.progressive.jpg?v=1572902058 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_jack_mason_watch_001_600x.progressive.jpg?v=1572902058 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_jack_mason_watch_001_900x.progressive.jpg?v=1572902058 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_jack_mason_watch_001_1200x.progressive.jpg?v=1572902058 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_jack_mason_watch_001_1442x.progressive.jpg?v=1572902058 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q419_product_jack_mason_watch_001.progressive.jpg?v=1572902058 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-jack-mason-x-taylor-stitch-aviator-multi-scale-chronograph">
              <span className="title">
                The Jack Mason x Taylor Stitch Aviator Multi‑Scale Chronograph
              </span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/the-wine-key-in-brass">
            <img
              alt="The Wine Key in Brass"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/HOLIDAY_PRODUCT-23_a4ed6939-9914-453a-a4ac-036de20aa4af_414x.progressive.jpg?v=1575935703"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/HOLIDAY_PRODUCT-23_a4ed6939-9914-453a-a4ac-036de20aa4af_600x.progressive.jpg?v=1575935703"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/HOLIDAY_PRODUCT-23_a4ed6939-9914-453a-a4ac-036de20aa4af_414x.progressive.jpg?v=1575935703 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/HOLIDAY_PRODUCT-23_a4ed6939-9914-453a-a4ac-036de20aa4af_600x.progressive.jpg?v=1575935703 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/HOLIDAY_PRODUCT-23_a4ed6939-9914-453a-a4ac-036de20aa4af_900x.progressive.jpg?v=1575935703 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/HOLIDAY_PRODUCT-23_a4ed6939-9914-453a-a4ac-036de20aa4af_1200x.progressive.jpg?v=1575935703 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/HOLIDAY_PRODUCT-23_a4ed6939-9914-453a-a4ac-036de20aa4af_1442x.progressive.jpg?v=1575935703 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/HOLIDAY_PRODUCT-23_a4ed6939-9914-453a-a4ac-036de20aa4af.progressive.jpg?v=1575935703 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/the-wine-key-in-brass">
              <span className="title">The Wine Key</span>
              <span className="subtitle">in Brass</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/keyhook-in-raw-brass">
            <img
              alt="Keyhook in Raw Brass"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/keyhook_03_414x.progressive.jpg?v=1485375465"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/keyhook_03_600x.progressive.jpg?v=1485375465"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/keyhook_03_414x.progressive.jpg?v=1485375465 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/keyhook_03_600x.progressive.jpg?v=1485375465 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/keyhook_03_900x.progressive.jpg?v=1485375465 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/keyhook_03_1200x.progressive.jpg?v=1485375465 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/keyhook_03_1442x.progressive.jpg?v=1485375465 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/keyhook_03.progressive.jpg?v=1485375465 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/keyhook-in-raw-brass">
              <span className="title">Keyhook</span>
              <span className="subtitle">in Raw Brass</span>
            </a>
          </figcaption>
        </figure>
        <figure>
          <a href="/products/gift-certificate">
            <img
              alt="Digital Gift Card"
              className="lazyload "
              src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/digitalgiftcard_ts18_product_01_c6133872-f24d-44d9-8fa0-b47aad4f3628_414x.progressive.jpg?v=1528323544"
              srcSet="//cdn.shopify.com/s/files/1/0070/1922/t/12/assets/icon-product-placeholder.svg?v=15159462499527815840"
              data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/digitalgiftcard_ts18_product_01_c6133872-f24d-44d9-8fa0-b47aad4f3628_600x.progressive.jpg?v=1528323544"
              data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/digitalgiftcard_ts18_product_01_c6133872-f24d-44d9-8fa0-b47aad4f3628_414x.progressive.jpg?v=1528323544 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/digitalgiftcard_ts18_product_01_c6133872-f24d-44d9-8fa0-b47aad4f3628_600x.progressive.jpg?v=1528323544 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/digitalgiftcard_ts18_product_01_c6133872-f24d-44d9-8fa0-b47aad4f3628_900x.progressive.jpg?v=1528323544 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/digitalgiftcard_ts18_product_01_c6133872-f24d-44d9-8fa0-b47aad4f3628_1200x.progressive.jpg?v=1528323544 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/digitalgiftcard_ts18_product_01_c6133872-f24d-44d9-8fa0-b47aad4f3628_1442x.progressive.jpg?v=1528323544 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/digitalgiftcard_ts18_product_01_c6133872-f24d-44d9-8fa0-b47aad4f3628.progressive.jpg?v=1528323544 1980w"
              data-sizes="auto"
            />
          </a>
          <figcaption>
            <a href="/products/gift-certificate">
              <span className="title">Digital Gift Card</span>
            </a>
          </figcaption>
        </figure>
      </div> */}
    </Container>
  )
}

export default MMThumbnails
