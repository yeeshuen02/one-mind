import React from "react";
import logoImage from "../../assets/logo-white.png";
import "./LoginContainer.css";
import LoginForm from "./LoginForm.jsx";

const LoginContainer = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="left-side">
          <div className="logo">
            <img src={logoImage} alt="One Mind Logo"></img>
            <h1>neMind</h1>
          </div>
          <p>Revolutionising Wellbeing with EEG Technology</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginContainer;
