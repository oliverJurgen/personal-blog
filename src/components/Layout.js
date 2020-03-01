/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
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
    <h1
      css={css`
        margin-top: ${rhythm(1)};
        margin-bottom: ${rhythm(1.5)};
      `}
    >
      <Link
        css={css`
          box-shadow: none;
          text-decoration: none;
          color: inherit;
        `}
        to={location.pathname === blogPath ? `/blog/` : `/`}
      >
        {`${title}`}
      </Link>
    </h1>
  ) : (
    <h3>
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
    </h3>
  )

  return (
    <ModeContextProvider>
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Header />
          <header className="pt-6">{contentHeader}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built in a weekend, will update in the
          future, I promise lol.
          {` `}
          <br />
          Powered by Gatsby and React
        </Footer>
      </Wrapper>
    </ModeContextProvider>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
