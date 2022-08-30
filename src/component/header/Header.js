import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import sandwichIcon from "../../assets/sandwich.png";
import closeIcon from "../../assets/close.png";
import "./header.css";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const open = () => {
    setIsVisible(!isVisible);
    document.getElementById("mySidenav").style.right = "0";
  };

  const close = () => {
    setIsVisible(!isVisible);
    document.getElementById("mySidenav").style.right = "-100%";
  };
  return (
    <div className="Header">
      <div className="navigation-links">
        <div className="naveLinks">
          <NavLink to="/home" className="links">
            Home
          </NavLink>
          <NavLink to="/about" className="links">
            About
          </NavLink>
          <NavLink to="/services" className="links">
            Services
          </NavLink>
        </div>
        <p>1-Space</p>
        <div className="naveLinks right">
          <NavLink to="/home" className="links">
            Home
          </NavLink>
          <NavLink to="/about" className="links">
            About
          </NavLink>
          <NavLink to="/services" className="links">
            Services
          </NavLink>
        </div>
      </div>
      <div id="mySidenav" className="sidenav">
        <div className="side-nav-links">
          <NavLink to="/home" onClick={close} className="links">
            Home
          </NavLink>
          <NavLink to="/about" onClick={close} className="links">
            About
          </NavLink>
          <NavLink to="/services" onClick={close} className="links">
            Services
          </NavLink>
       
        <p>1-Space</p>
        <div className="naveLinks right">
          <NavLink to="/home" onClick={close} className="links">
            Home
          </NavLink>
          <NavLink to="/about" onClick={close} className="links">
            About
          </NavLink>
          <NavLink to="/services" onClick={close} className="links">
            Services
          </NavLink>
          </div>
        </div>
      </div>
      <button onClick={isVisible ? close : open} className="sandwich-button">
        <img alt="open" src={isVisible ? closeIcon : sandwichIcon} />
      </button>
    </div>
  );
}
