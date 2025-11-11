import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo"><img src="/public/images/main_logo.png" alt=""/></h1>
        <nav className="nav">
          <ul>
            <li><a href="#banner">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#teachers">Teachers</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
