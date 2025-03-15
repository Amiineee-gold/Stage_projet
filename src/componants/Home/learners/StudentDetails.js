import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';
import './styles.css';
export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const students = useSelector((state) => state.students);
  const student = students.find((item) => item.id === parseInt(id));

  if (!student) return <div>Loading...</div>;

  return (
    <div className="container">
       <Header/>
       <Sidebar/>
      <h3>Détails de l'étudiant</h3>
      <div><strong>Nom :</strong><input type="text" value={student.nom} disabled /></div>
      <div><strong>Niveau :</strong><input type="text" value={student.niveau} disabled /></div>
      <div><strong>Matière :</strong><input type="text" value={student.matiere} disabled /></div>
      <div><strong>Email :</strong><input type="email" value={student.email} disabled /></div>
      <div><strong>Téléphone :</strong><input type="text" value={student.phone} disabled /></div>
      <div><strong>Adresse :</strong><input type="text" value={student.address} disabled /></div>
      <div><strong>Date de paiement :</strong><input type="date" value={student.datePayement} disabled /></div>
      <button onClick={() => navigate('/Learner')}>Fermer</button>
    </div>
  );
}