import React from "react"
// import { Link } from "gatsby"
// import Button from "../components/Button"
// import { css } from "@emotion/core"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faBars,
  faTimes,
  faArrowRight,
  faArrowLeft,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/Seo"
import Home from "../components/Home"
import Layout from "../components/Layout"

library.add(faBars, faTimes, faArrowRight, faArrowLeft, faEnvelope)

const IndexPage = props => {
  // eslint-disable-next-line react/prop-types
  const { location } = props

  return (
    <Layout location={location} title="Site Title">
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Home />
    </Layout>
  )
}

export default IndexPage
