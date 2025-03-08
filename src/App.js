import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componants/login/Login';
import ForgotPassword from './componants/login/ForgotPassword';
import Home from './componants/Home/Home';
import Learner from './componants/Home/learners/Learner'
import Teacher from './componants/Home/teachers/Teacher'
import Score from './componants/Home/scores/Score'
import Expenses from './componants/Home/Expenses/Expenses'
import Accounting from './componants/Home/Accounting/Accounting'
import DailyReport from './componants/Home/Daily_Report/DailyReport'
import Profile from './componants/Home/Profile/Profile'
import Account from './componants/Home/Account/Account'
import OtherSettings from './componants/Home/Other_Settings/OtherSetting'

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Learner" element={<Learner />} />
        <Route path="/Teacher" element={<Teacher />} />
        <Route path="/Expenses" element={<Expenses />} />
        <Route path="/scores" element={<Score />} />
        <Route path="/Accounting" element={<Accounting />} />
        <Route path="/DailyReport" element={<DailyReport />} />
        <Route path="/OtherSettings" element={<OtherSettings />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Account" element={<Account />} />
        
      </Routes>
    </Router>
  );
}

export default App;