import React, {useState } from "react";
import './App.css';





    export default function Header({ toggleMenu, menuActive }) {
      return (
        <header className="head-div">
          <h3 className="name">Nathan K Hammond</h3>
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