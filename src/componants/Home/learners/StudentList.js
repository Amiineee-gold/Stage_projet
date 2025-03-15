import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent } from './studentsSlice';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';
import './styles.css'
export default function StudentList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const students = useSelector((state) => state.students);

  const [searchNom, setSearchNom] = useState('');
  const [searchNiveau, setSearchNiveau] = useState('');
  const [searchMatiere, setSearchMatiere] = useState('');

  const filteredData = students.filter(
    (item) =>
      item.nom.toLowerCase().includes(searchNom.toLowerCase()) &&
      item.niveau.toLowerCase().includes(searchNiveau.toLowerCase()) &&
      item.matiere.toLowerCase().includes(searchMatiere.toLowerCase())
  );

  return (
    <div>
      <Header/>
      <Sidebar/>
      <button
        onClick={() => navigate('/add')}
        style={{ backgroundColor: 'green', color: 'white', marginBottom: '20px' }}
      >
        Ajouter un Étudiant
      </button><br/>

      {/* Search Filters */}
      <strong>Filtrer par nom</strong><input placeholder="Filtrer par nom" onChange={(e) => setSearchNom(e.target.value)} />
      <strong>Filtrer par niveau</strong><input placeholder="Filtrer par niveau" onChange={(e) => setSearchNiveau(e.target.value)} />
      <strong>Filtrer par matiere</strong><input placeholder="Filtrer par matiere" onChange={(e) => setSearchMatiere(e.target.value)} />

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Niveau</th>
            <th>Matière</th>
            <th>Date de paiement</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.nom}</td>
              <td>{item.niveau}</td>
              <td>{item.matiere}</td>
              <td>{item.datePayement}</td>
              <td>
                <button onClick={() => navigate(`/details/${item.id}`)} style={{ backgroundColor: 'yellow', color: 'white' }}>Détails</button>
                <button onClick={() => navigate(`/edit/${item.id}`)} style={{ backgroundColor: 'orange', color: 'white' }}>Modifier</button>
                <button onClick={() => dispatch(deleteStudent(item.id))} style={{ backgroundColor: 'red', color: 'white' }}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}