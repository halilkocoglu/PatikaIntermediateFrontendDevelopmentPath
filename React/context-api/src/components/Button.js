import React from 'react'
import { useTheme } from '../context/ThemeContext';

function Button() {
    const {theme, setTheme} = useTheme()
    const onClickChangeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    return (
        <div>
            Active theme from button component: {theme}
            <br /><br />
            <button onClick={onClickChangeTheme}>Change theme</button>
        </div>
    )
}

export default Button