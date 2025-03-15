import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateStudent } from './studentsSlice';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';
import './styles.css';

export default function StudentEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const students = useSelector((state) => state.students);
  const student = students.find((item) => item.id === parseInt(id));
  const [updatedStudent, setUpdatedStudent] = useState(student);

  const handleUpdate = () => {
    dispatch(updateStudent(updatedStudent));
    navigate('/Learner');
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div className="container">
       <Header/>
       <Sidebar/>
      <h3>Modifier l'étudiant</h3>
      <div><strong>Nom : </strong><input value={updatedStudent.nom} onChange={(e) => setUpdatedStudent({ ...updatedStudent, nom: e.target.value })} /></div>
      <div><strong>Niveau : </strong><input value={updatedStudent.niveau} onChange={(e) => setUpdatedStudent({ ...updatedStudent, niveau: e.target.value })} /></div>
      <div><strong>Matiere : </strong><input value={updatedStudent.matiere} onChange={(e) => setUpdatedStudent({ ...updatedStudent, matiere: e.target.value })} /></div>
      <div><strong>Email : </strong><input value={updatedStudent.email} onChange={(e) => setUpdatedStudent({ ...updatedStudent, email: e.target.value })} /></div>
      <div><strong>Phone : </strong><input value={updatedStudent.phone} onChange={(e) => setUpdatedStudent({ ...updatedStudent, phone: e.target.value })} /></div>
      <div><strong>Address : </strong><input value={updatedStudent.address} onChange={(e) => setUpdatedStudent({ ...updatedStudent, address: e.target.value })} /></div>
      <div><strong>DatePayement : </strong><input value={updatedStudent.datePayement} onChange={(e) => setUpdatedStudent({ ...updatedStudent, datePayement: e.target.value })} /></div>
      <div><button onClick={handleUpdate}><strong> Mettre a jour</strong></button></div>
    </div>
  );
}