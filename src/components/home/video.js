import React from "react"
import styled from "styled-components"

const Container = styled.figure`
  margin-bottom: 0 !important;

  video {
    left: 50%;
    height: calc(100% + 1px);
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 1px);
    z-index: 1;
  }
`

const Video = () => (
  <Container className="large-overlay text-white">
    <a href="/about" title="Footage of our founders and our products.">
      <video
        src="/videos/taylorstitch.mp4"
        className="lazyloaded"
        data-poster=""
        autoPlay
        preload="auto"
        playsInline={true}
        muted={true}
        loop
        role="region"
        aria-label="Video Player"
        title="We’re making the world’s best apparel and asking questions about how we can protect wild,&nbsp;forever."
        data-expand="-10"
      ></video>
    </a>
    <figcaption>
      <a href="/pages/about-us">
        <span className="pre-heading">Responsibly Built For The Long Haul</span>
        <span className="heading">
          We’re making the world’s best apparel and asking questions about how
          we can protect wild,&nbsp;forever.
        </span>
        <span className="cta">
          <u>LEARN MORE</u>
        </span>
      </a>
    </figcaption>
  </Container>
)

export default Video
