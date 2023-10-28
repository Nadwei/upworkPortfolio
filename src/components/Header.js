import React, {useState } from "react";
import '../App.css';






    export default function Header() {
      return (
        <header id="header" className ='head-div'>

          <div className="name">Nate Hammond</div>

          <div className="menu-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

        </header>
      );
    }