import React from "react"
import reactLogo from "../images/logo192.png"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img
                src={reactLogo}
                alt="React logo"
                className="nav--icon"
            />
            <h3 className="nav-logo-text">ReactFacts</h3>
            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div className="toggle-slider"
                    onClick={props.toggleDarkMode}>
                    <div className="toggle-slider-circle"></div>
                </div>
                <p className="toggle-dark">Dark</p>
            </div>
        </nav>
    )

}