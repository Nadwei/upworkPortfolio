import './App.css';
import React, { useState } from 'react';
import Projects from "./Projects";
import Header from "./Header";
import About from "./About";
import Intro from "./Intro";
import Main from "./Main";


export default function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    console.log("nav display toggled!")
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  return (
    <div>
      <Header toggleMenu={toggleMenu} />
      <Intro />
      <Main />
      {/* Conditional rendering of the navigation links */}
      <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
        <a className="nav-link contact" href="#">
          Contact
        </a>
        <a className="nav-link about" href="#">
          About
        </a>
      </nav>
    </div>
  );
}

