import React, { useState } from 'react';
import './DailyReport.css'; // Importez les styles CSS
import { incomesData, expensesData } from './data'; // Importez les données
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';

const DailyReport = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Mois actuel par défaut

  // Filtrer les données en fonction du mois sélectionné
  const filteredIncomes = incomesData.filter(income => {
    const incomeDate = new Date(income.billDate);
    return incomeDate.getMonth() + 1 === selectedMonth;
  });

  const filteredExpenses = expensesData.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() + 1 === selectedMonth;
  });

  // Calculer les totaux
  const totalIncome = filteredIncomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpenses = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const total = totalIncome - totalExpenses;

  return (
    <div className="daily-report">
      <Sidebar/>
      <Header/>
      <h1>Daily Report</h1>
      <div className="filters">
        <label htmlFor="month">Show Results for: </label>
        <select
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>

      <div className="incomes">
        <h2>Incomes</h2>
        <table>
          <thead>
            <tr>
              <th>Bill Date</th>
              <th>Creation Date</th>
              <th>Pack</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredIncomes.map((income, index) => (
              <tr key={index}>
                <td>{income.billDate}</td>
                <td>{income.creationDate}</td>
                <td>{income.pack}</td>
                <td>+{income.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total income: +{totalIncome}</p>
      </div>

      <div className="expenses">
        <h2>Expenses</h2>
        <table>
          <thead>
            <tr>
              <th>Label</th>
              <th>Date</th>
              <th>Author</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.label}</td>
                <td>{expense.date}</td>
                <td>{expense.author}</td>
                <td>-{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Expenses: -{totalExpenses}</p>
      </div>

      <div className="total">
        <h2>Total: {total}</h2>
      </div>
    </div>
  );
};

export default DailyReport;