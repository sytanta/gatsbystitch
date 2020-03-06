import styled from "styled-components"

const Container = styled.section`
  align-items: flex-start;
  background: #fff;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.08);
  color: #0f2130;
  display: none;
  flex-flow: row nowrap;
  justify-content: space-between;
  left: 0;
  max-width: none;
  opacity: 1;
  padding: 64px 45px 3.2rem;
  position: absolute;
  text-transform: none;
  top: calc(50px - 1px);
  visibility: visible;
  width: 100%;

  .at-top & {
    margin-top: 0;
    padding-top: 72px;
    width: 100%;
    z-index: -1;
  }
`

export default Container
