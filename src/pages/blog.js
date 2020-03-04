/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link, graphql } from "gatsby"
/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { rhythm } from "../utils/typography"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import ThemeContextProvider from "../contexts/ThemeContext"

const Blog = props => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <ThemeContextProvider>
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <Styled.h3
                  sx={{
                    fontSize: 5,
                  }}
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </Styled.h3>
                <small>{node.frontmatter.date}</small>
                <p
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
      </Layout>
    </ThemeContextProvider>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
