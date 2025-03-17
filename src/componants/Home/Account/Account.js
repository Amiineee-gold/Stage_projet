
import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar2 from "./sidebar2";
import AccountSettings from "./AccountSettings";
import Privacy from "./Privacy";
import ExportData from "./ExportData";

import "./Account.css";

const Account = () => {
  return (
    <><Header />
      <Sidebar />
    
    <div className="account-page">
      {/* الهيدر والسيدبار الرئيسي */}
      

      {/* محتوى الصفحة */}
      <div className="account-content">
        {/* العنوان + زر */}
        <div className="account-header">
          <h2>Account Settings</h2>
          <Link to="/profile" className="profile-button">
            View My Profile
          </Link>
        </div>

        {/* جسم الصفحة يحتوي على الـ Sidebar2 والمحتوى المتغير */}
        <div className="account-body">
          <Sidebar2 />

          {/* محتوى الصفحة الديناميكي */}
          <div className="account-main-content">
            <Routes>
              <Route path="/settings" element={<AccountSettings />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/export" element={<ExportData />} />
              <Route path="*" element={<AccountSettings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Account;
