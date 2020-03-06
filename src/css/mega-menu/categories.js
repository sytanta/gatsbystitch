import styled from "styled-components"

const Container = styled.div`
  flex-basis: 15.79732%;

  h2 {
    font-size: 0.7rem;
    letter-spacing: 0.14em;
    line-height: 1.22034;
    margin-bottom: 1.5rem;
    margin-top: 4rem;
    text-transform: uppercase;
  }

  ul {
    margin: 2em 0;

    li {
      display: block;
    }

    a {
      color: #363636;
      display: block;
      font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
        "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
        "Lucida Grande", sans-serif;
      font-size: 0.9rem;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0.14em;
      line-height: 3.55556;
      text-transform: uppercase;

      &.item-active,
      &:hover {
        color: #b5aa8f !important;
      }
    }
  }
`

export default Container
