import React, { useEffect, useState, useRef } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  function handleSubmit() {}

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
            autoComplete="off"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
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
