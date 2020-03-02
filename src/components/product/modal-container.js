import React, { useContext } from "react"
import styled from "styled-components"

import UIContext from "../../context/ui-context"

import { breakpoints } from "../../theme"

const Container = styled.div`
  background: rgba(0, 0, 0, 0);
  bottom: 0;
  cursor: pointer;
  display: block;
  left: 0;
  opacity: 0;
  position: fixed;
  right: auto;
  text-align: center;
  top: 0;
  width: 50% !important;
  white-space: nowrap;
  z-index: 2147483647;

  ::before {
    content: "";
    display: inline-block;
    height: 100%;
    margin-right: -0.25em;
    vertical-align: middle;
  }

  animation: show 0.5s forwards;
  animation-delay: 0.03s;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @media (max-width: ${breakpoints.headerMobile}px) {
    right: 0;
    width: 100% !important;
  }
`

const ContainerInner = styled.div`
  background: #fff;
  border-bottom: 0 none;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.16);
  cursor: auto;
  display: inline-block;
  height: 100%;
  margin: 0;
  max-height: none;
  min-height: 326px;
  min-width: 300px;
  overflow: auto;
  padding: 35px;
  position: relative;
  text-align: left;
  vertical-align: top;
  white-space: normal;
  width: 100%;

  button {
    border: 0 none;
    background: transparent;
    color: #363636;
    cursor: pointer;
    font-family: Arial, sans-serif;
    font-size: 3rem;
    line-height: 1;
    -moz-appearance: none;
    -webkit-appearance: none;
    padding: 0;
    position: absolute;
    right: 24px;
    text-align: center;
    top: 24px;
    width: 25px;
    z-index: 9999;
  }

  h2 {
    font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
      "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
      "Lucida Grande", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 800;
    letter-spacing: 0.14em;
    line-height: 1.22034;
    margin: 0 0 3rem;
    text-transform: uppercase;
  }

  &.modal-size h2 {
    font-family: "CD", Georgia, Times, "Times New Roman", serif;
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 0;
    margin: 0 0 30px;
    text-align: left;
    text-transform: none;

    span {
      display: block;
      font-size: 1.4rem;
      letter-spacing: 0;
      width: 100%;
    }
  }

  table {
    margin-bottom: 3em;
    max-width: 700px;
    table-layout: fixed;
    text-align: left;
    width: 100%;

    tr {
      :nth-of-type(1) th {
        border-bottom: 1px solid transparent;
        color: #363636;
        font-family: "CD", Georgia, Times, "Times New Roman", serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        letter-spacing: 0;
        padding-left: 0;
        text-transform: none;
      }

      th {
        color: #c2c2c2;
        text-transform: uppercase;
      }
    }

    tr {
      & > * {
        border-bottom: 1px solid #f2f2f2;
        font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light",
          "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
          "Lucida Grande", sans-serif;
        font-style: normal;
        font-weight: 400;
        height: 40px;
        letter-spacing: 0.08em;
        padding-right: 3px;
        vertical-align: middle;
      }

      td {
        font-size: 12px;
      }

      td:first-of-type {
        color: #c2c2c2;
        padding-left: 0;
        text-transform: uppercase;
      }
    }
  }

  .left,
  .right {
    float: left;
    width: calc(50% - 25px);
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  p {
    font-size: 1.2rem;
    line-height: 18px;
    margin-bottom: 1.5em;
    margin-top: 0;
  }
`

const ModalRepair = ({ className, children }) => {
  const { toggleProductHelpModal } = useContext(UIContext)

  return (
    <Container>
      <ContainerInner className={className}>
        <button
          className="featherlight-close-icon featherlight-close"
          aria-label="Close"
          onClick={() => {
            toggleProductHelpModal()
          }}
        >
          ✕
        </button>
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="guarantee-modal-label"
          className="featherlight-inner"
        >
          {children}
        </div>
      </ContainerInner>
    </Container>
  )
}

export default ModalRepair
