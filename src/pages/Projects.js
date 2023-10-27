import React from "react";
import demoLandingPageScreenshotEnlarged from '../demoLandingPageScreenshotEnlarged.png';
import "../App.css";


export default function Main(){

const landingPageScreenshot = new Image();
landingPageScreenshot.src = "../demoLandingPageEnlarged.png";

    return(
        <div id="projects-wrapper">
            <h2 className="projects">Projects</h2>

            <div className="project-1">
                <h3 className="landingPageHeading">Product Landing Page</h3>
                <a href="https://nadwei.github.io/demoLandingPage/">
                <img className="landingPageImg" src={demoLandingPageScreenshotEnlarged} alt="live link project screenshot"/>
                </a>
            </div>

            <div className="project-2">
                <h3></h3>
            </div>

        </div>
)}