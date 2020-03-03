/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Header from "./Header"
import ModeContextProvider from "../contexts/ModeContext"

import { rhythm, scale } from "../utils/typography"

const Layout = props => {
  const { location, title, children } = props

  // const rootPath = `${__PATH_PREFIX__}/`
  // const blogPath = `${__PATH_PREFIX__}/blog/`s

  const rootPath = "/"
  const blogPath = "/blog/"

  const isHomeOrBlogPage =
    location.pathname === rootPath || location.pathname === blogPath

  const contentHeader = isHomeOrBlogPage ? (
    <Styled.h1
      sx={{
        fontSize: 6,
      }}
    >
      <Link to={location.pathname === blogPath ? `/blog/` : `/`}>
        {`${title}`}
      </Link>
    </Styled.h1>
  ) : (
    <Styled.h3>
      <Link
        css={css`
          box-shadow: none;
          text-decoration: none;
          color: inherit;
        `}
        to="/blog/"
      >
        <FontAwesomeIcon icon="arrow-left" /> {title}
      </Link>
    </Styled.h3>
  )

  return (
    <ModeContextProvider>
      <Styled.root
        sx={{
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Header />
          <header className="pt-10">{contentHeader}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built in a weekend, will update in the
          future, I promise lol.
          {` `}
          <br />
          Powered by Gatsby and React
        </Footer>
      </Styled.root>
    </ModeContextProvider>
  )
}

// const Wrapper = styled.div`
//   min-height: 100vh;
// `

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
