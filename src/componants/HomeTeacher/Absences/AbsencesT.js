import { useState } from "react";
import data from "./data";
import Sidebar from "../sidebar/Sidebar";
import Header from "../Header/Header";

export default function AttendanceTable() {
  const [attendance, setAttendance] = useState(
    data.map((student) => ({ id: student.id, status: "present", note: "" }))
  );

  const handleStatusChange = (id, status) => {
    setAttendance((prev) =>
      prev.map((entry) => (entry.id === id ? { ...entry, status } : entry))
    );
  };

  const handleNoteChange = (id, note) => {
    setAttendance((prev) =>
      prev.map((entry) => (entry.id === id ? { ...entry, note } : entry))
    );
  };

  const handleSave = () => {
    // Logic for saving data, such as sending to a server or saving to local storage
    console.log("Données enregistrées:", attendance);
    alert("Les données ont été enregistrées.");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Sidebar/>
      <Header/>
      <h1 style={{color:"blue"}}>List Absence :</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nom</th>
            <th className="border p-2">Présent</th>
            <th className="border p-2">Retard</th>
            <th className="border p-2">Absent</th>
            <th className="border p-2">Note</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id} className="text-center bg-white border">
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">
                <input
                  type="radio"
                  name={`status-${student.id}`}
                  checked={
                    attendance.find((entry) => entry.id === student.id)?.status ===
                    "present"
                  }
                  onChange={() => handleStatusChange(student.id, "present")}
                />
              </td>
              <td className="border p-2">
                <input
                  type="radio"
                  name={`status-${student.id}`}
                  checked={
                    attendance.find((entry) => entry.id === student.id)?.status ===
                    "retard"
                  }
                  onChange={() => handleStatusChange(student.id, "retard")}
                />
              </td>
              <td className="border p-2">
                <input
                  type="radio"
                  name={`status-${student.id}`}
                  checked={
                    attendance.find((entry) => entry.id === student.id)?.status ===
                    "absent"
                  }
                  onChange={() => handleStatusChange(student.id, "absent")}
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  className="border p-1 w-full"
                  value={
                    attendance.find((entry) => entry.id === student.id)?.note || ""
                  }
                  onChange={(e) => handleNoteChange(student.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 ">
        <button
          onClick={handleSave}
          className="bg-blue-500 bg-primary text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}
