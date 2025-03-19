import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BAbsenceRecord() {
  // State pour stocker les enregistrements d'absence avec des données internes
  const [absences, setAbsences] = useState([
    {
      id: 1,
      name: 'adam',
      description: 'Absent pour raison médicale',
      date: '2023-10-01'
    },
    {
      id: 2,
      name: 'mohamed',
      description: 'Absent pour voyage',
      date: '2023-10-02'
    },
    {
      id: 3,
      name: 'amin',
      description: 'Absent pour rendez-vous personnel',
      date: '2023-09-15'
    },
    {
      id: 4,
      name: 'abdo',
      description: 'Absent pour formation',
      date: '2023-11-05'
    }
  ]);

  // State pour gérer l'affichage de la modal d'ajout/modification
  const [showModal, setShowModal] = useState(false);

  // State pour stocker les données du nouvel enregistrement ou de l'enregistrement à modifier
  const [newAbsence, setNewAbsence] = useState({
    id: null,
    name: '',
    description: '',
    date: new Date().toLocaleDateString() // Date du système par défaut
  });

  // State pour gérer l'affichage de la modal de détail
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedAbsence, setSelectedAbsence] = useState(null);

  // State pour le filtrage par mois
  const [selectedMonth, setSelectedMonth] = useState('');

  // State pour le filtrage par nom
  const [searchName, setSearchName] = useState('');

  // Gestion des changements dans les champs de saisie
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAbsence(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Ajouter ou modifier un enregistrement d'absence
  const handleAddOrUpdateAbsence = () => {
    if (newAbsence.name && newAbsence.description) {
      if (newAbsence.id) {
        // Modification d'un enregistrement existant
        const updatedAbsences = absences.map(absence =>
          absence.id === newAbsence.id ? newAbsence : absence
        );
        setAbsences(updatedAbsences);
      } else {
        // Ajout d'un nouvel enregistrement
        const newId = absences.length ? Math.max(...absences.map(a => a.id)) + 1 : 1;
        setAbsences([...absences, { ...newAbsence, id: newId }]);
      }
      setNewAbsence({ id: null, name: '', description: '', date: new Date().toLocaleDateString() });
      setShowModal(false);
    }
  };

  // Modifier un enregistrement
  const handleEditAbsence = (id) => {
    const absenceToEdit = absences.find(absence => absence.id === id);
    setNewAbsence(absenceToEdit);
    setShowModal(true);
  };

  // Supprimer un enregistrement
  const handleDeleteAbsence = (id) => {
    const updatedAbsences = absences.filter(absence => absence.id !== id);
    setAbsences(updatedAbsences);
  };

  // Afficher les détails d'un enregistrement
  const handleViewDetails = (id) => {
    const absenceToView = absences.find(absence => absence.id === id);
    setSelectedAbsence(absenceToView);
    setShowDetailModal(true);
  };

  // Filtrer les absences par mois
  const filteredAbsencesByMonth = selectedMonth
    ? absences.filter(absence => {
        const absenceDate = new Date(absence.date);
        return absenceDate.getMonth() + 1 === parseInt(selectedMonth, 10);
      })
    : absences;

  // Filtrer les absences par nom
  // Filtrer les absences par nom
const filteredAbsences = searchName
? filteredAbsencesByMonth.filter(absence =>
    absence.name.toLowerCase().includes(searchName.toLowerCase())
  )
: filteredAbsencesByMonth;

  return (
    <div className="container mt-5">
      <h2>Absence Record</h2>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Absence</button>

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

      {/* Tableau des absences */}
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
          {filteredAbsences.map((absence) => (
            <tr key={absence.id}>
              <td>{absence.name}</td>
              <td>{absence.description}</td>
              <td>{absence.date}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditAbsence(absence.id)}>Modify</button>
                <button className="btn btn-danger btn-sm me-2" onClick={() => handleDeleteAbsence(absence.id)}>Delete</button>
                <button className="btn btn-info btn-sm" onClick={() => handleViewDetails(absence.id)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal pour ajouter ou modifier une absence */}
      {showModal && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{newAbsence.id ? 'Modify Absence' : 'Add Absence'}</h5>
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
                      value={newAbsence.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={newAbsence.description}
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
                      value={newAbsence.date}
                      readOnly // La date est en lecture seule (date du système)
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleAddOrUpdateAbsence}>
                  {newAbsence.id ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal pour afficher les détails d'une absence */}
      {showDetailModal && selectedAbsence && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Absence Details</h5>
                <button type="button" className="btn-close" onClick={() => setShowDetailModal(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Name:</strong> {selectedAbsence.name}</p>
                <p><strong>Description:</strong> {selectedAbsence.description}</p>
                <p><strong>Date:</strong> {selectedAbsence.date}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDetailModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BAbsenceRecord;