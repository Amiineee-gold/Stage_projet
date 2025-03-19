import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BBills() {
  // State pour stocker les enregistrements de Bills avec des données internes
  const [Bills, setBills] = useState([
    {
      id: 1,
      title: 'assurance et inscription',
      price: 90,
      date: '2023-10-01'
    },
    {
      id: 2,
      title: '2BAC Fr',
      price: 200,
      date: '2023-10-02'
    },
    {
      id: 3,
      title: '2BAC',
      price: 150,
      date: '2023-09-15'
    },
    {
      id: 4,
      title: '1bac Fr ',
      price: 300,
      date: '2023-11-05'
    }
  ]);

  // State pour gérer l'affichage de la modal d'ajout/modification
  const [showModal, setShowModal] = useState(false);

  // State pour stocker les données du nouvel enregistrement ou de l'enregistrement à modifier
  const [newGrade, setNewGrade] = useState({
    id: null,
    title: '',
    price: 0,
    date: new Date().toLocaleDateString() // Date du système par défaut
  });

  // State pour gérer l'affichage de la modal de détail
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);

  // State pour le filtrage par mois
  const [selectedMonth, setSelectedMonth] = useState('');

  // State pour le filtrage par titre
  const [searchTitle, setSearchTitle] = useState('');

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
    if (newGrade.title && newGrade.price) {
      if (newGrade.id) {
        // Modification d'un enregistrement existant
        const updatedBills = Bills.map(grade =>
          grade.id === newGrade.id ? newGrade : grade
        );
        setBills(updatedBills);
      } else {
        // Ajout d'un nouvel enregistrement
        const newId = Bills.length ? Math.max(...Bills.map(a => a.id)) + 1 : 1;
        setBills([...Bills, { ...newGrade, id: newId }]);
      }
      setNewGrade({ id: null, title: '', price: 0, date: new Date().toLocaleDateString() });
      setShowModal(false);
    }
  };

  // Modifier un enregistrement
  const handleEditGrade = (id) => {
    const gradeToEdit = Bills.find(grade => grade.id === id);
    setNewGrade(gradeToEdit);
    setShowModal(true);
  };

  // Supprimer un enregistrement
  const handleDeleteGrade = (id) => {
    const updatedBills = Bills.filter(grade => grade.id !== id);
    setBills(updatedBills);
  };

  // Afficher les détails d'un enregistrement
  const handleViewDetails = (id) => {
    const gradeToView = Bills.find(grade => grade.id === id);
    setSelectedGrade(gradeToView);
    setShowDetailModal(true);
  };

  // Filtrer les Bills par mois
  const filteredBillsByMonth = selectedMonth
    ? Bills.filter(grade => {
        const gradeDate = new Date(grade.date);
        return gradeDate.getMonth() + 1 === parseInt(selectedMonth, 10);
      })
    : Bills;

  // Filtrer les Bills par titre
  const filteredBills = searchTitle
    ? filteredBillsByMonth.filter(grade =>
        grade.title.toLowerCase().includes(searchTitle.toLowerCase())
      )
    : filteredBillsByMonth;

  return (
    <div className="container mt-5">
      <h2>Bills :</h2>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Bills</button>

      {/* Filtrage par mois et par titre */}
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
          <label className="form-label">Filter by Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
      </div>

      {/* Tableau des Bills */}
      <table className="table table-striped table-bordered mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBills.map((grade) => (
            <tr key={grade.id}>
              <td>{grade.title}</td>
              <td>{grade.price}</td>
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
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={newGrade.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      value={newGrade.price}
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
                <p><strong>Title:</strong> {selectedGrade.title}</p>
                <p><strong>Price:</strong> {selectedGrade.price}</p>
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
  );
}

export default BBills;