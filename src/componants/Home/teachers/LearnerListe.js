import "./LearnList.css";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
function OurLearners({ info }) {
    const [filtrBylevel, setFiltrBylevel] = useState("");
    const [searchTerm, setSearchTerm] = useState(""); // ✅ New state for name search
    const { id } = useParams();
    const selectedTeacher = info.find((teacher) => teacher.id === parseInt(id));
    if (!selectedTeacher) {
        return <p className="text-danger text-center">❌ Teacher not found</p>;
    }
    const levels = [];
    selectedTeacher.LearnList.forEach(student => {
        if (!levels.includes(student.level)) {
            levels.push(student.level);
        }
    });
    const filteredStudents = selectedTeacher.LearnList
        .filter(student => filtrBylevel ? student.level === filtrBylevel : true)
        .filter(student => student.Name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <>
            <Header />
            <Sidebar />
            <div className="container mt-4">
                <div className="card shadow-lg p-4">
                    <h2 className="text-primary">Teacher: {selectedTeacher.Name}</h2>
                    {/* Filter Form */}
                    <div className="row g-3 align-items-center mb-4">
                    <div className="col-md-4">
                            <label className="form-label fw-bold">Show Status for</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">Select Level:</label>
                            <select className="form-select" onChange={(e) => setFiltrBylevel(e.target.value)}>
                                <option value="">All Levels</option>
                                {levels.map((level, index) => (
                                    <option key={index} value={level}>
                                        {level}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">Search by Name:</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter student name..."
                                    value={searchTerm} // ✅ Controlled input
                                    onChange={(e) => setSearchTerm(e.target.value)} // ✅ Update search term
                                />
                                <button className="btn btn-primary">🔍</button>
                            </div>
                        </div>
                    </div>
                    {/* Student Table */}
                    <div className="table-responsive">
                        <table className="table table-striped table-hover text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.Name} {student.Username}</td>
                                        <td className="fw-bold">{student.level}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OurLearners;
