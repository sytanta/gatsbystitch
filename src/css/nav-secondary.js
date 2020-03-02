import styled from "styled-components"

const NavSecondary = styled.nav`
  font-family: "ANW", "AN", Avenir, "HelveticaNeue-Light", "Helvetica Neue Light",
    "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 10px;
  float: right;
  margin: 2px 0 0 0;
  line-height: 19px;
  position: relative;
  text-align: right;
  z-index: 1;

  li {
    display: inline-block;
    margin-left: 2em;
  }

  ul > li > a,
  ul > li > div{
    padding-bottom: 0.2em;
  }

  .utility-icon a,
  .utility-icon div,
  .utility-icon button {
    color: #fff;
    cursor: pointer;
    display: inline-block;
    height: 16px;
    outline: none;
    position: relative;
    top: 3px;
    transition: color 0.7s ease-in-out;
    width: 16px;
  }
  .utility-icon button {
    height: 14px;
  }
  .utility-icon.search div,
  .utility-icon.search button {
    top: 4px;
  }

  form button,
  form input {
    background: transparent;
    border: 0 none;
    color: #fff;
    padding: 0;
  }

  form {
    display: none;

    input {
      border-bottom: 1px solid #fff;
      height: 15px
      margin: 0;
      outline: none;
      padding: 0 0 0.3em;
      text-align: left;
      width: 0;
      // will-change: width !important;

      &.show {
        animation: inputShow 0.3s forwards;
        animation-delay: 0.03s;
      }

      &.hide {
        animation: inputHide 0.3s forwards;
      }
    }

    &.display {
      display: inline-block;
    }
  }

  @keyframes inputShow {
    from {
      margin-left: 0;
      width: 0px;
    }
    to {
      margin-left: 0.75em;
      width: 12em;
    }
  }

  @keyframes inputHide {
    from {
      margin-left: 0.75em;
      width: 12em;
    }
    to {
      margin-left: 0;
      width: 0px;
    }
  }
`

export default NavSecondary
