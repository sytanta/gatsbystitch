import styled from "styled-components"

import { breakpoints } from "../theme"

const HeaderMobile = styled.div`
  display: none;
  justify-content: space-between;
  height: 43px;
  width: 100%;

  & > * {
    color: #ffffff;
    cursor: pointer;
  }

  a:hover {
    color: #ffffff;
  }

  .open-left {
    height: 43px;
    padding-left: 12px;
    padding-right: 12px;
    width: 38px;
  }

  .lock-up {
    padding-top: 2px;
    width: 45px;
    height: 43px;
  }

  .changelog-count-container {
    padding-right: 12px;
    position: relative;
    text-align: right;
    text-decoration: none;
    width: 38px;

    sup {
      background: #4573a7;
      border: 1px solid #4573a7;
      border-radius: 100%;
      color: #fff;
      display: inline-block;
      font-family: "ANW", "AN", Avenir,
        "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
        Helvetica, Arial, "Lucida Grande", sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0;
      line-height: calc(22px - 2px);
      height: 22px;
      position: relative;
      right: 0;
      top: 0;
      vertical-align: baseline;
      width: 22px;
      text-align: center;
      transform: translateY(50%);
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    display: flex;
  }
`

export default HeaderMobile
