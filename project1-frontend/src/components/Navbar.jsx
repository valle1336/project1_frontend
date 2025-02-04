import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <h1 className="logo">TMC</h1>
        </li>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/about">Om oss</Link>
        </li>
        <li>
          <Link to="/services">Tjänster</Link>
        </li>
        <li>
          <Link to="/partners">Partners</Link>
        </li>
        <li>
          <Link to="contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
