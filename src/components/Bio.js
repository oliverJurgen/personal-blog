/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Avatar from "./Avatar"
// import styled from "styled-components"

// import { rhythm } from "../utils/typography"

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Avatar />
            <p>
              Written by <strong>{author}</strong>
              {` `}
              ... Place Socmed Icons here in the future
            </p>
          </Container>
        )
      }}
    />
  )
}

const Container = styled.div`
  display: flex;
`

export default Bio