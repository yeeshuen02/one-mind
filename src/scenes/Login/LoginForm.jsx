import React, { useEffect, useState, useRef } from "react";
import "./LoginForm.css";
import { PiWarningCircleBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const emailRef = useRef();
  const pwdRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const {logIn} = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const data = await logIn(email,pwd)
      console.log("User succesffully logged in", data);
      console.log("Navigating to /homepage");
      navigate("/homepage");
    } catch (error) {
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password"
        ) {
          setErrMsg("Invalid Email or Password");
        } else if (error.code === "auth/invalid-email") {
          setErrMsg("Invalid Email Address");
        } else if (error.code === "auth/too-many-requests") {
          setErrMsg("Too Many Login Attempts. Try again later.");
        } else {
          setErrMsg("Login Failed. Please try again.");
        }
      }
    };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        <hr className="line" />

        <div className="input-box">
          <input
            type="text"
            placeholder="Clinician Email"
            ref={emailRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            ref={pwdRef}
            autoComplete="off"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </div>

        <div className="forgot">
          <a href="#">Forgot Password?</a>
        </div>

        <div
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          <PiWarningCircleBold className="icon" />
          <p>{errMsg}</p>
        </div>

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default LoginForm;
