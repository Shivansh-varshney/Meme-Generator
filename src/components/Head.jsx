import React from "react";
import face from "../assets/troll-face.png"

export default function Header() {
    return (
        <>
            <nav className="header">
                <div>
                    <img id="troll-face" src={face} alt="troll-face" />
                    <h1>Meme Generator</h1>
                </div>
                <h3>React Course - Project 3</h3>
            </nav>
        </>
    )
}