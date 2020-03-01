import React from "react"
import theme from "../utils/theme"
import { ThemeProvider } from "emotion-theming"
import preset from "@rebass/preset"

const ModeContext = React.createContext(null)

const ModeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState("LIGHT")

  return (
    <ModeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider
        theme={{
          ...preset,
          [themeMode]: {
            ...theme[themeMode],
          },
        }}
      >
        {children}
      </ThemeProvider>
    </ModeContext.Provider>
  )
}

export default ModeContextProvider
