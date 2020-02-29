import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

const Layout = props => {
  const { location, title, children } = props

  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`
  let header

  if (location.pathname === rootPath || location.pathname === blogPath) {
    header = (
      <h1
        style={{
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={location.pathname === blogPath ? `/blog/` : `/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/blog/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <Wrapper>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(26),
          // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
      </div>
      <Footer>
        © {new Date().getFullYear()}, Built in a weekend, will update in the
        future lol
        {` `}
      </Footer>
    </Wrapper>
  )
}
// class Layout extends React.Component {
//   render() {

//   }
// }

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
