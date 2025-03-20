import React from "react";
import { useNavigate } from "react-router-dom";
import { teachersData } from "./data";
import Sidebar from "../sidebar/Sidebar";
import Header from "../Header/Header";

const Absence = () => {
    const navigate = useNavigate();

    return (
        <>
        <Sidebar/>
        <Header/>
        <div className="container mt-4" style={{minWidth:"100vh",display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column",marginLeft:250}}>
            
            <h2>Liste des Enseignants</h2>
            <table className="table table-striped table-bordered" style={{width:"600px",textAlign:"center"}}>
                <thead>
                    <tr>
                        <th >Nom de l'Enseignant</th>
                        <th>Voir Absences</th>
                    </tr>
                </thead>
                <tbody>
                    {teachersData.map((teacher) => (
                        <tr key={teacher.id}>
                            <td style={{textAlign:"center"}}>{teacher.name}</td>
                            <td style={{textAlign:"center"}}>
                                <button className="btn btn-info" onClick={() => navigate("/ListeAbsence")}>Absence List</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
        
    );
};

export default Absence;