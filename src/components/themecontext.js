import React, {createContext, useState} from 'react'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    
    const [lightTheme, setLightTheme] = useState(false);

    const themeHandler = ()=> {
        setLightTheme(!lightTheme)
    }




    return (
        <ThemeContext.Provider value={{lightTheme, themeHandler}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider