import React from 'react'
import { useTheme } from '../context/ThemeContext';


function Header() {
    const {theme} = useTheme()
    
    return (
        <div>
            Active theme from Header component: {theme}
        </div>
    )
}

export default Header