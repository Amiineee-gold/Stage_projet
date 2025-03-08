import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../sidebar/Sidebar'
const Learner = () => {
  return (
    <div>
       <Header/>
       <Sidebar/>
      <button><Link to="/Home" aria-label="Learner" style={{color:'white'}}>back to Home</Link></button>
    </div>
  )
}

export default Learner

