import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../sidebar/Sidebar'
import "./teacher.css"
function Teacher ({info}) {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <div className="dashboard-container">
  <h2 className="dashboard-title">Dashboard</h2>
  <div className="table-container">
    <table className="table table-hover">
      <thead className="thead-light">
        <tr>
          <th>Name</th>
          <th>Learners List</th>
          <th>Bills List</th>
        </tr>
      </thead>
      <tbody>
        {info.map((e, index) => (
          <tr key={index}>
            <td>{e.Name}</td>
            <td><Link to={`/LearnList/${e.id}`} className="table-link">Learners</Link></td>
            <td><Link to={`/BillList/${e.id}`} className="table-link">Bills</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

</div>


  )
}

export default Teacher
