import React from "react"
import styled from "@emotion/styled"
import Navigation from "./Navigation"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Avatar from "../Avatar"

const Header = () => {
  // for responsive styles
  const [isNavVisible, setIsNavVisible] = ReactuseState(false)

  const toggleNavigation = () => setIsNavVisible(!isNavVisible)

  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <Avatar width={avatarDimension} height={avatarDimension} />
        </Link>

        <NavWrapper>
          <Navigation
            isNavVisible={isNavVisible}
            toggleNavigation={toggleNavigation}
          />
          <Hamburger onClick={toggleNavigation}>
            <FontAwesomeIcon icon="bars" />
          </Hamburger>
          <ThemeSwitch />
        </NavWrapper>
      </div>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  height: "100px";
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${props => props.theme.contentPadding};
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.mainBackground};
  box-shadow: ${props =>
    props.isScrolled && `0px 0px 10px ${props.theme.colors.headerShadow}`};
  transition: all 0.2s ease-in-out;

  > div {
    width: 1200px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Hamburger = styled.button`
  font-size: 24px;
  background: transparent;
  border: none;
  padding: 0 15px;
  color: ${props => props.theme.colors.highlighted};
  order: 2;
  ${mediaQuery[1]} {
    display: none;
  }
`
