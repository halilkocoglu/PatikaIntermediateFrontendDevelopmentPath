import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

function Button() {
    const {theme, setTheme} = useContext(ThemeContext);
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