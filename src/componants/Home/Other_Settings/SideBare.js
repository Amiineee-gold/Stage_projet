import { useState } from "react";
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

  const menuItems = [
    { name: "Dashboard", icon: <BarChart />, path: "/" },
    {
      name: "Users",
      icon: <Users />,
      subItems: [
        { name: "All Users", path: "/users/all" },
        { name: "Add User", path: "/users/add" },
        { name: "Profile", path: "/users/profile" },
        { name: "Pending Signup", path: "/users/pending" },
        { name: "Subjects", path: "/users/subjects" },
      ],
    },
    { name: "Tools", icon: <Settings />, path: "/tools" },
    {
      name: "Learners",
      icon: <Book />,
      subItems: [
        { name: "Learner", path: "/learners" },
        { name: "Add New", path: "/learners/add" },
        { name: "Level", path: "/learners/level" },
      ],
    },
    {
      name: "Offers",
      icon: <Wallet />,
      subItems: [
        { name: "Offers", path: "/offers" },
        { name: "Add New", path: "/offers/add" },
      ],
    },
    { name: "Absence Records", icon: <Calendar />, path: "/absence" },
    {
      name: "Grades",
      icon: <FileText />,
      subItems: [
        { name: "Grades", path: "/grades" },
        { name: "Add New", path: "/grades/add" },
      ],
    },
    {
      name: "Memberships",
      icon: <Briefcase />,
      subItems: [
        { name: "Memberships", path: "/memberships" },
        { name: "Add New", path: "/memberships/add" },
      ],
    },
    {
      name: "Bills",
      icon: <DollarSign />,
      subItems: [
        { name: "Bills", path: "/bills" },
        { name: "Add New", path: "/bills/add" },
      ],
    },
  ];

  return (
    <div className={`DashSidebar ${collapsed ? "collapsed" : ""}`}>
      <nav className="DashMenu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="DashMenu-item-wrapper"
            onMouseEnter={() => setHoveredDropdown(index)}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <div className="DashMenu-item">
              {item.icon}
              <span className={`DashMenu-text ${collapsed ? "hidden" : ""}`}>{item.name}</span>
              {item.subItems && <ChevronDown className="dropdown-icon" />}
            </div>
            {item.subItems && hoveredDropdown === index && (
              <div className="DashDropdown">
                {item.subItems.map((subItem, subIndex) => (
                  <a key={subIndex} href={subItem.path} className="DashDropdown-item">
                    {subItem.name}
                  </a>
                ))}
              </div>
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
