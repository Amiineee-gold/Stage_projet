import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../Header/Header";

const ListeAbsence = () => {
    const navigate = useNavigate();
    const [absences, setAbsences] = useState([
        { id: 1, name: "adam", status: "P", note: "" },
        { id: 2, name: "amin", status: "A", note: "Malade" },
        { id: 3, name: "abdo", status: "R", note: "Retard de 10 min" },
    ]);

    const handleStatusChange = (id, status) => {
        setAbsences(absences.map(abs => abs.id === id ? { ...abs, status } : abs));
    };

    const handleNoteChange = (id, note) => {
        setAbsences(absences.map(abs => abs.id === id ? { ...abs, note } : abs));
    };

    const handleSave = () => {
        console.log("Données enregistrées :", absences);
        alert("Absences mises à jour avec succès !");
    };

    return (
        <div className="container mt-4" >
            <Sidebar/>
            <Header/>
            <h2>Liste des Absences</h2>
            <table className="table table-striped table-bordered" style={{width:"600px",textAlign:"center"}}>
                <thead>
                    <tr>
                        <th>Nom de l'Étudiant</th>
                        <th>Présent (P)</th>
                        <th>Retard (R)</th>
                        <th>Absent (A)</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {absences.map((etudiant) => (
                        <tr key={etudiant.id}>
                            <td>{etudiant.name}</td>
                            <td>
                                <input
                                    type="radio"
                                    name={`status-${etudiant.id}`}
                                    checked={etudiant.status === "P"}
                                    onChange={() => handleStatusChange(etudiant.id, "P")}
                                />
                            </td>
                            <td>
                                <input
                                    type="radio"
                                    name={`status-${etudiant.id}`}
                                    checked={etudiant.status === "R"}
                                    onChange={() => handleStatusChange(etudiant.id, "R")}
                                />
                            </td>
                            <td>
                                <input
                                    type="radio"
                                    name={`status-${etudiant.id}`}
                                    checked={etudiant.status === "A"}
                                    onChange={() => handleStatusChange(etudiant.id, "A")}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={etudiant.note}
                                    onChange={(e) => handleNoteChange(etudiant.id, e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handleSave}>Enregistrer</button>
        </div>
    );
};

export default ListeAbsence;