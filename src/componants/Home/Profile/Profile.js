import React, { useState, useRef } from 'react';
import Header from '../Header/Header';
import Sidebar from '../sidebar/Sidebar';
import ModificationProfile from './EditProfile'; 
import './Profile.css';


const Profile = () => {
  let [Nom, setNom] = useState("Amine");
  let [Username, setUserName] = useState("amine");
  let [Nackname, setNackname] = useState("amine");
  let [click, setClick] = useState(false);

  // ✅ Gestion des informations
  const updateProfile = (newNom, newUsername, newNackname) => {
    setNom(newNom);
    setUserName(newUsername);
    setNackname(newNackname);
    setClick(false);
  };

  // ✅ Gestion de l'image de profil
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null); 

  // 📌 Ouvre la boîte de sélection de fichiers
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // 📌 Gère le changement d'image
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />

      {click === false ? (
        <div className='content'>
          <div className='profile-header'>
            <div className='profile-banner'></div>
            <div className='profile-info'>
              {/* ✅ Clic sur l'image pour changer la photo */}
              <img 
                src={profileImage || 'user.png'} 
                alt='User' 
                className='profile-pic' 
                onClick={handleImageClick} 
                style={{ cursor: "pointer" }} // Ajoute un curseur interactif
              />
              <div className='name-date'>
                <h1 className='user-name'>{Nom} {Username}</h1>
                <p className='join-date'>Joined March 2025</p>
              </div>
            </div>
          </div>

          <div className='profile-details'>
            <div className='profile-actions'>
              <h2>View Profile</h2>
              <button className='edit-button' onClick={() => setClick(true)}>
                Edit Profile
              </button>
            </div>

            <div className='details-section'>
              <h3>Details</h3>
              <div className='detail-item'>
                <span className='detail-label'>First Name</span>
                <span className='detail-value'>{Nom}</span>
              </div>
              <div className='detail-item'>
                <span className='detail-label'>Last Name</span>
                <span className='detail-value'>{Username}</span>
              </div>
              <div className='detail-item'>
                <span className='detail-label'>Nickname</span>
                <span className='detail-value'>{Nackname}</span>
              </div>
            </div>
          </div>

          {/* ✅ Input caché pour choisir une image */}
          <input 
            type="file" 
            ref={fileInputRef} 
            accept="image/*" 
            style={{ display: "none" }} 
            onChange={handleFileChange} 
          />
        </div>
      ) : (
        <ModificationProfile updateProfile={updateProfile} />
      )}
    </>
  );
};

export default Profile;
