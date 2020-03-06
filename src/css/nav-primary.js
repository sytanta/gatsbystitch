import styled from "styled-components"

const Container = styled.nav`
  font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
    "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande",
    sans-serif;
  font-size: 10px;
  float: left;
  line-height: 19px;
  margin-top: 4px;
  text-align: right;
  z-index: 1;

  .top-level {
    text-align: left;
  }

  li {
    display: inline-block;
  }

  .top-level > li > a {
    padding-left: 1.75em;
    padding-right: 1.75em;
    position: relative;
    z-index: 1;
  }

  .utility-icon a,
  .utility-icon button {
    display: inline-block;
    height: 16px;
    position: relative;
    top: 3px;
    width: 16px;
  }
`

export default Container
