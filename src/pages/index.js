import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faBars,
  faTimes,
  faArrowRight,
  faArrowLeft,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

import ThemeContextProvider from "../contexts/ThemeContext"
import SEO from "../components/Seo"
import Home from "../components/Home"
import Layout from "../components/Layout"
import "../styles/global.scss"

library.add(faBars, faTimes, faArrowRight, faArrowLeft, faEnvelope)

const IndexPage = props => {
  // eslint-disable-next-line react/prop-types
  const { location } = props

  return (
    <ThemeContextProvider>
      <Layout location={location} title="Site title will be here">
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Home />
      </Layout>
    </ThemeContextProvider>
  )
}

export default IndexPage
