import React, { useState } from 'react';
import {  FaSearch, FaUserCircle, FaBell } from 'react-icons/fa';
import './Header.css'; 
import { Link } from 'react-router-dom';
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo"><Link to="/Home" style={{color:'white'}}><img src="projet_stage/src/componants/images/zenitsu-agatsuma-5120x2880-17046.jpg" alt="TIKO SCHOOL" /> </Link>
        </div>
        
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <div className="notification-icon">
          <FaBell />
          <span className="notification-badge">7</span>
        </div>
        <div className="user-profile" onClick={toggleDropdown}>
          <FaUserCircle className="user-icon" />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              
              <Link to="/Profile">Profile</Link>
              <Link to="/Account">Settings</Link>
              <Link to="/">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;