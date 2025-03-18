import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../sidebar/Sidebar'
import SidebarDash from './SideBare';
import NavbarDash from './NavBareDashbord';
const OtherSetting = () => {
  return (
    <div>
      <NavbarDash></NavbarDash>
      <SidebarDash></SidebarDash>       
      <button><Link to="/Home"  style={{color:'white'}}>back to Home</Link></button>
    </div>
  )
}

export default OtherSetting
