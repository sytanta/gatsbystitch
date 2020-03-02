const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="fontawesome"
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.12.0/css/all.css"
    />,
    <link
      key="swiper"
      rel="stylesheet"
      href="https://unpkg.com/swiper/css/swiper.min.css"
    />,
    <script src="https://unpkg.com/swiper/js/swiper.min.js"></script>,
  ])
}
