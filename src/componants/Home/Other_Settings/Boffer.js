import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Boffer() {
  // Initialize the offers state with internal data
  const [offers, setOffers] = useState([
    {
      title: 'assurance et inscription',
      type: 'Once',
      subjects: {
        none : 100
      },
      price: 90,
      date: '2023-9-01'
    },
    {
      title: '2BAC Fr ',
      type: 'Monthly',
      subjects: {
        SVT: 40,
        French: 10
      },
      price: 300,
      date: '2023-10-02'
    },
    {
      title: '2BAC ',
      type: 'Monthly',
      subjects: {
        SVT: 40,
        French: 10
      },
      price: 300,
      date: '2023-8-02'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(null);
  const [newOffer, setNewOffer] = useState({
    title: '',
    type: 'Monthly',
    subjects: {},
    price: 0,
    date: new Date().toLocaleDateString()
  });

  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOffer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubjectPercentageChange = (subject, percentage) => {
    setNewOffer(prevState => ({
      ...prevState,
      subjects: {
        ...prevState.subjects,
        [subject]: parseInt(percentage, 10) || 0
      }
    }));
  };

  const handleAddOrUpdateOffer = () => {
    if (isEditing) {
      const updatedOffers = [...offers];
      updatedOffers[currentOfferIndex] = newOffer;
      setOffers(updatedOffers);
    } else {
      setOffers([...offers, newOffer]);
    }
    setNewOffer({
      title: '',
      type: 'Monthly',
      subjects: {},
      price: 0,
      date: new Date().toLocaleDateString()
    });
    setShowModal(false);
    setIsEditing(false);
  };

  const handleEditOffer = (index) => {
    const offerToEdit = offers[index];
    setNewOffer(offerToEdit);
    setCurrentOfferIndex(index);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDeleteOffer = (index) => {
    const updatedOffers = offers.filter((_, i) => i !== index);
    setOffers(updatedOffers);
  };

  const handleViewDetails = (index) => {
    setSelectedOffer(offers[index]);
    setShowDetailModal(true);
  };

  return (
    <div className="container mt-5">
      <h2>Offers</h2>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Offer</button>

      <table className="table table-striped table-bordered mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Subjects</th>
            <th>Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, index) => (
            <tr key={index}>
              <td>{offer.title}</td>
              <td>{offer.type}</td>
              <td>
                <ul>
                  {Object.entries(offer.subjects).map(([subject, percentage]) => (
                    <li key={subject}>{subject}: {percentage}%</li>
                  ))}
                </ul>
              </td>
              <td>{offer.price}</td>
              <td>{offer.date}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditOffer(index)}>Modify</button>
                <button className="btn btn-danger btn-sm me-2" onClick={() => handleDeleteOffer(index)}>Delete</button>
                <button className="btn btn-info btn-sm" onClick={() => handleViewDetails(index)}>Detail</button>
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
                <h5 className="modal-title">{isEditing ? 'Modify Offer' : 'Add New Offer'}</h5>
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
                      value={newOffer.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Type</label>
                    <select
                      className="form-select"
                      name="type"
                      value={newOffer.type}
                      onChange={handleChange}
                    >
                      <option value="Monthly">Monthly</option>
                      <option value="Once">Once</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subjects and Percentages</label>
                    {['Math', 'PC',  'SVT', 'French'].map(subject => (
                      <div className="mb-2" key={subject}>
                        <label>{subject}</label>
                        <input
                          type="number"
                          className="form-control"
                          value={newOffer.subjects[subject] || 0}
                          onChange={(e) => handleSubjectPercentageChange(subject, e.target.value)}
                          min="0"
                          max="100"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      value={newOffer.price}
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleAddOrUpdateOffer}>
                  {isEditing ? 'Update Offer' : 'Add Offer'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDetailModal && selectedOffer && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Offer Details</h5>
                <button type="button" className="btn-close" onClick={() => setShowDetailModal(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Title:</strong> {selectedOffer.title}</p>
                <p><strong>Type:</strong> {selectedOffer.type}</p>
                <p><strong>Subjects:</strong></p>
                <ul>
                  {Object.entries(selectedOffer.subjects).map(([subject, percentage]) => (
                    <li key={subject}>{subject}: {percentage}%</li>
                  ))}
                </ul>
                <p><strong>Price:</strong> {selectedOffer.price}</p>
                <p><strong>Date:</strong> {selectedOffer.date}</p>
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

export default Boffer;