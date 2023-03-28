import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';


function Header() {
    const {theme} = useContext(ThemeContext);
    
    return (
        <div>
            Active theme from Header component: {theme}
        </div>
    )
}

export default Header