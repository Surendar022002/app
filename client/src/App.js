import React from "react";
// import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { SignUp } from "./components/SignUp";
// import { Login } from "./components/Login";
import "./transition.css";

const App = () => {

  return (
   <>
      <Home />
            {/* <Routes>
              <Route path="/register" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes> */}
    </>
  );
};

export default App;
