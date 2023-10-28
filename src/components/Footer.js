import React from "react";
import githubLogo from "../github-mark-white.png";




export default function Footer() {
    return (
        <footer id="contact-bar">
            <a className="github-link" href="https://github.com/Nadwei" target="_blank">
                <img src={githubLogo} className="gh-logo" alt="GitHub" />
            </a>
            <a className="email-link" href="mailto:NateTheDev62@protonmail.com">NateTheDev62@protonmail.com</a>
        </footer>
    )
}