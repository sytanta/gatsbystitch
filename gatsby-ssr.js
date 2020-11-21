const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.12.0/css/all.css"
    />,
    <link
      rel="stylesheet"
      href="https://unpkg.com/swiper/swiper-bundle.min.css"
    />,
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>,
  ])
}
