import React from 'react';
import './sign_up.css';

const SignupPage = () => {
  return (
    <div className="signup-container container">
      <div className="image-section">
        <img src="/src/assets/Sign_Up.png" alt="Illustration" className="illustration" />
      </div>
      <div className="form-section">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <form>
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat Password" />
          <button type="submit" className="create-account-btn">Create Account</button>
          <button type="button" className="google-btn">
            <img src="/src/assets/Google.png" alt="Google" />
            With Google
          </button>
        </form>
        <p className="login-text">
          Do you have an account? <a href="#">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;