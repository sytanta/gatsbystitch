import styled from "styled-components"

import { breakpoints } from "../theme"

const Container = styled.div`
  .rte {
    text-align: left;
  }

  &.page-legal .rte {
    column-count: 2;
    column-gap: 96px;
    padding-bottom: 4rem;
    padding-top: 4rem;

    h2 {
      break-inside: avoid;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 300;
      letter-spacing: 0;
      line-height: 1.22034;
      margin-bottom: 1em;
      margin-top: 2em;
      page-break-after: avoid;
      page-break-before: always;

      :first-of-type {
        margin-top: 0;
      }
    }

    p {
      break-inside: avoid;
      margin: 0 0 1em;
      page-break-after: avoid;
      page-break-before: avoid;
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    &.page-legal .rte {
      column-count: 1;
    }
  }
`

export default Container
