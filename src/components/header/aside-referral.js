import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.li`
  text-align: left;
`

const StyledLink = styled(Link)`
  background: #4573a7;
  padding: 0.75em 1.75em 0.75em 1.5em;
  border: 1px solid #4573a7;
  border-radius: 15px;
  color: #fff;
  font-size: 9px;
  letter-spacing: 0.06em;
  margin-left: 12px;

  :before {
    content: attr(data-referral-value);
    font-family: "CD", Georgia, Times, "Times New Roman", serif;
    font-size: 12px;
    font-weight: 400;
    padding-right: 0.675em;
    line-height: 1;
    position: relative;
    top: 0.05em;
  }
`

const AsideReferral = () => (
  <Container>
    <StyledLink
      to="/collections/all-mens"
      className="nav-loyalty-non-customer popup-trigger"
      data-referral-value="20%"
    >
      <span>
        <span className="visually-hidden">20%</span>
        <u>Off Your 1st Purchase</u>
      </span>
    </StyledLink>
  </Container>
)

export default AsideReferral
