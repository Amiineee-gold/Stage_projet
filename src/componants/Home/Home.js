import React from 'react'
import './Home.css'
import Sidebar from './sidebar/Sidebar'
import Header from './Header/Header'
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <Header/>
    </div>
  )
}

export default Home
