import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "../../css/mega-menu/thumbnail-item"

const MMThumbnailItem = ({ images }) => (
  <Container>
    {images.map(({ node: item }) => {
      const srcset = item.images
        .map(image => {
          return `${image.file.url} ${image.file.details.image.width}w`
        })
        .join(",")

      return (
        <figure key={item.id}>
          <Link to={item.link}>
            <img alt={item.alt} srcSet={srcset} />
          </Link>
          <figcaption>
            <Link to={item.link}>
              <span className="title">{item.title}</span>
              <span className="subtitle">{item.subtitle}</span>
            </Link>
          </figcaption>
        </figure>
      )
    })}
    {/* <figure>
      <a href="/products/the-short-sleeve-jack-in-indigo-star">
        <img
          alt="The Short Sleeve Jack in Indigo Star"
          className="lazypreload lazyautosizes ls-is-cached lazyloaded"
          srcSet="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009_414x.progressive.jpg?v=1583179001 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009_600x.progressive.jpg?v=1583179001 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009_900x.progressive.jpg?v=1583179001 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009_1200x.progressive.jpg?v=1583179001 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009_1442x.progressive.jpg?v=1583179001 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009.progressive.jpg?v=1583179001 1980w"
          data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009_600x.progressive.jpg?v=1583179001"
          data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009_414x.progressive.jpg?v=1583179001 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009_600x.progressive.jpg?v=1583179001 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009_900x.progressive.jpg?v=1583179001 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009_1200x.progressive.jpg?v=1583179001 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009_1442x.progressive.jpg?v=1583179001 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009.progressive.jpg?v=1583179001 1980w"
          data-sizes="auto"
          sizes="198px"
          src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_ss_jack_indigo_star_009_600x.progressive.jpg?v=1583179001"
        />
      </a>
      <figcaption>
        <a href="/products/the-short-sleeve-jack-in-indigo-star">
          <span className="title">The Short Sleeve Jack</span>
          <span className="subtitle">in Indigo Star</span>
        </a>
      </figcaption>
    </figure>
    <figure>
      <a href="/products/the-jack-in-straw-everyday-oxford">
        <img
          alt="The Jack in Straw Everyday Oxford"
          className="lazypreload lazyautosizes ls-is-cached lazyloaded"
          srcSet="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001_414x.progressive.jpg?v=1582911723 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001_600x.progressive.jpg?v=1582911723 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001_900x.progressive.jpg?v=1582911723 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001_1200x.progressive.jpg?v=1582911723 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001_1442x.progressive.jpg?v=1582911723 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001.progressive.jpg?v=1582911723 1980w"
          data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001_600x.progressive.jpg?v=1582911723"
          data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001_414x.progressive.jpg?v=1582911723 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001_600x.progressive.jpg?v=1582911723 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001_900x.progressive.jpg?v=1582911723 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001_1200x.progressive.jpg?v=1582911723 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001_1442x.progressive.jpg?v=1582911723 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001.progressive.jpg?v=1582911723 1980w"
          data-sizes="auto"
          sizes="198px"
          src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/instock_mens_Q120_product_straw_jack_001_600x.progressive.jpg?v=1582911723"
        />
      </a>
      <figcaption>
        <a href="/products/the-jack-in-straw-everyday-oxford">
          <span className="title">The Jack</span>
          <span className="subtitle">in Straw Everyday Oxford</span>
        </a>
      </figcaption>
    </figure>
    <figure>
      <a href="/products/the-jack-in-ash-hemp-melange">
        <img
          alt="The Jack in Ash Hemp Melange"
          className="lazypreload lazyautosizes ls-is-cached lazyloaded"
          srcSet="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001_414x.progressive.jpg?v=1582156177 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001_600x.progressive.jpg?v=1582156177 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001_900x.progressive.jpg?v=1582156177 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001_1200x.progressive.jpg?v=1582156177 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001_1442x.progressive.jpg?v=1582156177 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001.progressive.jpg?v=1582156177 1980w"
          data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001_600x.progressive.jpg?v=1582156177"
          data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001_414x.progressive.jpg?v=1582156177 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001_600x.progressive.jpg?v=1582156177 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001_900x.progressive.jpg?v=1582156177 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001_1200x.progressive.jpg?v=1582156177 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001_1442x.progressive.jpg?v=1582156177 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001.progressive.jpg?v=1582156177 1980w"
          data-sizes="auto"
          sizes="198px"
          src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_jack_ash_melange_001_600x.progressive.jpg?v=1582156177"
        />
      </a>
      <figcaption>
        <a href="/products/the-jack-in-ash-hemp-melange">
          <span className="title">The Jack</span>
          <span className="subtitle">in Ash Hemp Melange</span>
        </a>
      </figcaption>
    </figure>
    <figure>
      <a href="/products/the-california-in-navy-plaid">
        <img
          alt="The California in Navy Plaid"
          className="lazypreload lazyautosizes ls-is-cached lazyloaded"
          srcSet="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001_414x.progressive.jpg?v=1582156564 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001_600x.progressive.jpg?v=1582156564 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001_900x.progressive.jpg?v=1582156564 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001_1200x.progressive.jpg?v=1582156564 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001_1442x.progressive.jpg?v=1582156564 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001.progressive.jpg?v=1582156564 1980w"
          data-src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001_600x.progressive.jpg?v=1582156564"
          data-srcset="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001_414x.progressive.jpg?v=1582156564 414w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001_600x.progressive.jpg?v=1582156564 600w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001_900x.progressive.jpg?v=1582156564 900w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001_1200x.progressive.jpg?v=1582156564 1200w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001_1442x.progressive.jpg?v=1582156564 1442w,https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001.progressive.jpg?v=1582156564 1980w"
          data-sizes="auto"
          sizes="198px"
          src="https://ik.imagekit.io/ts/s/files/1/0070/1922/products/workshop_mens_Q120_product_california_navy_plaid_001_600x.progressive.jpg?v=1582156564"
        />
      </a>
      <figcaption>
        <a href="/products/the-california-in-navy-plaid">
          <span className="title">The California</span>
          <span className="subtitle">in Navy Plaid</span>
        </a>
      </figcaption>
    </figure> */}
  </Container>
)

export default MMThumbnailItem
