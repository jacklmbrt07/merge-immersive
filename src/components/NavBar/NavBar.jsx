import React, { useState } from "react";
import "./NavBar.css";

const NavBar = (props) => {
  const [open, setOpen] = useState();
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="icon-button"></a>
          <a
            href="#"
            className="icon-button"
            onClick={() => setOpen(!open)}
          ></a>
          <a href="#" className="icon-button"></a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
