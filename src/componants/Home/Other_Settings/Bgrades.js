import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDash from './NavBareDashbord';
import SidebarDash from './SideBare';

function Bgrades() {
  // State pour stocker les enregistrements de grades avec des données internes
  const [grades, setGrades] = useState([
    {
      id: 1,
      name: 'youssef',
      description: '',
      date: '2023-10-01'
    },
    {
      id: 2,
      name: 'youness',
      description: '',
      date: '2023-10-02'
    },
    {
      id: 3,
      name: 'oussama',
      description: '',
      date: '2023-09-15'
    },
    {
      id: 4,
      name: 'nouamane',
      description: '',
      date: '2023-11-05'
    }
  ]);

  // State pour gérer l'affichage de la modal d'ajout/modification
  const [showModal, setShowModal] = useState(false);

  // State pour stocker les données du nouvel enregistrement ou de l'enregistrement à modifier
  const [newGrade, setNewGrade] = useState({
    id: null,
    name: '',
    description: '',
    date: new Date().toLocaleDateString() // Date du système par défaut
  });

  // State pour gérer l'affichage de la modal de détail
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);

  // State pour le filtrage par mois
  const [selectedMonth, setSelectedMonth] = useState('');

  // State pour le filtrage par nom
  const [searchName, setSearchName] = useState('');

  // Gestion des changements dans les champs de saisie
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGrade(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Ajouter ou modifier un enregistrement de grade
  const handleAddOrUpdateGrade = () => {
    if (newGrade.name && newGrade.description) {
      if (newGrade.id) {
        // Modification d'un enregistrement existant
        const updatedGrades = grades.map(grade =>
          grade.id === newGrade.id ? newGrade : grade
        );
        setGrades(updatedGrades);
      } else {
        // Ajout d'un nouvel enregistrement
        const newId = grades.length ? Math.max(...grades.map(a => a.id)) + 1 : 1;
        setGrades([...grades, { ...newGrade, id: newId }]);
      }
      setNewGrade({ id: null, name: '', description: '', date: new Date().toLocaleDateString() });
      setShowModal(false);
    }
  };

  // Modifier un enregistrement
  const handleEditGrade = (id) => {
    const gradeToEdit = grades.find(grade => grade.id === id);
    setNewGrade(gradeToEdit);
    setShowModal(true);
  };

  // Supprimer un enregistrement
  const handleDeleteGrade = (id) => {
    const updatedGrades = grades.filter(grade => grade.id !== id);
    setGrades(updatedGrades);
  };

  // Afficher les détails d'un enregistrement
  const handleViewDetails = (id) => {
    const gradeToView = grades.find(grade => grade.id === id);
    setSelectedGrade(gradeToView);
    setShowDetailModal(true);
  };

  // Filtrer les grades par mois
  const filteredGradesByMonth = selectedMonth
    ? grades.filter(grade => {
        const gradeDate = new Date(grade.date);
        return gradeDate.getMonth() + 1 === parseInt(selectedMonth, 10);
      })
    : grades;

  // Filtrer les grades par nom
const filteredGrades = searchName
? filteredGradesByMonth.filter(absence =>
    absence.name.toLowerCase().includes(searchName.toLowerCase())
  )
: filteredGradesByMonth;

  return (
    <>
    <NavbarDash></NavbarDash>
    <SidebarDash></SidebarDash>
    <div className="container mt-5"style={{minWidth:"150vh"}}>
      <h2>Grades :</h2>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Grade</button>

      {/* Filtrage par mois et par nom */}
      <div className="row mt-3">
        <div className="col-md-3">
          <label className="form-label">Filter by Month</label>
          <select
            className="form-select"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">All Months</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Filter by Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
      </div>

      {/* Tableau des grades */}
      <table className="table table-striped table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((grade) => (
            <tr key={grade.id}>
              <td>{grade.name}</td>
              <td>{grade.description}</td>
              <td>{grade.date}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditGrade(grade.id)}>Modify</button>
                <button className="btn btn-danger btn-sm me-2" onClick={() => handleDeleteGrade(grade.id)}>Delete</button>
                <button className="btn btn-info btn-sm" onClick={() => handleViewDetails(grade.id)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal pour ajouter ou modifier une grade */}
      {showModal && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{newGrade.id ? 'Modify Grade' : 'Add Grade'}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={newGrade.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={newGrade.description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input
                      type="text"
                      className="form-control"
                      name="date"
                      value={newGrade.date}
                      readOnly // La date est en lecture seule (date du système)
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleAddOrUpdateGrade}>
                  {newGrade.id ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal pour afficher les détails d'une grade */}
      {showDetailModal && selectedGrade && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Grade Details</h5>
                <button type="button" className="btn-close" onClick={() => setShowDetailModal(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Name:</strong> {selectedGrade.name}</p>
                <p><strong>Description:</strong> {selectedGrade.description}</p>
                <p><strong>Date:</strong> {selectedGrade.date}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDetailModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Bgrades;