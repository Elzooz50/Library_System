import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <div className="logo">
        <img src="src\assets\Logo.png" alt="Logo" className="logo-image" />
        <img src="src\assets\Text.png" alt="Text" className="text-image" />
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Books</a></li>
          <li><a href="#">About</a></li>
          <i class="fa-solid fa-bars"></i>
        </ul>
      </nav>
      <div className="user-profile">
        <span>Welcome, Zeyad</span>
        <img src="src\assets\User.png" alt="User Profile" className="user-image" />
      </div>
      <div className="menu-icon">
        <button><img src="src\assets\Menu.png" alt="Menu" /></button>
      </div>
    </header>
  );
};

export default Header;















