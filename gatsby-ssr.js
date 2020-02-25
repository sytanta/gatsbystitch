const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="stylesheet"
      href="https://unpkg.com/swiper/css/swiper.min.css"
    />,
    <script src="https://unpkg.com/swiper/js/swiper.min.js"></script>,
  ])
}
