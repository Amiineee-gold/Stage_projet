import { useState, useEffect } from "react";
import data from "./data";
import Sidebar from "../sidebar/Sidebar";
import Header from "../Header/Header";
const subjects = ["Math", "Physique", "SVT"];

const Notes = () => {
  const [selectedSubject, setSelectedSubject] = useState("Math");
  const [grades, setGrades] = useState(() => {
    const savedData = localStorage.getItem("grades");
    return savedData
      ? JSON.parse(savedData)
      : data.map((student) => ({
          id: student.id,
          name: student.name,
          notes: {
            Math: { note1: "", note2: "", note3: "", note4: "" },
            Physique: { note1: "", note2: "", note3: "", note4: "" },
            SVT: { note1: "", note2: "", note3: "", note4: "" },
          },
        }));
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("grades", JSON.stringify(grades));
  }, [grades]);

  const handleInputChange = (id, field, value) => {
    const updatedGrades = grades.map((student) =>
      student.id === id
        ? {
            ...student,
            notes: {
              ...student.notes,
              [selectedSubject]: {
                ...student.notes[selectedSubject],
                [field]: value,
              },
            },
          }
        : student
    );
    setGrades(updatedGrades);
  };

  const calculateAverage = (notes) => {
    const validNotes = Object.values(notes)
      .map((n) => (n !== "" ? Number(n) : null))
      .filter((n) => n !== null && !isNaN(n));

    return validNotes.length > 0
      ? (validNotes.reduce((a, b) => a + b, 0) / validNotes.length).toFixed(2)
      : "-";
  };

  const saveData = () => {
    localStorage.setItem("grades", JSON.stringify(grades));
    setMessage("Les notes ont été sauvegardées !");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Sidebar/>
      <Header/>
      <h2 className="text-primary font-semibold mb-4">Tableau des Notes</h2>

      {/* Sélection de la matière */}
      <div className="mb-4">
        <label className="mr-2 text-white font-medium">Choisir une matière :</label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="border rounded px-3 py-1"
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {/* Tableau des notes */}
      <table className="w-full border-collapse border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border p-2">Nom</th>
            <th className="border p-2">Note 1</th>
            <th className="border p-2">Note 2</th>
            <th className="border p-2">Note 3</th>
            <th className="border p-2">Note 4</th>
            <th className="border p-2">Moyenne</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((student) => (
            <tr key={student.id} className="text-center">
              <td className="border bg-white p-2 font-semibold">{student.name}</td>
              {["note1", "note2", "note3", "note4"].map((note) => (
                <td key={`${student.id}-${note}`} className="border bg-white p-2">
                  <input
                    type="number"
                    min="0"
                    max="20"
                    value={student.notes[selectedSubject][note]}
                    onChange={(e) => handleInputChange(student.id, note, e.target.value)}
                    className="w-16 text-center border rounded p-1"
                  />
                </td>
              ))}
              <td className="border bg-white p-2 font-semibold">
                {calculateAverage(student.notes[selectedSubject])}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bouton de sauvegarde */}
      <div className="mt-4  flex justify-center">
        <button
          onClick={saveData}
          className="bg-blue-600 bg-primary text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Sauvegarder
        </button>
      </div>

      {/* Message de confirmation */}
      {message && <p className="text-green-600 text-center mt-2">{message}</p>}
    </div>
  );
};

export default Notes;
