import React from "react"

export default function Main(props) {
    return (

        <main className={props.darkMode ? "dark" : ""}>

            <h1 className="h1-text">Fun Facts About React</h1>
            <ul className="facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, includding mobile apps</li>
            </ul>
        </main>

    )

}