import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { breakpoints } from "../../theme"

const Container = styled.aside`
  align-items: center;
  display: flex;
  flex-basis: 100%;
  flex-flow: row nowrap;
  font-size: 1.7rem;
  justify-content: space-between;
  order: 3;
  padding-bottom: 0 !important;
  padding-top: 1em;
  width: 100%;

  p {
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    display: inline-flex;
    flex-basis: 49.33333%;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.08em;
    margin: 0;
    order: 1;
    padding: 0;

    a {
      padding-left: 1.5em;
      text-decoration: none;
    }
  }

  .social {
    flex-basis: 49.33333%;
    margin: 0;
    order: 2;
    padding: 0 110px 0 0;

    li {
      display: inline;
      margin: 0 22px 0 0;
      position: relative;
      top: 3px;

      i {
        display: inline-block;
        height: 16px;
        width: 16px;
      }
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    display: block;
    padding-bottom: 4rem !important;
    padding-top: 0;

    p {
      display: none;
    }

    .social {
      padding-right: 0;
    }
  }
`

const Aside = () => (
  <Container>
    <ul className="social">
      <li>
        <a
          href="https://instagram.com/taylorstitch"
          target="_blank"
          rel="noopener"
          title="Instagram"
        >
          <i>
            <svg
              className="icon icon-social-instagram"
              role="img"
              aria-label="Social instagram"
              focusable="false"
              viewBox="0 0 400 400"
              aria-labelledby="bficon-social-instagram-desc bficon-social-instagram-title"
              id="icon-social-instagram"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="bficon-social-instagram-title">Instagram</title>
              <desc id="bficon-social-instagram-desc">
                Icon for the social media network, a stylized camera.
              </desc>
              <path
                fill="currentColor"
                d="M294.57 0H105.43C47.45 0 0 48.46 0 107.67v184.66C0 351.54 47.45 400 105.43 400h189.14c58 0 105.43-48.46 105.43-107.67V107.67C400 48.46 352.55 0 294.57 0zm69.66 289.65c0 41-32.85 74.54-73 74.54H108.8c-40.15 0-73-33.54-73-74.54v-179.3c0-41 32.88-74.58 73-74.58h182.4c40.15 0 73 33.58 73 74.58z"
              ></path>
              <path
                fill="currentColor"
                d="M200 97.29c-55.54 0-100.57 46-100.57 102.71s45 102.71 100.57 102.71 100.54-46 100.54-102.73S255.53 97.29 200 97.29zm0 169c-35.84 0-64.88-29.67-64.88-66.26s29-66.26 64.89-66.27S264.9 163.41 264.9 200s-29.12 66.26-64.9 66.27z"
              ></path>
              <ellipse
                fill="currentColor"
                cx="200"
                cy="200"
                rx="22.71"
                ry="23.2"
              ></ellipse>
            </svg>
          </i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/tan-sy-688b8a87/"
          target="_blank"
          rel="noopener"
          title="Facebook"
        >
          <i>
            <svg
              className="icon icon-social-facebook"
              role="img"
              aria-label="Social facebook"
              focusable="false"
              viewBox="0 0 186.68 400"
              aria-labelledby="beicon-social-facebook-desc beicon-social-facebook-title"
              id="icon-social-facebook"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="beicon-social-facebook-title">Facebook</title>
              <desc id="beicon-social-facebook-desc">
                Icon for the social media network, a lowercase letter f.
              </desc>
              <path
                fill="currentColor"
                d="M240 80h53.34V0H232c-87 0-85 70.1-85 80.56v52.78h-40.34v80H147V400h79.63V213.34H280l13.34-80h-66.68v-40c0-8.76 5-13.34 13.34-13.34z"
              ></path>
            </svg>
          </i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/tan-sy-688b8a87/"
          target="_blank"
          rel="noopener"
          title="Twitter"
        >
          <i>
            <svg
              className="icon icon-social-twitter"
              role="img"
              aria-label="Social twitter"
              focusable="false"
              viewBox="0 0 400 333.32"
              aria-labelledby="biicon-social-twitter-desc biicon-social-twitter-title"
              id="icon-social-twitter"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="biicon-social-twitter-title">Twitter</title>
              <desc id="biicon-social-twitter-desc">
                Icon for the social media network, a bird silhouette.
              </desc>
              <path
                fill="currentColor"
                d="M389 39.5a161.62 161.62 0 01-52.15 20.42 80.93 80.93 0 00-59.88-26.58c-45.28 0-82 37.68-82 84.15a85.84 85.84 0 002.03 19.16c-68.21-3.52-128.66-37-169.16-88A85.67 85.67 0 0016.74 91a84.69 84.69 0 0036.51 70 80.56 80.56 0 01-37.19-10.5v1c0 40.78 28.29 74.8 65.85 82.51a78.24 78.24 0 01-21.62 2.95 79.74 79.74 0 01-15.45-1.49C55.32 269 85.6 293.35 121.52 294a162 162 0 01-101.91 36A164.21 164.21 0 010 328.88a228.47 228.47 0 00125.81 37.78c151 0 233.51-128.19 233.51-239.36 0-3.66-.07-7.35-.21-10.91A168.45 168.45 0 00400 72.8 160.31 160.31 0 01352.88 86 84 84 0 00389 39.5z"
              ></path>
            </svg>
          </i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/tan-sy-688b8a87/"
          target="_blank"
          rel="noopener"
          title="Pinterest"
        >
          <i>
            <svg
              className="icon icon-social-pinterest"
              role="img"
              aria-label="Social pinterest"
              focusable="false"
              viewBox="0 0 317.5 400.84"
              aria-labelledby="bgicon-social-pinterest-desc bgicon-social-pinterest-title"
              id="icon-social-pinterest"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="bgicon-social-pinterest-title">Pinterest</title>
              <desc id="bgicon-social-pinterest-desc">
                Icon for the social media network, a stylized letter p.
              </desc>
              <path
                fill="currentColor"
                d="M168.39 0C55.6 0 0 78.27 0 143.52c0 39.53 14.14 74.67 47.3 87.8 5.46 2.15 10.33.05 11.89-5.77 1.09-4 3.7-14.21 4.86-18.44 1.6-5.76 1-7.78-3.42-12.81C51.08 183.4 45 169.25 45 149.25c0-58.07 44.88-110 116.9-110 63.76 0 98.79 37.7 98.79 88.05 0 66.26-30.29 126.07-75.27 126.07-24.83 0-43.42-23.78-37.49-48.17C155.05 176 172 144.64 172 123.63c0-18.8-11.67-30.29-35.18-30.29C107.58 93.33 92 114.56 92 148.62c0 21.66 6.6 36.35 6.6 36.35s-28.21 106.14-30.5 125.2c-4.69 39-1.38 82.7-.73 87.31.4 2.73 4 3.36 5.65 1.31 2.34-2.95 32.55-39.08 42.87-75.18 2.92-10.22 16.69-63.17 16.69-63.17 8.27 15.22 32.36 32.89 58 32.89 76.32 0 126.91-71.59 126.91-161.72C317.5 63.46 259 0 168.39 0z"
              ></path>
            </svg>
          </i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/tan-sy-688b8a87/"
          target="_blank"
          rel="noopener"
          title="Spotify"
        >
          <i>
            <svg
              className="icon icon-social-spotify"
              role="img"
              aria-label="Social spotify"
              focusable="false"
              viewBox="0 0 400 400"
              aria-labelledby="bhicon-social-spotify-desc bhicon-social-spotify-title"
              id="icon-social-spotify"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="bhicon-social-spotify-title">Spotify</title>
              <desc id="bhicon-social-spotify-desc">
                Icon for the music streaming service, a stylized speaker.
              </desc>
              <path
                fill="currentColor"
                d="M200 0C89.54 0 0 89.54 0 200s89.54 200 200 200 200-89.54 200-200S310.46 0 200 0zm91.72 288.47a12.46 12.46 0 01-17.14 4.15c-47-28.71-106.08-35.19-175.7-19.29A12.46 12.46 0 1193.34 249c76.18-17.42 141.54-9.92 194.25 22.29a12.47 12.47 0 014.13 17.18zM316.19 234a15.6 15.6 0 01-21.45 5.13C241 206.11 159 196.54 95.45 215.84A15.59 15.59 0 1186.39 186c72.64-22 162.94-11.37 224.67 26.57a15.59 15.59 0 015.13 21.43zm2.11-56.71C253.84 139 147.5 135.5 86 154.18a18.71 18.71 0 11-10.86-35.8c70.65-21.45 188.09-17.3 262.31 26.75a18.71 18.71 0 01-19.09 32.17z"
              ></path>
            </svg>
          </i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/tan-sy-688b8a87/"
          target="_blank"
          rel="noopener"
          title="vsco grid"
        >
          <i>
            <svg
              className="icon icon-social-vsco-grid"
              role="img"
              aria-label="Social vsco grid"
              focusable="false"
              viewBox="0 0 420.53 420.53"
              aria-labelledby="bjicon-social-vsco-grid-desc bjicon-social-vsco-grid-title"
              id="icon-social-vsco-grid"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="bjicon-social-vsco-grid-title">VSCO</title>
              <desc id="bjicon-social-vsco-grid-desc">
                Icon for the social media network, dot-formed diamond.
              </desc>
              <circle
                fill="currentColor"
                cx="200"
                cy="24.78"
                r="24.78"
                transform="rotate(-45 200.003 24.776)"
              ></circle>
              <circle
                fill="currentColor"
                cx="287.61"
                cy="112.39"
                r="24.78"
                transform="rotate(-45 287.612 112.387)"
              ></circle>
              <circle
                fill="currentColor"
                cx="375.22"
                cy="200"
                r="24.78"
                transform="rotate(-45 375.222 199.998)"
              ></circle>
              <circle
                fill="currentColor"
                cx="112.39"
                cy="112.39"
                r="24.78"
                transform="rotate(-45 112.392 112.386)"
              ></circle>
              <circle
                fill="currentColor"
                cx="200"
                cy="200"
                r="24.78"
                transform="rotate(-45 200.001 199.997)"
              ></circle>
              <circle
                fill="currentColor"
                cx="287.61"
                cy="287.61"
                r="24.78"
                transform="rotate(-45 287.611 287.608)"
              ></circle>
              <circle
                fill="currentColor"
                cx="24.78"
                cy="200"
                r="24.78"
                transform="rotate(-45 24.78 199.995)"
              ></circle>
              <circle
                fill="currentColor"
                cx="112.39"
                cy="287.61"
                r="24.78"
                transform="rotate(-45 112.39 287.606)"
              ></circle>
              <circle
                fill="currentColor"
                cx="200"
                cy="375.22"
                r="24.78"
                transform="rotate(-45 200 375.217)"
              ></circle>
            </svg>
          </i>
        </a>
      </li>
    </ul>
    <p>
      <span>©2009–2020 Taylor Stitch®</span>
      <Link to="/pages/terms-and-conditions" title="">
        Terms
      </Link>
      <Link to="/pages/privacy-policy" title="">
        Privacy
      </Link>
      <a href="https://careers.smartrecruiters.com/TaylorStitch" title="">
        Careers
      </a>
      <Link to="/blogs/dispatches" title="">
        Blog
      </Link>
      <Link to="/pages/offers" title="">
        Offers
      </Link>
    </p>
  </Container>
)

export default Aside
