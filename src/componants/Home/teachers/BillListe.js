import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./BillListe.css"

function OurBills({ info }) {
    const { id } = useParams();
    const foundTeacher = info.find((f) => f.id === parseInt(id));

    if (!foundTeacher) {
        return <p className="text-danger text-center">❌ Teacher not found</p>;
    }

    // Vérifier si LearnList existe avant d'utiliser reduce()
    const totalSalary = foundTeacher.LearnList?.length
        ? foundTeacher.LearnList.reduce((sum, student) => sum + (student.BillList * 0.15), 0)
        : 0;

    return (
        <>
            <Header />
            <Sidebar />
            <div className="Billsdashboard-container mt-4">
                <div className="card shadow p-4">
                    <h2 className="text-primary"> {foundTeacher.Name}</h2>
                    <div className="filtreAndTotal">
                    <p className="fs-6 fw-bold">
                        Total: <span className="text-success">{totalSalary.toFixed(2)} DH</span>
                    </p>
                    <div className="d-flex align-items-center  ">
                        <span className="fw-bold">Show Bills for  </span>
                        <div className="input-group m-3" style={{ maxWidth: "200px",position:"relative",bottom:5}}>
                            <input type="date" className="form-control" style={{height:"38px" ,position:"relative",top:10}} />
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </div>

                    
                    
                    </div>

                    {/* Table stylisée avec Bootstrap */}
                    <table className="table table-bordered table-hover mt-3">
                        <thead >
                            <tr>
                                <th className="text-center">Name</th>
                                <th className="text-center">Bills</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foundTeacher.LearnList.map((student, index) => (
                                <tr key={index}>
                                    <td className="text-center">{student.Name} {student.Username}</td>
                                    <td className="text-center text-success fw-bold">
                                        {(student.BillList * 0.15).toFixed(2)} DH
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default OurBills;
