import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../sidebar/Sidebar';

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    { label: 'achraf', price: 4000, author: 'amin benbba', date: '2025-03-10 17:31' }
  ]);
  const [label, setLabel] = useState('');
  const [price, setPrice] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      label,
      price,
      author,
      date: new Date().toLocaleString()
    };
    setExpenses([...expenses, newExpense]);
    setLabel('');
    setPrice('');
    setAuthor('');
  };

  const handleDelete = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  return (
    <div>
      <Header/>
      <Sidebar/>
    <div style={styles.container}>
      
      <h2 style={styles.header}>Expenses</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Label</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Author</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} style={styles.tr}>
              <td style={styles.td}>{expense.label}</td>
              <td style={styles.td}>{expense.price}</td>
              <td style={styles.td}>{expense.author}</td>
              <td style={styles.td}>{expense.date}</td>
              <td style={styles.td}>
                <button style={styles.deleteButton} onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.formContainer}>
        <h3 style={styles.formHeader}>Add New Expense</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
           <strong>Label :</strong> 
            
            <input type="text"value={label}  onChange={(e) => setLabel(e.target.value)} style={styles.input}  required />
          </label>
          <br />
          <label style={styles.label}>
           <strong>Price :</strong> 
            <input type="number"value={price} onChange={(e) => setPrice(e.target.value)} style={styles.input} required />
          </label>
          <br />
          <label style={styles.label}>
           <strong>Name :</strong> 
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}style={styles.input} required/>
          </label>
          <br />
          <button type="submit" style={styles.addButton}>ADD</button>
        </form>
      </div>
    </div></div>
  );
};

// CSS Styles
const styles = {
  container: {
    marginTop: '70px',

    marginLeft: '250px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    color: 'blue',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  th: {
    backgroundColor: '#f4f4f4',
    padding: '12px',
    border: '1px solid #ddd',
    textAlign: 'left',
    color:'black'
  },
  tr: {
    borderBottom: '1px solid #ddd',
    '&:hover': {
      backgroundColor: '#f9f9f9',
    },
  },
  td: {
    padding: '12px',
    border: '1px solid #ddd',
    backgroundColor:'#f9f9f9'
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ff1a1a',
    },
  },
  formContainer: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  formHeader: {
    color: '#333',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontSize: '14px',
    color: '#555',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#45a049',
    },
  },
};

export default Expenses;