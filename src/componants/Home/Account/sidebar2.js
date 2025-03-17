import { Link } from "react-router-dom";
import { FaUserCog, FaLock, FaDownload } from "react-icons/fa";
import "./sidebar2.css";


const Sidebar2 = () => {
  return (
    
    
    <div className="oursidebar">
        
      <ul>
        <li>
          <Link to="/settings">
            <FaUserCog /> Login Information
          </Link>
        </li>
        <li>
          <Link to="/privacy">
            <FaLock /> Privacy
          </Link>
        </li>
        <li>
          <Link to="/export">
            <FaDownload /> Export Data
          </Link>
        </li>
      </ul>
    </div>
   
  );
};

export default Sidebar2;
