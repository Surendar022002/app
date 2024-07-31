import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="back">
      <header className="header">
        <nav className="navbar">
          <a href="www.google.com" className="nav-logo">
            McBitss
          </a>

          <ul className="nav-item">
            <li className="nav-item">
              <a href="www.google.com" className="nav-link">
                Home
              </a>
              <a href="www.google.com" className="nav-link">
                Product
              </a>
              <a href="www.google.com" className="nav-link">
                Services
              </a>
              <a href="www.google.com" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <Link to={'/login'} className="btn">Login</Link>
        </nav>
      </header>
    </div>
  );
};
