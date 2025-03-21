import React, { useState } from 'react';
import { Home, MessageCircle, Settings, User, Plus} from 'lucide-react';
import {Link} from "react-router-dom"
import './NavbarDashbord.css';

const NavbarDash = () => {
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isSchoolHovered, setIsSchoolHovered] = useState(false);
  const [isNewHovered, setIsNewHovered] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-section">
        <ul className="navbar-list">
          <li
            className="navbar-item school-item"
            onMouseEnter={() => setIsSchoolHovered(true)}
            onMouseLeave={() => setIsSchoolHovered(false)}
          >
            <Home className="navbar-icon" />
            <span>Tiko School - C2</span>
            {isSchoolHovered && (
              <div className="dropdown" style={{height:40, display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Link>Visite site</Link>
              </div>
            )}
          </li>
          <li className="navbar-item">
            <MessageCircle className="navbar-icon" />
            <span>Comments</span>
          </li>
          <li
            className="navbar-item new-item"
            onMouseEnter={() => setIsNewHovered(true)}
            onMouseLeave={() => setIsNewHovered(false)}
          >
            <Plus className="navbar-icon" />
            <span>New</span>
            {isNewHovered && (
              <div className="dropdown">
                <Link to="/LearnerDash">Learner</Link>
                <Link to="/OffreDash">Offer</Link>
                <Link to="/AbsenceDash">Absence Record</Link>
                <Link to="/GradeDash">Grade</Link>
                <Link to="/Membership">Membership</Link>
                <Link to="/BillsDash">Bill</Link>
                <Link to="/allusers">User</Link>
              </div>
            )}
          </li>
          <li
            className="navbar-item profile-item"
            onMouseEnter={() => setIsProfileHovered(true)}
            onMouseLeave={() => setIsProfileHovered(false)}
          >
            <User className="navbar-icon" />
            <span>Amine benbba</span>
            {isProfileHovered && (
              <div className="dropdown">
                <div className="profile-header" style={{height:100, borderRadius:200}}>
                  <User size={60} color='white'></User>
                </div>
                <div className="profile-content">
                  <p>Name: Amine Benbba</p>
                  <p>Email: amine@example.com</p>
                  <p>Role: Admin</p>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarDash;