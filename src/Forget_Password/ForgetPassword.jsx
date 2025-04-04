import React from 'react';
import './forgetPassword.css';

const ForgetPassword = () => {
    return (
        <div className="flex forget-container container">
        <div className="form-container">
            <h1>Forgot Password</h1>
            <p>Enter your email address to reset your password</p>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required/>
            <p>We'll send you a reset link</p>
            <div className="button-container flex">
            <button className="cancel-button">Cancel</button>
            <button className="reset-button">Reset Password</button>
            </div>
        </div>
        <div className="image-container">
            <img src="/src/assets/Forget_Password.jpeg" alt="Forgot Password" />
        </div>
        </div>
    );
};

export default ForgetPassword;