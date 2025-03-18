import { useState } from "react";
import { BarChart, Users, Settings, Book, Wallet, Calendar, FileText, Briefcase, DollarSign, Menu,User } from "lucide-react";
import "./SideBare.css"; // Import the CSS file
const SidebarDash = () => {
  const [collapsed, setCollapsed] = useState(false);
  const menuItems = [
    { name: "Dashboard", icon: <BarChart />, path: "/" },
    { name: "Users", icon: <Users />, path: "/users" },
    { name: "Tools", icon: <Settings />, path: "/tools" },
    { name: "Learners", icon: <Book />, path: "/learners" },
    { name: "Offers", icon: <Wallet />, path: "/offers" },
    { name: "Absence Records", icon: <Calendar />, path: "/absence" },
    { name: "Grades", icon: <FileText />, path: "/grades" },
    { name: "Memberships", icon: <Briefcase />, path: "/memberships" },
    { name: "Bills", icon: <DollarSign />, path: "/bills" }
    ,
  ];

  return (
    <div className={`DashSidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Menu Items */}
      <nav className="DashMenu">
        {menuItems.map((item, index) => (
          <a key={index} href={item.path} className="DashMenu-item">
            {item.icon}
            <span className={`DashMenu-text ${collapsed ? "hidden" : ""}`}>{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Collapse Button */}
      <button className="collapse-button" onClick={() => setCollapsed(!collapsed)}>
        <Menu />
        <span className={`DashCollaps-text ${collapsed ? "hidden" : ""}`}>Collapse menu</span>
      </button>
    </div>
  );
};

export default SidebarDash;
