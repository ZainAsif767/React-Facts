import React from "react"
import reactLogo from "../images/logo192.png"

export default function Navbar() {
    return (
        <nav>
            <img
                src={reactLogo}
                alt="React logo"
                className="nav--icon"
            />
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React - Project 1</h4>
        </nav>
    )

}