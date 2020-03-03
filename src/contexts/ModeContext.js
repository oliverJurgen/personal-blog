import React from "react"
import { ThemeProvider } from "theme-ui"
import rebass from "@rebass/preset"
import * as themeui from "@theme-ui/presets"
import { merge } from "lodash"

const ModeContext = React.createContext(null)
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
const ModeContextProvider = ({ children }) => {
  const currentTheme = localStorage.getItem("currentTheme")

  const [theme, setTheme] = React.useState(currentTheme || "base")

  React.useEffect(() => {
    if (localStorage.getItem("currentTheme") === null) {
      localStorage.setItem("currentTheme", "base")
    }
  })

  const cycleThemes = () => {
    const i = (themes.indexOf(currentTheme) + 1) % themes.length

    localStorage.setItem("currentTheme", themes[i])
    setTheme(themes[i])
  }

  const finalTheme = merge({}, rebass, presets[theme])

  return (
    <ModeContext.Provider value={{ cycleThemes, themes }}>
      <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>
    </ModeContext.Provider>
  )
}

export const useModeContext = () => React.useContext(ModeContext)

export default ModeContextProvider
