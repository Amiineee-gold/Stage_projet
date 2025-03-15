import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from './studentsSlice';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';
import './styles.css';

export default function StudentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newEntry, setNewEntry] = useState({ nom: "", niveau: "", matiere: "", email: "", phone: "", address: "", datePayement: "" });

  const handleAdd = () => {
    dispatch(addStudent(newEntry));
    navigate('/Learner');
  };

  return (
    <div className="container">
       <Header/>
       <Sidebar/>
      <br/><br/>
      <strong>Nom : </strong><input placeholder="Nom" onChange={(e) => setNewEntry({ ...newEntry, nom: e.target.value })} /><br /><br />
      <strong>Niveau : </strong><input placeholder="Niveau" onChange={(e) => setNewEntry({ ...newEntry, niveau: e.target.value })} /><br /><br />
      <strong>Matiere : </strong><input placeholder="Matiere" onChange={(e) => setNewEntry({ ...newEntry, matiere: e.target.value })} /><br /><br />
      <strong>Email : </strong><input placeholder="Email" onChange={(e) => setNewEntry({ ...newEntry, email: e.target.value })} /><br /><br />
      <strong>Telephone : </strong><input placeholder="Telephone" onChange={(e) => setNewEntry({ ...newEntry, phone: e.target.value })} /><br /><br />
      <strong>Adresse : </strong><input placeholder="Adresse" onChange={(e) => setNewEntry({ ...newEntry, address: e.target.value })} /><br /><br />
      <strong>DatePayement : </strong><input type="date" onChange={(e) => setNewEntry({ ...newEntry, datePayement: e.target.value })} /><br /><br />
      <button onClick={handleAdd} style={{ backgroundColor: 'blue', color: 'white' }}><strong>Add</strong></button><br /><br />
    </div>
  );
}