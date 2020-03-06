import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  figure {
    animation: figureShow 1.2s forwards;
    opacity: 0;
    transform: translate(0, 25px);
    width: 24%;

    :nth-child(1) {
      animation-delay: 0ms;
    }
    :nth-child(2) {
      animation-delay: 300ms;
    }
    :nth-child(3) {
      animation-delay: 600ms;
    }
    :nth-child(4) {
      animation-delay: 900ms;
    }

    a {
      text-decoration: none;
      width: 100%;
    }

    img {
      width: 100%;
    }

    figcaption a {
      font-size: 12px;
      line-height: 18px;
      padding: 1em 0;

      .title,
      .subtitle {
        display: block;
        width: 100%;
      }

      .title {
        font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
          "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
          "Lucida Grande", sans-serif;
        font-size: inherit;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      .subtitle {
        font-family: "CD", Georgia, Times, "Times New Roman", serif;
        font-style: normal;
        font-weight: 300;
        letter-spacing: 0;
      }
    }
  }

  @keyframes figureShow {
    from {
      opacity: 0;
      transform: translate(0, 25px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`

export default Container
