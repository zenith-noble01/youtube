import React from "react";
import "../Styles/auth.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleGoogleAuth = () => {};
  const handleGitHubAuth = () => {};

  return (
    <div className="app__auth register">
      <form onSubmit={handleSubmit}>
        <p className="auth__header">
          CodeMedia <span>Register</span>
        </p>
        <div className="input__container">
          <input type="text" placeholder="Username..." />
        </div>
        <div className="input__container">
          <input type="email" placeholder="Email..." />
        </div>
        <div className="input__container">
          <input type="password" placeholder="Password..." />
        </div>

        <button className="auth__action">Register</button>
        <div className="or__container">
          <div className="or__text">
            <p>OR</p>
          </div>
          <div className="or__wrapper">
            <button className="google" onClick={handleGoogleAuth}>
              Google
            </button>
            <button className="github" onClick={handleGitHubAuth}>
              Github
            </button>
          </div>
        </div>

        <p className="linkWrapper">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
