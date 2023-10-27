import React, {useState } from "react";
import '../App.css';
import "../github-mark-white.png"





    export default function Header({ toggleMenu, menuActive }) {
      return (
        <header id="contact-bar" className ={`head-div ${menuActive ? "active" : ''}`}>
          <div className="name">Nate Hammond</div>
          <a className="github-link" href="https://github.com/Nadwei" target="_blank">
            <img src="github-mark-white.png" alt="GitHub" />
          </a>
          <a className="email-link" href="mailto:NateTheDev62@protonmail.com">NateTheDev62@protonmail.com</a>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
            <a className="nav-link contact" href="#">
              Contact
            </a>
            <a className="nav-link about" href="#">
              About
            </a>
          </nav>
        </header>
      );
    }