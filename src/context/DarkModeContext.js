import React, {createContext, useState} from 'react'


export const DarkMode = createContext()

export const DarkModeProvider = ( {children} ) => {

    const [dark, setDark] = useState(false)

    return (
        <DarkMode.Provider value={{dark, setDark}}>
            {children}
        </DarkMode.Provider>
    )
}