import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:1100/";

export const SignUp = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const getTransition = () => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  };

  const handleSignUp = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/signup", signUpData);
    console.log(data);
    navigate("/login");
  };

  useEffect(() => {
    getTransition();
  }, []);

  return (
    <div className="dark">
      <div className={`form-container ${isVisible ? "active" : ""}`}>
        <Link to={"/home"}>
          <i className="uil uil-times form-close"></i>
        </Link>
        <div className="form signup-form">
          <form onSubmit={handleSubmit}>
            <h2>Signup</h2>

            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={signUpData.name}
                onChange={handleSignUp}
                required
              />
              <i class="uil uil-user-circle user"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={signUpData.email}
                onChange={handleSignUp}
                required
              />
              <i className="uil uil-envelope email"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={signUpData.password}
                onChange={handleSignUp}
                required
              />
              <i className="uil uil-lock password"></i>
              <i className="uil uil-eye-slash pwd-hide"></i>
            </div>
            <button className="btn">Signup Now</button>
          </form>
          <div className="login-signup">
            Already have an account?{" "}
            <Link to={"/login"} id="login">
              Login
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
};
