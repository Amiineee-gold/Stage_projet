import React from 'react';
import StudentList from './StudentList';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';
import './styles.css';
//import StudentForm from './StudentForm';

export default function Learner() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <h2>Gestion des Étudiants</h2>
      <StudentList />
      
    </div>
  );
}