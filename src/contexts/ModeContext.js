import React from "react"
import { ThemeProvider } from "emotion-theming"
import preset from "@rebass/preset"
import theme from "../utils/theme"

const ModeContext = React.createContext(null)

// eslint-disable-next-line react/prop-types
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
