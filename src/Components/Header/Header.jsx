import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <div className="logo flex">
        <img src="/src/assets/Logo.png" alt="Logo" className="logo-image" />
        <img src="/src/assets/Text.png" alt="Text" className="text-image" />
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Books</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <div className="user-profile">
        <span>Welcome, Zeyad</span>
        <img src="src\assets\User.png" alt="User Profile" className="user-image" />
        <button className='menu-icon'><i class="fa-solid fa-bars"></i></button>
      </div>
      
    </header>
  );
};

export default Header;















