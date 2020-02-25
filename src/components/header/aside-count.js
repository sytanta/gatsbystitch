import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import UIContext from "../../context/ui-context"

const Container = styled.li`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`

const ContainerInner = styled.div`
  cursor: pointer;
  padding-right: 0;
  position: relative;
  text-align: right;
  width: auto;

  span {
    display: inline;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.14em;
    line-height: 50px;

    &.changelog-descriptor {
      margin-right: calc(22px * 1.25);
    }
  }

  sup {
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light", "Helvetica Neue Light",
      "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    position: relative;
    transform: translateY(0) translateX(-50%);

    top: 0;
    right: 0;
    display: inline-block;
    width: 22px;
    height: 22px;
    border: 1px solid #4573a7;
    border-radius: 100%;
    background: #4573a7;
    color: #fff;
    text-align: center;
    font-weight: 700;
    letter-spacing: 0;
    font-size: 11px;
    line-height: calc(22px - 2px);
    vertical-align: baseline;
  }
`

const AsideCount = () => {
  const { toggleDrawerRight } = useContext(UIContext)

  return (
    <Container>
      <ContainerInner
        onClick={toggleDrawerRight}
        className="open-right-drawer changelog-count-container open-changelog"
        data-section-to-show="#right-drawer-changelog"
      >
        <span className="changelog-new-indicator" style={{ display: "none" }}>
          New&nbsp;
        </span>
        <span className="changelog-descriptor">Messages</span>
        <sup className="changelog-count">5</sup>
      </ContainerInner>
    </Container>
  )
}

export default AsideCount
