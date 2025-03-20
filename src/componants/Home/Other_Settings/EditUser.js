import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavbarDash from './NavBareDashbord';
import SidebarDash from './SideBare';
import '../Profile/Profile.css';

function EditUser({ updateProfile }) {  
    let { Nom } = useParams();
    let navigate = useNavigate();
  
    let [Name, setNom] = useState(Nom);
    let [Username, setUserName] = useState("");
    let [Nackname, setNackname] = useState("");
  
    // Vérifie si updateProfile est bien défini
    if (!updateProfile) {
      console.error("updateProfile is not defined!");
    }
  
    const handleConfirm = () => {
      if (typeof updateProfile === "function") {
        updateProfile(Name, Username, Nackname);
        navigate('/Profile');
      } else {
        console.error("updateProfile is not a function");
      }
    };
  
    return (
      <>
        <NavbarDash/>
        <SidebarDash />
  
        <div className='content'>
          <div className='profile-header'>
            <div className='profile-banner'></div>
            <div className='profile-info'>
              <img src='user.png' alt='User' className='profile-pic' />
            </div>
          </div>
  
          <div className='profile-details'>
            <div className='details-section'>
              <h3>Modifier les informations</h3>
              <div className='detail-item'>
                <span className='detail-label'>First Name</span>
                <input 
                  type="text" 
                  style={{ width: 200, height: 40 }} 
                  value={Name} 
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
              <div className='detail-item'>
                <span className='detail-label'>Last Name</span>
                <input 
                  type="text" 
                  style={{ width: 200, height: 40 }} 
                  value={Username} 
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className='detail-item'>
                <span className='detail-label'>Nickname</span>
                <input 
                  type="text" 
                  style={{ width: 200, height: 40 }} 
                  value={Nackname} 
                  onChange={(e) => setNackname(e.target.value)}
                />
              </div>
  
              {/* ✅ Bouton pour confirmer la modification */}
              <button 
                className='confirm-button' 
                onClick={handleConfirm}
              >
                Confirmer les modifications
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default EditUser;
  