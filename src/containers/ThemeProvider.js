import React, { useMemo, useState, createContext } from 'react'
import { palette, restOfTheme } from '../styles/theme'

// MUI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'

// Create theme context
export const ThemeContext = createContext({
    toggleDarkMode: () => { }
})

const ThemeProvider = props => {
    const [darkMode, setDarkMode] = useState(false)
    const [alternateTheme, setAlternateTheme] = useState(false)

    // Use this to toggle light/dark theme
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    
    // Use this to toggle to alternate theme
    const toggleAlternateTheme = () => {
        setAlternateTheme(!alternateTheme)
    }
    
    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: darkMode ? 'dark' : 'light',
                    ...palette
                },
                ...restOfTheme
            }),
        [darkMode],
    )

    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode, alternateTheme, toggleAlternateTheme}}>
            <MuiThemeProvider theme={theme}>
                {props.children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider