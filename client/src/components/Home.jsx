import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./SignUp";
import sec21 from "../assests/sec21.png";
import log from "../assests/logo_food_bg.png"
import food1 from "../assests/tri.jpg"
import food2 from "../assests/wings.jpg"


export const Home = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
        <img src={log} alt="logo" className="logo"/>

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
        <div className="dark">
          <h1 className="title">
            SP<span className="span">EC</span>S F
            <span className="span">OO</span>D
          </h1>
          <p className="para">
            S-P-E-C is a premier catering and events company of choice in
            Chennai. We create remarkable experiences by offering the finest
            quality of foods. With detailed planning, unparallel personal
            services, exquisite dining and precise implementation we set the
            standard for the memorable occassion. We invite you to create,
            experience and celebrate the extraordinary.
          </p>
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </section>
      <section className="container-sec2">
        <div className="dark-sec2">
          <h3 className="sub-head">GET INSPIRED</h3>
          <h1 className="head">Delicious Food</h1>
          <img src={sec21} alt="logo" className="image"/>
          <p className="para-sec2"></p>
        </div>
      </section>
      <section>
        <div className="list">
          <div className="box">
            <img src={food1} alt="logo"/>
            <h2>---F00D---</h2>
          </div>
          <div className="box">
            <img src={food2} alt="logo"/>
            <h2>---F00D---</h2>
          </div>
          

        </div>
     </section>
    </>
  );
};
