import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./SignUp";

export const Home = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <a href="/home" className="nav-logo">
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
          <Link to={"/login"} className="btn">
            Login
          </Link>
        </nav>
      </header>
      <section className="container">
        <h1 className="title">McBitss</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          magni obcaecati, enim sunt autem, hic atque mollitia minus cumque
          corrupti necessitatibus exercitationem nihil qui debitis in dicta vel
          vero maiores?
        </p>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </section>
    </>
  );
};
