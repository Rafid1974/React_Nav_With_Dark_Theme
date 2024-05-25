import React from "react";
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_black from '../../assets/search-b.png'
import theme_icon_light from '../../assets/night.png'
import theme_icon_dark from '../../assets/day.png'

function Navbar({theme, setTheme}) {
    const toggle_mode = () => {
        theme == "light" ? setTheme("dark") : setTheme("light");
    }
    return(
        <>
            <div className="navbar">
                <img src={theme == "light" ? logo_light : logo_dark} alt="" className="logo" />
                <ul>
                    <li>About</li>
                    <li>Service</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
                <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <img src={theme == "light" ? search_icon_light : search_icon_black} alt="" />
                </div>
                <img src={theme == "light" ? theme_icon_light : theme_icon_dark} alt="" className="toggle-icon" onClick={toggle_mode} />
            </div>
        </>
    );
}

export default Navbar;