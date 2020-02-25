import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.li`
  border: 0 none;
  position: absolute;
  left: 50%;
  right: auto;
  top: 0;
  transform: translateX(-50%);
`

const StyledLink = styled(Link)`
  cursor: pointer;

  u {
    text-decoration: underline;
  }

  :hover u {
    text-decoration: none;
  }
`

const AsidePromo = () => (
  <Container>
    <span>
      <StyledLink to="/collections/workshop">
        Pre-order new styles to life in our&nbsp;<u>Workshop.</u>
      </StyledLink>
    </span>
  </Container>
)

export default AsidePromo
