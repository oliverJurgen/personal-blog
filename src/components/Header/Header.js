import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useThemeContext } from "../../contexts/ThemeContext"
import Navigation from "./Navigation"
import Avatar from "../Avatar"
import { mediaQuery } from "../../utils/theme"

const Dot = () => (
  <svg
    viewBox="0 0 32 32"
    width="34"
    height="34"
    fill="currentcolor"
    style={{
      display: "block",
    }}
  >
    <circle
      cx="16"
      cy="16"
      r="14"
      fill="none"
      stroke="currentcolor"
      strokeWidth="4"
    />
    <path
      d={`
        M 16 0
        A 16 16 0 0 0 16 32
        z
      `}
    />
  </svg>
)

const Header = () => {
  const { cycleThemes } = useThemeContext()

  // for responsive styles
  const [isNavVisible, setIsNavVisible] = React.useState(false)

  const toggleNavigation = () => setIsNavVisible(!isNavVisible)

  return (
    <HeaderWrapper>
      <div className="mt-4">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <Avatar className="mt-3 mr-3" />
          </Link>

          <Styled.div
            className="mb-3"
            sx={{
              color: "primary",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={cycleThemes}
          >
            <Dot />
            {/* <span className="ml-2"> change theme</span> */}
          </Styled.div>
        </div>

        <NavWrapper>
          <Navigation
            isNavVisible={isNavVisible}
            toggleNavigation={toggleNavigation}
          />
          <Hamburger onClick={toggleNavigation}>
            <FontAwesomeIcon icon="bars" />
          </Hamburger>
          {/* <ThemeSwitch /> */}
        </NavWrapper>
      </div>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  height: "80px";
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0 ${props => props.theme.contentPadding}; */
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  /* background-color: ${props => props.theme.colors.mainBackground}; */
  /* box-shadow: ${props =>
    props.isScrolled && `0px 0px 10px ${props.theme.colors.headerShadow}`}; */
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
  /* background: transparent; */
  background: #fffdd0;
  border: none;
  padding: 0 15px;
  /* color: ${props => props.theme.colors.highlighted}; */
  order: 2;
  ${mediaQuery[1]} {
    display: none;
  }
  border-radius: 50%;
  position: fixed;
  top: 2.5rem;
  right: 1rem;

  /* height: 6rem;
  width: 6rem; */

  /* background-image: radial-gradient($color-primary-light, $color-primary-dark); */
  /* z-index: 1000; */
`
