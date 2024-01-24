import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Welcome</h1>
        <hr className="line" />

        <div className="input-box">
          <input type="text" placeholder="Clinician ID" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>

        <div className="forgot">
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default LoginForm;
