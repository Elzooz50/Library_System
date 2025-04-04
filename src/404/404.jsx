import React from "react";
import "./404.css";

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-text">
          <h1 className="error-code">404 page not found</h1>
          <h2 className="error-message">ERROR</h2>
        </div>
        <div className="error-image">
          <img src="/src/assets/404 Error.png" alt="404 Illustration" />
        </div>
        <p className="error-description">There is no such page</p>
        <button className="home-button">Back to home page</button>
      </div>
    </div>
  );
}