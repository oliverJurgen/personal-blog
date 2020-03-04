import React from "react"
import { ThemeProvider } from "theme-ui"
import rebass from "@rebass/preset"
import * as themeui from "@theme-ui/presets"
import { merge } from "lodash"

const ThemeContext = React.createContext(null)
const { base, dark, deep, funk, tosh } = themeui
const presets = {
  base,
  dark,
  deep,
  funk,
  tosh,
  rebass,
}

// base dark deep funk tosh
const themes = [...Object.keys(presets)]

// eslint-disable-next-line react/prop-types
const ThemeContextProvider = ({ children }) => {
  const isWindowDefined = typeof window !== "undefined"
  const currentTheme = localStorage.getItem("currentTheme")

  const [theme, setTheme] = React.useState(currentTheme || "base")

  React.useEffect(() => {
    if (isWindowDefined && localStorage.getItem("currentTheme") === null) {
      localStorage.setItem("currentTheme", "base")
    }
  })

  const cycleThemes = () => {
    const i = (themes.indexOf(currentTheme) + 1) % themes.length

    if (isWindowDefined) {
      localStorage.setItem("currentTheme", themes[i])
    }

    setTheme(themes[i])
  }

  const finalTheme = merge({}, rebass, presets[theme])

  return (
    <ThemeContext.Provider value={{ cycleThemes, themes, theme: finalTheme }}>
      <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => React.useContext(ThemeContext)

export default ThemeContextProvider
