import React, { useState } from 'react';
import data from './data';
import './Accounting.css';
import Header from '../Header/Header';
import Sidebar from '../sidebar/Sidebar';

const Accounting = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedMonthData, setSelectedMonthData] = useState(null);

  const handleSearch = () => {
    const foundData = data.find(item => {
      const dataDate = new Date(item.month);
      const selectedDate = new Date(selectedMonth);
      return (
        dataDate.getFullYear() === selectedDate.getFullYear() &&
        dataDate.getMonth() === selectedDate.getMonth()
      );
    });
    setSelectedMonthData(foundData || null);
  };

  return (
    
    <div className="container">
      <Header/>
    <Sidebar/>
      <h1>Accounting</h1>
      <div className="filter-container">
        <input
          type="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {selectedMonthData && (
        <div>
          {/*<h2>{selectedMonthData.month}</h2>*/}
          <table>
            <thead>
              <tr>
                <th>Month:</th>
                <th>{selectedMonthData.month}</th>
                <th>Search</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Total Income:</strong></td>
                <td>{selectedMonthData.totalIncome}</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="3"><strong>Teachers Earnings</strong></td>
              </tr>
              {selectedMonthData.teachersEarnings.map((teacher, idx) => (
                <tr key={idx}>
                  <td>{teacher.name}</td>
                  <td>{teacher.earnings}</td>
                  <td></td>
                </tr>
              ))}
              <tr>
                <td><strong>Teacher's total earnings:</strong></td>
                <td>{selectedMonthData.teachersTotalEarnings}</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Expenses</strong></td>
                <td>{selectedMonthData.expenses}</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Net profit:</strong></td>
                <td>{selectedMonthData.netProfit}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Accounting;