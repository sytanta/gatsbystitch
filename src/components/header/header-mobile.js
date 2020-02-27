import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "../../css/header-mobile"

import UIContext from "../../context/ui-context"

const HeaderMobile = ({ siteTitle }) => {
  const { toggleDrawerLeft, toggleDrawerRight } = useContext(UIContext)

  return (
    <Container className="header-mobile">
      <div
        className="open-left"
        title="Open Main Nav Menu"
        onClick={toggleDrawerLeft}
      >
        <svg
          className="icon icon-nav-menu"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 400 315.39"
          id="icon-nav-menu"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0 0h400v53.85H0zM0 130.77h400v53.85H0zM0 261.54h400v53.85H0z"
          ></path>
        </svg>
      </div>
      <a href="/" className="lock-up home-link" title={siteTitle}>
        <svg
          className="icon icon-brand-logo"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 407.55 145.42"
          id="icon-brand-logo"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M51.7 92.55c-3.43 0-5.54-1.85-5.54-8.31V58.5h14.77V47.3H46.16V25.92H32.83V47.3h-8.3v11.2h8.31V84c0 14.79 7.26 20.07 17 20.07 7.52 0 11.61-2.78 14.39-5.27l-5.54-9.11a10.23 10.23 0 01-6.99 2.86z"
          ></path>
          <path
            fill="currentColor"
            d="M91.8 69.2C83.09 67 79.66 66 79.66 61.81c0-3.31 2.77-5.15 7.79-5.15a15 15 0 0111.48 5.4l7.77-7.65a25.15 25.15 0 00-19.25-8.31c-11 0-19.79 5.28-19.79 16.36s8.18 14.77 16.36 17c9.37 2.64 13.45 3.31 13.45 7.79 0 3.7-3 5.93-9.76 5.93-6.34 0-11.49-2.23-14.91-7.12l-9.1 6.36c3.69 5.93 12.14 11.47 24.81 11.47 15.69 0 21.5-7.77 21.5-17.28-.01-11.75-9.5-15.18-18.21-17.41z"
          ></path>
          <path
            fill="currentColor"
            d="M114.36 19.63A67 67 0 10134 67a66.84 66.84 0 00-19.64-47.37zm-6.24 88.5a58.15 58.15 0 1117-41.13 57.93 57.93 0 01-17.01 41.13zM176.54 83.57a.91.91 0 01-1.44 0 3 3 0 01-.8-1.91l2.24-1.74 3.17-4.13s5.25-6 5.41-6.52a32.47 32.47 0 00.64-3.5c0-.32-1.28-1.59-1.28-1.59a11.77 11.77 0 011.28-2.76c.74-1.06 4.35-7.84 6.45-9.75 0 0-.1-7.42 2.65-8.38s4.14 2.54 5.62 2.54a9.81 9.81 0 002.76-.42l2.22-4.13s2.35-2.33 3.51-2 3 1.6 3.07 2.24 1.28.42 1.92 0 5.71-5.51 11.44-7.74a124 124 0 0012.41-5.93s13.56-8.8 16.63-9.12 9.33-2.22 16.54-.63a51.93 51.93 0 0113.47 5.31s6.46 5.08 27.88.42 34.65.42 34.65.42 22.27 6.75 31.38 21.27c0 0 8.17 9.65 7.84 13.35 0 0 .11 1.6-.53 2a2.51 2.51 0 00-.85.85s2.45 7 2.86 8.48 1.6 7 1.6 7l.84 1.7s.54 8.47.74 9.32 1.28 8.06 1.49 8.59 1.49 5.61 2.54 7.1 2.65 4.24 3.08 5a19.44 19.44 0 011.69 4.67c0 .85.76 4.88 0 5.93s-3.17 2-3.38 2.33a57.81 57.81 0 01-5.93 4.24c-1.06.52-2.33 0-3.07.1s-6.26.13-6.26.13l-2.22-.45-1.91-.21-3 .66a2 2 0 011-1.29 5.06 5.06 0 00-2.76.63s1.17-2.33 1.69-2.44c0 0-2.11.43-2.33 1.17 0 0 .74-3.29 3.51-4.24s5.41-1.69 5.83-1.81 2.65-.74 2.65-.74l1.38-1.8a2.64 2.64 0 00-.32-1.49c-.41-.84-3.49-1.58-3.92-1.7a53.08 53.08 0 01-9.75-1.9c-4-1.38-9.86-4.77-11.14-11.13l-6.88 4.77-1.48.32-2.23 2.43-1.6.74-.63 1.59-1.69.1a4.58 4.58 0 01-.74 1.49c-.42.42-3.72 2.65-3.72 2.65l-1.26 2.86s-2.76 2.76-3.08 2.86-3.51 4-3.6 4.67-.54 1.37-1.07 1.47-8.27 1-8.9.77-4.67 1.25-5.09 1.25-5 .32-5.52 0-2.54-.42-2.74-.74a2.37 2.37 0 00-2.87-.1s-.42-1.18.22-1.49c0 0-2.23.31-2.65 1.06a3.16 3.16 0 01.63-1.91s-1.6.85-1.7 1.48c0 0-.31-1.16 0-1.59s-1.69.64-1.9 1.06c0 0 0-1.48.85-1.8l-1.58.85s1.47-3.5 4.66-4.45 3.5-1.48 7.74-1.81 6-1.79 6.36-2.22-1-6.47-.85-7.11-.85-9.75-.63-10.81 1.38-5.62 1.17-6.16-1.38-.52-1.38-.52-3.92.52-5.31.52-8.36-1.06-8.36-1.06h-6c-.42 0 .86 4.46 1.81 6.36s2.22 4.56 2.22 4.56a29.29 29.29 0 011.92 4.78c.1 1.06-1 5.5-2 6.78a18.08 18.08 0 00-2.54 5.31 5.33 5.33 0 01-1.91 2.86 20.57 20.57 0 01-5.19 1.28c-2.22.21-3.81-.32-5-.11a33.62 33.62 0 01-4.19.63c-1.06 0-4.35-.43-4.88-.21l-2.33 1-.85-.11 1.17-1.49-1.7.42 1.49-1.69-1.7.32s3.18-3.92 4.77-4.77 6.05-1.58 7.11-1.79a1.66 1.66 0 001.16-2c-.21-.53-3-2.54-3.92-3.71s-4.24-4-4.24-4l-4.56-4.35s-3-2.33-3-2.65-2-3.71-2.54-3.4a67.62 67.62 0 00-4.14 5.41s-3.08 4.13-3.6 4.67-6 5.5-6 5.5L245 118.46s-7.75 5.71-8.38 6-4.35 2.44-4.77 2.65a24.42 24.42 0 00-2.12 1.7 28.27 28.27 0 01-5.51.32 19.32 19.32 0 00-5.73.74c-.43.11-4.35.32-4.88 0s-1.9-1.15-4.56.17a3.2 3.2 0 01.86-2.08l-4 .85s.52-1.8 1.28-2.22c0 0-2.65.31-3.08.85a5.41 5.41 0 01-2 1 21 21 0 012-3.18c.53-.43 2.65-1.49 2.65-1.81s4.56-3.39 5.62-3.49 5.93-.32 6.25-.43a15.73 15.73 0 004.25-5.62 16.47 16.47 0 014.35-5.4s5.83-6.57 5.93-7 3.49-9.22 3.92-11.45a50 50 0 012.13-6.47c.2-.64.53-3.49.53-3.49s-.21-1.16-3.28-.54-7.11 1.6-7.53 1.81-4.14 1.7-4.14 1.7a19.19 19.19 0 01-2.65 1.69 16.28 16.28 0 00-2.86 2.12 4.18 4.18 0 00-2.12-.41 5.87 5.87 0 00-2.57 2.53 6 6 0 01-1.7 2.54 33.78 33.78 0 00-3.4 3.28s-.94-2-1.8-2.44a22.51 22.51 0 00-4.69-1.06c-.53 0-3.7.52-5 1.6a10 10 0 01-6.25 1.79c-2.12-.2-3.51-.53-3.82-1.06a7.77 7.77 0 01-.53-2.44c0-.33-.31-1.81-.31-1.81l1.15.43.12-1.27 1.06 1a8.15 8.15 0 00.21-1.18 8.34 8.34 0 011.37-2.44c.42-.42 1.49-1.49 1.27-2s-3.39 1-3.91 1.69-2.65 1.18-2.65 1.18l.2 1.58-2.12-1.49s-4.93.27-7.2-2.22z"
          ></path>
        </svg>
      </a>
      <div
        id="open-right-changelog"
        className="open-right-drawer open-changelog changelog-count-container"
        onClick={toggleDrawerRight}
      >
        <sup className="changelog-count">5</sup>
      </div>
    </Container>
  )
}

export default HeaderMobile
