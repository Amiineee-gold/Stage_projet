import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importez Bootstrap CSS
import NavbarDash from './NavBareDashbord';
import SidebarDash from './SideBare';
const MembershipTable = () => {
  // Exemple de données initiales
  const initialMemberships = [
    {learner: "adam",offer: "2BAC",date: new Date().toLocaleDateString(),},
    {learner: "Mohamed",offer: "2BAC Fr",date: new Date().toLocaleDateString(),},
    {learner: "Amine",offer: "Standard",date: new Date().toLocaleDateString(),},
  ];

  // États pour gérer les membreships, les détails, l'édition et l'ajout
  const [memberships, setMemberships] = useState(initialMemberships);
  const [selectedMembership, setSelectedMembership] = useState(null); // Pour afficher les détails
  const [editMembership, setEditMembership] = useState(null); // Pour modifier un membership
  const [newMembership, setNewMembership] = useState({ learner: "", offer: "" }); // Pour ajouter un nouveau membership

  // Fonction pour afficher les détails
  const handleDetails = (membership) => {
    setSelectedMembership(membership);
  };

  // Fonction pour supprimer un membership
  const handleDelete = (id) => {
    setMemberships(memberships.filter((membership) => membership.id !== id));
  };

  // Fonction pour démarrer la modification d'un membership
  const handleEdit = (membership) => {
    setEditMembership({ ...membership });
  };

  // Fonction pour sauvegarder les modifications
  const handleSave = () => {
    setMemberships(
      memberships.map((membership) =>
        membership.id === editMembership.id ? editMembership : membership
      )
    );
    setEditMembership(null); // Quitter le mode édition
  };

  // Fonction pour annuler la modification
  const handleCancel = () => {
    setEditMembership(null);
  };

  // Fonction pour mettre à jour les champs en mode édition
  const handleChange = (e) => {
    if (!editMembership) return; // Vérifie si editMembership est null
    const { name, value } = e.target;
    setEditMembership({ ...editMembership, [name]: value });
  };
  

  // Fonction pour ajouter un nouveau membership
  const handleAdd = () => {
    if (newMembership.learner && newMembership.offer) {
      const newId = memberships.length + 1; // Générer un nouvel ID
      const newEntry = {
        id: newId,
        learner: newMembership.learner,
        offer: newMembership.offer,
        date: new Date().toLocaleDateString(),
      };
      setMemberships([...memberships, newEntry]); // Ajouter le nouveau membership
      setNewMembership({ learner: "", offer: "" }); // Réinitialiser le formulaire
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  // Fonction pour mettre à jour les champs du formulaire d'ajout
  const handleNewMembershipChange = (e) => {
    const { name, value } = e.target;
    setNewMembership({ ...newMembership, [name]: value });
  };

  return (
    <>
    <SidebarDash></SidebarDash>
    <NavbarDash></NavbarDash>
      <div className="container mt-5" style={{minWidth:"150vh"}}>
      <h1 className="text-center mb-4">Membership Table</h1>
      {/* Formulaire pour ajouter un nouveau membership */}
      <div className="mb-4">
        <h3>Add New Membership</h3>
        <div className="row">
          <div className="col-md-4">
            <input type="text" name="learner" value={newMembership.learner} onChange={handleNewMembershipChange} className="form-control mb-2" placeholder="Learner Name"/>
          </div>
          <div className="col-md-4">
            <input type="text" name="offer" value={newMembership.offer} onChange={handleNewMembershipChange} className="form-control mb-2" placeholder="Offer"/>
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary" onClick={handleAdd}><i className="bi bi-plus"></i> Add</button>
          </div>
        </div>
      </div>

      {/* Tableau des membreships */}
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Learner</th>
            <th>Offer</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {memberships.map((membership, index) => (
            <tr key={membership.id}>
              <td>
                {editMembership?.id === membership.id ? (
                  <input type="text" name="learner" value={editMembership?.learner || ""} onChange={handleChange} className="form-control"/>
                ) : (
                  membership.learner
                )}
              </td>
              <td>
                {editMembership?.id === membership.id ? (
                  <input type="text" name="offer" value={editMembership?.offer || ""} onChange={handleChange} className="form-control"/>
                ) : (
                  membership.offer
                )}
              </td>
              <td>{membership.date}</td>
              <td>
                {editMembership?.id === membership.id ? (
                  <>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={handleSave}
                    >
                      <i className="bi bi-save"></i> Save
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={handleCancel}
                    >
                      <i className="bi bi-x"></i> Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() => handleDetails(membership)}
                    >
                      <i className="bi bi-eye"></i> Details
                    </button>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(membership)}
                    >
                      <i className="bi bi-pencil"></i> Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(membership.id)}
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Affichage des détails dans une carte */}
      {selectedMembership && (
        <div className="mt-4">
          <div className="card">
            <div className="card-header">
              <h3>Details</h3>
            </div>
            <div className="card-body">
              <p>
                <strong>Learner:</strong> {selectedMembership.learner}
              </p>
              <p>
                <strong>Offer:</strong> {selectedMembership.offer}
              </p>
              <p>
                <strong>Date:</strong> {selectedMembership.date}
              </p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedMembership(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};
export default MembershipTable;