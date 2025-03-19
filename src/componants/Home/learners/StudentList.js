import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent } from './studentsSlice';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';
import './styles.css'
import { Eye, Pencil, Trash } from 'lucide-react';
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
      <div className="mt-3">
  <button
    onClick={() => navigate('/add')}
    className="btn btn-success mb-3"
  >
    Ajouter un Étudiant
  </button>

  {/* Search Filters */}
  <div className="row align-items-center g-2">
    <div className="col-md-4">
      <label className="form-label fw-bold">Filtrer par nom</label>
      <input
        type="text"
        className="form-control"
        placeholder="Filtrer par nom"
        onChange={(e) => setSearchNom(e.target.value)}
      />
    </div>
    <div className="col-md-4">
      <label className="form-label fw-bold">Filtrer par niveau</label>
      <input
        type="text"
        className="form-control"
        placeholder="Filtrer par niveau"
        onChange={(e) => setSearchNiveau(e.target.value)}
      />
    </div>
    <div className="col-md-4">
      <label className="form-label fw-bold">Filtrer par matière</label>
      <input
        type="text"
        className="form-control"
        placeholder="Filtrer par matière"
        onChange={(e) => setSearchMatiere(e.target.value)}
      />
    </div>
  </div>
</div>


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
                <button onClick={() => navigate(`/details/${item.id}`)} style={{ backgroundColor: 'white', borderRadius: '5px' }}><Eye size={20} color='green' /></button>
                <button onClick={() => navigate(`/edit/${item.id}`)} style={{ backgroundColor: 'white', borderRadius: '5px' }}><Pencil size={20} color='blue'/></button>
                <button onClick={() => dispatch(deleteStudent(item.id))} style={{ backgroundColor: 'white', borderRadius: '5px' }}><Trash size={20} color='red'/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}