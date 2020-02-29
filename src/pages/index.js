import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

const IndexPage = ({ location }) => (
  <Layout location={location} title={"Personal Website in progress..."}>
    <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
    {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
    <h5>
      Hey people{" "}
      <span role="img" aria-label="wave emoji">
        👋
      </span>
      I'm Oliver
    </h5>
    <h5></h5>

    <Link to="/blog/">
      <Button marginTop="35px">Go to Blog</Button>
    </Link>
  </Layout>
)

export default IndexPage
