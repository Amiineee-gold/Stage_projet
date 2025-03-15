import React, { useState } from 'react';
import { FaBars,  FaUser, FaCog, FaSignOutAlt, FaUsers, FaSimCard, FaWaveSquare, FaArrowAltCircleRight,  FaHatCowboySide, FaLiraSign, FaList, FaEvernote} from 'react-icons/fa';
import './Sidebar.css'; 
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (<div>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className="sidebar-menu">
        
        <div className="sidebar-item">
          <FaEvernote className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/Notes" style={{color:'white'}} >Notes</Link></span>
        </div>
        <div className="sidebar-item">
          <FaList className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/AbsenceT" style={{color:'white'}} >Absence</Link></span>
        </div>
        
        <div className="sidebar-item">
          <FaArrowAltCircleRight className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/DailyReportTeacher" style={{color:'white'}} >Daily Report</Link></span>
        </div>
        
        
        <div className="sidebar-item">
          <FaUser className="sidebar-icon" />
          <span className="sidebar-text"><Link to="/ProfileT" style={{color:'white'}} >Profile</Link></span>
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
    </div></div>
  );
};

export default Sidebar;