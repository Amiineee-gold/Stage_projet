import React, { useEffect, useState } from 'react';

const Blevels = () => {
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // Pour afficher/masquer le modal d'ajout
  const [showDetailModal, setShowDetailModal] = useState(false); // Pour afficher/masquer le modal de détail
  const [showEditModal, setShowEditModal] = useState(false); // Pour afficher/masquer le modal de modification
  const [newLevel, setNewLevel] = useState({ name: '', slug: '', description: '' }); // État pour le nouveau niveau
  const [selectedLevel, setSelectedLevel] = useState(null); // Niveau sélectionné pour détail/modification

  // Simuler une requête API pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Exemple de données statiques
        const data = [
          {  name: '2BAC', slug: '2-bac', description: ' ' },
          {  name: '2BAC Fr', slug: '2-bac-fr', description: ' ' },
          {  name: '1BAC', slug: '1-bac', description: ' ' },
        ];
        setLevels(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Gérer l'ouverture et la fermeture des modals
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleShowDetailModal = (level) => {
    setSelectedLevel(level);
    setShowDetailModal(true);
  };
  const handleCloseDetailModal = () => setShowDetailModal(false);

  const handleShowEditModal = (level) => {
    setSelectedLevel(level);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => setShowEditModal(false);

  // Gérer les changements dans les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLevel({ ...newLevel, [name]: value });
  };

  // Gérer la soumission du formulaire d'ajout
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ajouter le nouveau niveau à la liste
    const newLevelWithId = { ...newLevel, id: levels.length + 1 }; // Générer un ID unique
    setLevels([...levels, newLevelWithId]);

    // Réinitialiser le formulaire et fermer le modal
    setNewLevel({ name: '', slug: '', description: '' });
    handleCloseModal();
  };

  // Gérer la soumission du formulaire de modification
  const handleEditSubmit = (e) => {
    e.preventDefault();

    // Mettre à jour le niveau dans la liste
    const updatedLevels = levels.map((level) =>
      level.id === selectedLevel.id ? { ...level, ...selectedLevel } : level
    );
    setLevels(updatedLevels);

    // Fermer le modal de modification
    handleCloseEditModal();
  };

  // Gérer la suppression d'un niveau
  const handleDelete = (id) => {
    const updatedLevels = levels.filter((level) => level.id !== id);
    setLevels(updatedLevels);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Levels</h1>

      {/* Bouton pour ouvrir le modal d'ajout */}
      <button className="btn btn-primary mb-4" onClick={handleShowModal}>
        Add Level
      </button>

      {/* Tableau pour afficher les niveaux */}
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
           
            <th>Name</th>
            <th>Slug</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {levels.map((level, index) => (
            <tr key={level.id}>
              
              <td>{level.name}</td>
              <td>{level.slug}</td>
              <td>{level.description}</td>
              <td>
                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => handleShowDetailModal(level)}
                >
                  Detail
                </button>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleShowEditModal(level)}
                >
                  Modify
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(level.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal pour ajouter un nouveau niveau */}
      {showModal && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Level</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={newLevel.name}
                      onChange={handleInputChange}
                      
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="slug" className="form-label">
                      Slug
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="slug"
                      name="slug"
                      value={newLevel.slug}
                      onChange={handleInputChange}
                      
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="3"
                      value={newLevel.description}
                      onChange={handleInputChange}
                      
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal pour afficher les détails d'un niveau */}
      {showDetailModal && selectedLevel && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Level Details</h5>
                <button type="button" className="btn-close" onClick={handleCloseDetailModal}></button>
              </div>
              <div className="modal-body">
                <p><strong>Name:</strong> {selectedLevel.name}</p>
                <p><strong>Slug:</strong> {selectedLevel.slug}</p>
                <p><strong>Description:</strong> {selectedLevel.description}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseDetailModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal pour modifier un niveau */}
      {showEditModal && selectedLevel && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Level</h5>
                <button type="button" className="btn-close" onClick={handleCloseEditModal}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleEditSubmit}>
                  <div className="mb-3">
                    <label htmlFor="editName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editName"
                      name="name"
                      value={selectedLevel.name}
                      onChange={(e) =>
                        setSelectedLevel({ ...selectedLevel, name: e.target.value })
                      }
                      
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="editSlug" className="form-label">
                      Slug
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editSlug"
                      name="slug"
                      value={selectedLevel.slug}
                      onChange={(e) =>
                        setSelectedLevel({ ...selectedLevel, slug: e.target.value })
                      }
                      
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="editDescription" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="editDescription"
                      name="description"
                      rows="3"
                      value={selectedLevel.description}
                      onChange={(e) =>
                        setSelectedLevel({ ...selectedLevel, description: e.target.value })
                      }
                      
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blevels;