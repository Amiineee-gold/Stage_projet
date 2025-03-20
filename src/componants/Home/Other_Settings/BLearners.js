import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash, FaInfoCircle } from 'react-icons/fa';
import SidebarDash from './SideBare';
import NavbarDash from './NavBareDashbord';

function BLearners() {
  const [learners, setLearners] = useState([
    {
      id: 1,
      name: 'mohamed',
      dateOfBirth: '2005-05-15',
      guardian: 'amin',
      phone: '0612345678',
      email: 'mohamed@gmail.com',
      address: 'harakat',
      cin: '',
      massarCode: '',
      level: '1BAC',
      date: '2023-10-01'
    },
    {
      id: 2,
      name: ' adam',
      dateOfBirth: '2006-02-16',
      guardian: 'youssef',
      phone: '0623456789',
      email: 'adam@gmail.com',
      address: 'legwasem',
      cin: '',
      massarCode: '',
      level: '2BAC',
      date: '2023-10-02'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newLearner, setNewLearner] = useState({
    id: null,
    name: '',
    dateOfBirth: '',
    guardian: '',
    phone: '',
    email: '',
    address: '',
    cin: '',
    massarCode: '',
    level: '',
    date: new Date().toLocaleDateString()
  });

  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedLearner, setSelectedLearner] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!newLearner.name) newErrors.name = 'Name is ';
    if (!newLearner.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is ';
    if (!newLearner.guardian) newErrors.guardian = 'Guardian is ';
    if (!newLearner.phone) newErrors.phone = 'Phone is ';
    if (!newLearner.email) newErrors.email = 'Email is ';
    if (!newLearner.address) newErrors.address = 'Address is ';
    if (!newLearner.cin) newErrors.cin = 'CIN is ';
    if (!newLearner.massarCode) newErrors.massarCode = 'Massar Code is ';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLearner(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddLearner = () => {
    if (validateForm()) {
      const newId = learners.length ? Math.max(...learners.map(a => a.id)) + 1 : 1;
      setLearners([...learners, { ...newLearner, id: newId }]);
      setNewLearner({
        id: null,
        name: '',
        dateOfBirth: '',
        guardian: '',
        phone: '',
        email: '',
        address: '',
        cin: '',
        massarCode: '',
        level: '',
        date: new Date().toLocaleDateString()
      });
      setShowModal(false);
    }
  };

  const handleEditLearner = (id) => {
    const learnerToEdit = learners.find(learner => learner.id === id);
    setNewLearner(learnerToEdit);
    setShowModal(true);
  };

  const handleDeleteLearner = (id) => {
    const updatedLearners = learners.filter(learner => learner.id !== id);
    setLearners(updatedLearners);
  };

  const handleViewDetails = (id) => {
    const learnerToView = learners.find(learner => learner.id === id);
    setSelectedLearner(learnerToView);
    setShowDetailModal(true);
  };

  return (
    <>
      <NavbarDash></NavbarDash>
      <SidebarDash></SidebarDash>
      <div className="container mt-5" style={{minWidth:"160vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <h2>Learners</h2>
      <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)} style={{display:"flex",justifyContent:"flex-start"}}>Add Learner</button>
      <table className="table table-striped table-bordered mt-3"style={{minWidth:"150vh"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Guardian</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>CIN</th>
            <th>Massar Code</th>
            <th>Level</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {learners.map((learner) => (
            <tr key={learner.id}>
              <td>{learner.name}</td>
              <td>{learner.dateOfBirth}</td>
              <td>{learner.guardian}</td>
              <td>{learner.phone}</td>
              <td>{learner.email}</td>
              <td>{learner.address}</td>
              <td>{learner.cin}</td>
              <td>{learner.massarCode}</td>
              <td>{learner.level}</td>
              <td>{learner.date}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditLearner(learner.id)}><FaEdit /></button>
                <button className="btn btn-danger btn-sm me-2" onClick={() => handleDeleteLearner(learner.id)}><FaTrash /></button>
                <button className="btn btn-info btn-sm" onClick={() => handleViewDetails(learner.id)}><FaInfoCircle /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{newLearner.id ? 'Modify Learner' : 'Add Learner'}</h5>
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
                      value={newLearner.name}
                      onChange={handleChange}
                      
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      value={newLearner.dateOfBirth}
                      onChange={handleChange}
                      
                    />
                    {errors.dateOfBirth && <div className="text-danger">{errors.dateOfBirth}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Guardian</label>
                    <input
                      type="text"
                      className="form-control"
                      name="guardian"
                      value={newLearner.guardian}
                      onChange={handleChange}
                      
                    />
                    {errors.guardian && <div className="text-danger">{errors.guardian}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={newLearner.phone}
                      onChange={handleChange}
                      
                    />
                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={newLearner.email}
                      onChange={handleChange}
                      
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={newLearner.address}
                      onChange={handleChange}
                      
                    />
                    {errors.address && <div className="text-danger">{errors.address}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">CIN</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cin"
                      value={newLearner.cin}
                      onChange={handleChange}
                      
                    />
                    {errors.cin && <div className="text-danger">{errors.cin}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Massar Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="massarCode"
                      value={newLearner.massarCode}
                      onChange={handleChange}
                      
                    />
                    {errors.massarCode && <div className="text-danger">{errors.massarCode}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Level</label>
                    <select
                      className="form-select"
                      name="level"
                      value={newLearner.level}
                      onChange={handleChange}
                      
                    >
                      <option value="1BAC">1BAC</option>
                      <option value="2BAC">2BAC</option>
                      <option value="2BAC Fr">2BAC Fr</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input
                      type="text"
                      className="form-control"
                      name="date"
                      value={newLearner.date}
                      readOnly
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleAddLearner}>
                  {newLearner.id ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDetailModal && selectedLearner && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Learner Details</h5>
                <button type="button" className="btn-close" onClick={() => setShowDetailModal(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Name:</strong> {selectedLearner.name}</p>
                <p><strong>Date of Birth:</strong> {selectedLearner.dateOfBirth}</p>
                <p><strong>Guardian:</strong> {selectedLearner.guardian}</p>
                <p><strong>Phone:</strong> {selectedLearner.phone}</p>
                <p><strong>Email:</strong> {selectedLearner.email}</p>
                <p><strong>Address:</strong> {selectedLearner.address}</p>
                <p><strong>CIN:</strong> {selectedLearner.cin}</p>
                <p><strong>Massar Code:</strong> {selectedLearner.massarCode}</p>
                <p><strong>Level:</strong> {selectedLearner.level}</p>
                <p><strong>Date:</strong> {selectedLearner.date}</p>
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

export default BLearners;