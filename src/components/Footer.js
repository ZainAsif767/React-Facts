import React from "react";

export default function Footer(props) {
    return (
        <footer id="author" className={props.darkMode ? "dark" : ""}>Author <a href="https://www.github.com/zainasif767">
            <strong className="zain">Zain Asif</strong></a>
        </footer>
    )
}