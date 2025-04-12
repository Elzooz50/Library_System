import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="footer-content">
        <div className="footer-section about">
          <div className="logo-container">
            <img
              src="src\assets\logo.svg"
              alt="BookVerse Logo"
              className="logo"
            />
            <span class="text">BookVerse</span>
          </div>
          <p>
            Lorem ipsum is a dummy or placeholder text. Commonly used in
            graphic, print, publishing, and web development for mockups and
            layouts that do not yet have content.
          </p>
          <div className="social-links">
            <img src="src\assets\twitter_icon.svg" className="social-icon" />
            <img src="src\assets\facebook_icon.svg" className="social-icon" />
            <img src="src\assets\instagram_icon.svg" className="social-icon" />
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section links">
          <h2>Help</h2>
          <ul>
            <li>
              <a href="#">Payment</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
