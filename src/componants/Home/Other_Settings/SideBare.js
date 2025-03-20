import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart,
  Users,
  Settings,
  Book,
  Wallet,
  Calendar,
  FileText,
  Briefcase,
  DollarSign,
  Menu,
  ChevronDown,
} from "lucide-react";
import "./SideBare.css";

const SidebarDash = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <BarChart />, path: "/" },
    {
      name: "Users",
      icon: <Users />,
      subItems: [
        { name: "All Users", path: "/allusers" },
        { name: "Add User", path: "/addusers" },
        { name: "Profile", path: "/usersProfile" },
        { name: "Pending Signup", path: "/users/pending" },
        { name: "Subjects", path: "/users/subjects" },
      ],
    },
    { name: "Tools", icon: <Settings />, path: "/tools" },
    {
      name: "Learners",
      icon: <Book />,
      subItems: [
        { name: "Learner", path: "/learnerDash" },
        { name: "Add New", path: "/learners/add" },
        { name: "Level", path: "/LevelDash" },
      ],
    },
    { name: "Offers", icon: <Wallet />, path: "/offreDash" },
    { name: "Absence Records", icon: <Calendar />, path: "/AbsenceDash" },
    { name: "Grades", icon: <FileText />, path: "/GradeDash" },
    { name: "Memberships", icon: <Briefcase />, path: "/memberships" },
    { name: "Bills", icon: <DollarSign />, path: "/billsDash" },
  ];

  return (
    <div className={`DashSidebar ${collapsed ? "collapsed" : ""}`}>
      <nav className="DashMenu">
        {menuItems.map((item, index) => (
          <div key={index} className="DashMenu-item-wrapper">
            {item.subItems ? (
              <div
                className={`DashMenu-item ${hoveredDropdown === index ? "active" : ""}`}
                onMouseEnter={() => setHoveredDropdown(index)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                {item.icon}
                <span className={`DashMenu-text ${collapsed ? "hidden" : ""}`}>{item.name}</span>
                <ChevronDown className="dropdown-icon" />
                {hoveredDropdown === index && (
                  <div
                    className="DashDropdown"
                    onMouseEnter={() => setHoveredDropdown(index)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={`DashDropdown-item ${location.pathname === subItem.path ? "active" : ""}`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                className={`DashMenu-item ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.icon}
                <span className={`DashMenu-text ${collapsed ? "hidden" : ""}`}>{item.name}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      <button className="collapse-button" onClick={() => setCollapsed(!collapsed)}>
        <Menu />
        <span className={`DashCollaps-text ${collapsed ? "hidden" : ""}`}>Collapse menu</span>
      </button>
    </div>
  );
};

export default SidebarDash;
