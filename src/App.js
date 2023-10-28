import './App.css';
import React, { useState } from 'react';
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Home from './pages/Home';


export default function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    // console.log("nav display toggled!")
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  return (
    <Home />
  );
}

