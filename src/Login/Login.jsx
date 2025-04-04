import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function LoginPage() {
  return (
    <div className="login-container container">
      <div className="image-section">
        <img
          src="/src/assets/login.png"
          className="image_responsive"
          alt="Books stacked with decorative items"
        />
      </div>
      <div className="form-section">
        <div className="login-form-container">
          <h2 className="welcome-text">Welcome Back!</h2>
          <p className="subtitle">Explore Unique Handmade Creations</p>
          <form className="login-form">
            <input type="email" placeholder="Email or Phone Number" />
            <div>
              <input className="password" type="password" placeholder="Password" />
              <p className="forget">
              Forgot password?
                <a href="#"></a>
              </p>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <p className="login-text">
            Not a member yet? <Link to="/sign_up">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}