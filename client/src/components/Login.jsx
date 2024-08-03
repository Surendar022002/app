import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:1100/";

export const Login = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  axios.defaults.withCredentials = true;

  const handleLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/login", loginData)
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else {
          alert(result.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTransition = () => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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
        <div className="form login-form">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={loginData.email}
                onChange={handleLoginData}
                required
              />
              <i className="uil uil-envelope email"></i>
            </div>
            <div className="input-box">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                value={loginData.password}
                onChange={handleLoginData}
                required
              />
              <i className="uil uil-lock password"></i>
              <Link onClick={togglePassword} className="pwd-hide">
                <i
                  className={showPassword ? "uil uil-eye" : "uil uil-eye-slash"}
                ></i>
              </Link>
            </div>

            <div className="option-field">
              <span className="checkbox">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Remember me</label>
              </span>
              <a href="www.google.com" className="forgot-pw">
                Forgot password?
              </a>
            </div>

            <button className="btn white">Login Now</button>
          </form>
          <div className="login-signup">
            Don't have an account?{" "}
            <Link to={"/register"} id="signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
