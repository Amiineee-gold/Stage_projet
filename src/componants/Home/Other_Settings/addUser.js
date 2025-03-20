import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../learners/studentsSlice';
import { useNavigate } from 'react-router-dom';
import NavbarDash from './NavBareDashbord';
import SidebarDash from './SideBare';

export default function AddUserDash() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newEntry, setNewEntry] = useState({ nom: "", niveau: "", matiere: "", email: "", phone: "", address: "", datePayement: "" });

  const handleAdd = () => {
    dispatch(addStudent(newEntry));
    navigate('/Learner');
  };
  return (
    <div className="containerAdd">
       <NavbarDash/>
       <SidebarDash/>
      <br/><br/>
    <h1 style={ {color:"blue", display:"flex",padding:"15px"}}> Create account </h1>
     <div className='InputAdd'>Nom:<input className='InputAdd2' placeholder="Nom" onChange={(e) => setNewEntry({ ...newEntry, nom: e.target.value })} /></div>
     <div className='InputAdd'> Niveau:<input  className='InputAdd2' placeholder="Niveau" onChange={(e) => setNewEntry({ ...newEntry, niveau: e.target.value })} /></div>
     <div className='InputAdd'>Matiere:<input  className='InputAdd2' placeholder="Matiere" onChange={(e) => setNewEntry({ ...newEntry, matiere: e.target.value })} /></div>
     <div className='InputAdd'> Email:<input  className='InputAdd2' placeholder="Email" onChange={(e) => setNewEntry({ ...newEntry, email: e.target.value })} /></div>
     <div className='InputAdd'>Telephone:<input  className='InputAdd2'placeholder="Telephone" onChange={(e) => setNewEntry({ ...newEntry, phone: e.target.value })} /></div>
     <div className='InputAdd'>Adresse:<input className='InputAdd2' placeholder="Adresse" onChange={(e) => setNewEntry({ ...newEntry, address: e.target.value })} /></div>
     <div className='InputAdd'>Date Payement:<input className='InputAdd2' type="date" onChange={(e) => setNewEntry({ ...newEntry, datePayement: e.target.value })} /></div>
      <button onClick={handleAdd} style={{ backgroundColor: 'blue', color: 'white' ,width:150}}>Add</button>
    </div>
  );
}