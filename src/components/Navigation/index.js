import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
  
      <nav>
        <ul className="flex-row">
          <li className="mx-2 nav-link">
            <Link to="/about">About me</Link>
          </li>
          <li className="mx-2 nav-link">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="mx-2 nav-link">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2 nav-link">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>

  );
}

export default Nav;
