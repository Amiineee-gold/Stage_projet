import React, { useState } from 'react';

 const userProfile = {
  firstName: "Amine",
  lastName: "amine",
  nickname: "amine",
  email: "amin@gmail.com",
  password: "Qwerty1234!",
  status: "owner"
};
const DataExport = () => {
  const [requested, setRequested] = useState(false);
  const [verified, setVerified] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleRequest = () => {
    setRequested(true);
    alert("A verification email has been sent to your email address.");
  };

  const handleVerify = () => {
    setVerified(true);
    // استخدام البيانات من ملف profile
    setUserData(userProfile);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Request an export of your data</h1>
      <p>
        You may download a copy of all data you have created on this platform. Click the button below to start a new request. An email will be sent to you to verify the request. Then the site admin will review your request and if approved, a zip file will be generated and emailed to you.
      </p>

      {!requested ? (
        <button
          onClick={handleRequest}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Request Data Export
        </button>
      ) : !verified ? (
        <button
          onClick={handleVerify}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28A745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Verify Email
        </button>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <h2>Your Data</h2>
          <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }}>
            <div style={{ marginBottom: '10px' }}>
              <strong>First Name:</strong> {userData.firstName}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Last Name:</strong> {userData.lastName}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Nickname:</strong> {userData.nickname}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Email:</strong> {userData.email}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Password:</strong> {userData.password}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataExport;

