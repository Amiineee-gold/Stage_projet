import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./Grades.css"
import { useState } from "react";
function OurGrades({info}){
    let [filtrBylevel,setFiltrBylevel]=useState("")
    const [grades, setGrades] = useState(info.map(student => ({Grade1: "",Grade2: "",Grade3: "", Note: ""})));
    const handleChange = (index, field, value) => {
        const updatedGrades = [...grades];
        updatedGrades[index][field] = value;
        setGrades(updatedGrades);
    };
    const handleClick = (index) => {
        const student = grades[index];
        const total = (parseFloat(student.Grade1 || 0) + parseFloat(student.Grade2 || 0) + parseFloat(student.Grade3 || 0)) / 3;
        const updatedGrades = [...grades];
        updatedGrades[index].Note = total.toFixed(2);
        setGrades(updatedGrades);
    };
    const handlPrint=()=>{
        window.print();
    }
    const { id } = useParams();
    const selectedTeacher = info.find((teacher) => teacher.id === parseInt(id));
    if (!selectedTeacher) {return <p className="text-danger text-center">❌ Teacher not found</p>;}

    // Récupérer les niveaux uniques
    /*const levels = [];
    info.forEach(teacher => {
        teacher.LearnList.forEach(student => {
            if (!levels.includes(student.level)) {
                levels.push(student.level); // Ajouter le niveau s'il n'est pas déjà dans le tableau
        }});});*/

    const levels = [];
        selectedTeacher.LearnList.forEach(student => {
            if (!levels.includes(student.level)) {
                levels.push(student.level); // Ajouter le niveau s'il n'est pas déjà dans le tableau
        }});

    const filteredStudents = filtrBylevel 
    ? selectedTeacher.LearnList.filter(student => student.level === filtrBylevel)
    : selectedTeacher.LearnList;

    return(
        <>
            <Header />
            <Sidebar />
                <div className="card shadow-lg p-4 position-relative">
                <div className="save-icon">
                        <img src="/save.png" alt="Save" style={{ width: 40 }} onClick={handlPrint}/>
                </div>
                    <h2 className="text-primary">Teacher: {selectedTeacher.Name}</h2>
                    <div className="row g-3 align-items-center mb-4">
                        <div className="d-flex col-md-4">
                            <select className="select-level form-select" onChange={(e)=>setFiltrBylevel(e.target.value)}>
                                <option value="">All Levels</option>
                                {levels.map((level, index) => (
                                    <option key={index} value={level}>
                                        {level}
                                    </option>
                                ))}
                            </select>
                            <button className="btn btn-primary">🔍</button>
                        </div>    
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Grad1</th>
                                    <th>Grade 2</th>
                                    <th>Grade 3</th>
                                    <th>Note</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {filteredStudents.map((student, index) => (
                                    <tr key={index}>
                                        <td style={{ width:150,textAlign: "center"}}>{student.Name} {student.Username} </td>
                                        <td><input type="number" className="form-control" value={grades[index]?.Grade1 || ""} onChange={(e) => handleChange(index, "Grade1", e.target.value)} /></td>
                                        <td><input type="number" className="form-control" value={grades[index]?.Grade2 || ""} onChange={(e) => handleChange(index, "Grade2", e.target.value)} /></td>
                                        <td><input type="number" className="form-control" value={grades[index]?.Grade3 || ""} onChange={(e) => handleChange(index, "Grade3", e.target.value)} /></td>
                                        <td><input type="text" className="form-control" value={grades[index]?.Note || ""} readOnly /></td>
                                        <td><button className="btn btn-primary" onClick={() => handleClick(index)} style={{position: "relative", bottom: "10px"}}>Save</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </>
    );
}export default OurGrades