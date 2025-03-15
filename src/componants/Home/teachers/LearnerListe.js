import "./LearnList.css"
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar";

function OurLearners({ info }) {
    const { id } = useParams();
    const selectedTeacher = info.find((teacher) => teacher.id === parseInt(id));

    if (!selectedTeacher) {
        return <p className="text-danger text-center">❌ Teacher not found</p>;
    }

    // Récupérer les niveaux uniques
    const levels = [];
    info.forEach(teacher => {
        teacher.LearnList.forEach(student => {
            if (!levels.includes(student.level)) {
                levels.push(student.level); // Ajouter le niveau s'il n'est pas déjà dans le tableau
            }
        });
    });
    return (
        <>
            <Header />
            <Sidebar />

            <div className="container mt-4">
                <div className="card shadow-lg p-4">
                    <h2 className="text-primary">Teacher: {selectedTeacher.Name}</h2>

                    {/* Formulaire de filtre */}
                    <div className="row g-3 align-items-center mb-4">
                        <div className="col-md-4">
                            <label className="form-label fw-bold">Show Status for</label>
                            <input type="date" className="form-control" />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold">Select Level:</label>
                            <select className="form-select">
                                <option value="">All Levels</option>
                                {levels.map((level, index) => (
                                    <option key={index} value={level}>
                                        {level}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold">Search</label>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search students..." />
                                <button className="btn btn-primary">🔍</button>
                            </div>
                        </div>
                    </div>

                    {/* Tableau des étudiants */}
                    <div className="table-responsive">
                        <table className="table table-striped table-hover text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedTeacher.LearnList.map((student, index) => (
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
