import { Link } from "gatsby"
import styled from "styled-components"

const Logo = styled(Link)`
  cursor: pointer;
  display: block;
  font-size: 16px;
  float: left;
  height: 16px;
  line-height: 19px;
  margin: 0;
  position: relative;
  width: 149px;
  z-index: 9;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  top: 4.5px;
  transition: none;

  &.logo {
    color: #fff;
  }
`

export default Logo
