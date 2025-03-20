import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componants/login/Login';
import ForgotPassword from './componants/login/ForgotPassword';
import Home from './componants/Home/Home';
import Learner from './componants/Home/learners/Learner'
import Teacher from './componants/Home/teachers/Teacher';
import Absence from './componants/Home/Absences/Absence'
import Expenses from './componants/Home/Expenses/Expenses'
import Accounting from './componants/Home/Accounting/Accounting'
import DailyReport from './componants/Home/Daily_Report/DailyReport'
import Profile from './componants/Home/Profile/Profile'
import AccountSettings from "./componants/Home/Account/AccountSettings";
import OtherSettings from './componants/Home/Other_Settings/OtherSetting'
import StudentForm from './componants/Home/learners/StudentForm'
import StudentEdit from './componants/Home/learners/StudentEdit';
import StudentDetails from './componants/Home/learners/StudentDetails';
import OurGrades from './componants/Home/scores/GradesDetails';
import OurScore from './componants/Home/scores/Score'
import OurBills from './componants/Home/teachers/BillListe';
import OurLearners from './componants/Home/teachers/LearnerListe'
import Notes from './componants/HomeTeacher/Notes/Notes';
import HomeTeachers from './componants/HomeTeacher/HomeTeachers'
import AbsenceT from './componants/HomeTeacher/Absences/AbsencesT';
import ProfileT from './componants/HomeTeacher/Profile/ProfileT';
import Privacy from "./componants/Home/Account/Privacy";
import ExportData from "./componants/Home/Account/ExportData";
import Account from './componants/Home/Account/Account';
import ListeAbsence from './componants/Home/Absences/ListeAbsence';
import StudentListDash from './componants/Home/Other_Settings/users';
import AddUserDash from './componants/Home/Other_Settings/addUser';
import ProfileDash from './componants/Home/Other_Settings/ProfileDash';
import BLearners from './componants/Home/Other_Settings/BLearners';
import Boffer from './componants/Home/Other_Settings/Boffer';
import Bgrades from './componants/Home/Other_Settings/Bgrades';
import Blevels from './componants/Home/Other_Settings/Blevels';
import BBills from './componants/Home/Other_Settings/Bbills';
import BAbsenceRecord from './componants/Home/Other_Settings/BAbsenceRecord';

function App() {
    const teacherList=[
      {id:1,Name:"Mona", LearnList:[{Name:"Amine",Username:"bneba",level:"3A",BillList:250}]},
      {id:2,Name:"Ayoub", LearnList:[{Name:"khalid",Username:"ayoubi",level:"4A",BillList:250}]},
      {id:3,Name:"hassan", LearnList:[{Name:"yakoute amina",Username:"najari",level:"6A",BillList:250},{Name:"karim",Username:"kantari",level:"6A",BillList:250},{Name:"Mohamed",Username:"bensaidi",level:"6A",BillList:250}]},
      {id:4,Name:"hiba", LearnList:[
        {Name:"saad",Username:"botriqa",level:"BAC",BillList:250},
        {Name:"simo",Username:"botriqa",level:"2A",BillList:300},
        {Name:"ayoub",Username:"botriqa",level:"3A",BillList:400},
        {Name:"amine",Username:"botriqa",level:"TC",BillList:150},
        {Name:"hassan",Username:"botriqa",level:"SVT",BillList:250}
      ]},
      {id:5,Name:"hiba", LearnList:[{Name:"tariq",Username:"najari",level:"6A",BillList:250},{Name:"karim",Username:"kantari",level:"6A",BillList:250},{Name:"Mohamed",Username:"bensaidi",level:"6A",BillList:250}]},
      {id:6,Name:"aya", LearnList:[]}
    ]
  
  
  return (
    <Router>
      <Routes>
      <Route path="/details/:id" element={<StudentDetails />} />
        <Route path="/edit/:id" element={<StudentEdit />} />
        <Route path="/Absence" element={<Absence />} />
        <Route path="/AbsenceT" element={<AbsenceT />} />
        <Route path="/ProfileT" element={<ProfileT />} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Learner" element={<Learner />} />
        <Route path="/Teacher" element={<Teacher info={teacherList} />} />
        <Route path="/Expenses" element={<Expenses />} />
        <Route path="/Teacher" element={<Teacher info={teacherList}/>} />
        <Route path="/LearnList/:id" element={<OurLearners info={teacherList}/>} />
        <Route path="/BillList/:id" element={<OurBills info={teacherList}/>} />
        <Route path="/Accounting" element={<Accounting />} />
        <Route path="/DailyReport" element={<DailyReport />} />
        <Route path="/OtherSettings" element={<OtherSettings />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ListeAbsence" element={<ListeAbsence />} />
        <Route path="/StudentForm" element={<StudentForm />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/HomeTeachers" element={< HomeTeachers/>} />
        <Route path="/scores" element={<OurScore info={teacherList}/>} />
        <Route path="/GradesList/:id" element={<OurGrades info={teacherList}/>} />
        <Route path="/settings" element={<AccountSettings />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/export" element={<ExportData />} />
        <Route path='/Account' component={<Account/>}/>
        <Route path='/allusers' element={<StudentListDash/>}/>
        <Route path='/addusers' element={<AddUserDash/>}/>
        <Route path='/usersProfile' element={<ProfileDash/>}/>
        <Route path='/LearnerDash' element={<BLearners/>}/>
        <Route path='/OffreDash' element={<Boffer/>}/>
        <Route path='/GradeDash' element={<Bgrades/>}/>
        <Route path='/LevelDash' element={<Blevels/>}/>
        <Route path='/BillsDash' element={<BBills/>}/>
        <Route path='/AbsenceDash' element={<BAbsenceRecord/>}/>










        
      </Routes>
    </Router>
  );
}

export default App;