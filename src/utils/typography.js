import Typography from "typography"
import Trajan from "typography-theme-trajan"

Trajan.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Trajan.googleFonts

const typography = new Typography(Trajan)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

console.log(typography.rhythm + "")
export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
