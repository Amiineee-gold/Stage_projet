import React, { useState } from 'react';
import { FaBars,  FaUser, FaCog, FaSignOutAlt, FaUsers, FaSimCard, FaWaveSquare, FaArrowAltCircleRight,  FaHatCowboySide} from 'react-icons/fa';
import './Sidebar.css'; 
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-item">
          <FaUsers className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/Learner" style={{color:'white'}} >Learner</Link></span>
        </div>
        <div className="sidebar-item">
          <FaUsers className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/Teacher" style={{color:'white'}} >Teachers</Link></span>
        </div>
        <div className="sidebar-item">
          <FaSimCard className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/Expenses" style={{color:'white'}} >Expenses</Link></span>
        </div>
        <div className="sidebar-item">
          <FaHatCowboySide className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/scores" style={{color:'white'}} >scores</Link></span>
        </div>
        <div className="sidebar-item">
          <FaWaveSquare className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/Accounting" style={{color:'white'}} >Accounting</Link></span>
        </div>
        <div className="sidebar-item">
          <FaArrowAltCircleRight className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/DailyReport" style={{color:'white'}} >Daily Report</Link></span>
        </div>
        <div className="sidebar-item">
          <FaCog className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/OtherSettings" style={{color:'white'}} >Other Settings</Link></span>
        </div>
        
        <div className="sidebar-item">
          <FaUser className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/Profile" style={{color:'white'}} >Profile</Link></span>
        </div>
        <div className="sidebar-item">
          <FaCog className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/Account" style={{color:'white'}} >Account</Link></span>
        </div>
        <div className="sidebar-item">
          <FaSignOutAlt className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/" style={{color:'white'}} >Logout</Link></span>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;