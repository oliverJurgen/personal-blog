import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"

import SEO from "../components/Seo"
import Button from "../components/Button"
import Avatar from "../components/Avatar"
import ModeContext from "../contexts/ModeContext"

// eslint-disable-next-line react/prop-types
const IndexPage = () => (
  <ModeContext>
    <Global
      styles={css`
        /*  */
      `}
    />
    <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

    <Avatar />
    <h5>
      <span role="img" aria-label="wave emoji">
        👋
      </span>
      Im Oliver
    </h5>

    <Link to="/blog/">
      <Button marginTop="35px">Go to Blog</Button>
    </Link>
  </ModeContext>
)

export default IndexPage
