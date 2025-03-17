import React, { useState } from 'react';

const Privacy = () => {
  const [visibility, setVisibility] = useState({
    firstName: "Public", // First Name visibility
    lastName: "Public",  // Last Name visibility
    nickname: "Public",  // Nickname visibility
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleVisibilityChange = (field, value) => {
    setVisibility({
      ...visibility,
      [field]: value,
    });
  };

  const handleSaveChanges = () => {
    // Simulate saving changes
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Hide the message after 3 seconds
  };

  return (
    
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Profile Visibility Settings</h1>
      <p>Select who may see your profile details.</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Details</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Visibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>First Name</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>{visibility.firstName}</td>
          </tr>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>Last Name</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
              <select
                value={visibility.lastName}
                onChange={(e) => handleVisibilityChange("lastName", e.target.value)}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ddd' }}
              >
                <option value="Public">Public</option>
                <option value="All Members">All Members</option>
                <option value="Only Me">Only Me</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>Nickname</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>{visibility.nickname}</td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={handleSaveChanges}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Save Changes
      </button>

      {showMessage && (
        <div style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>
          Changes have been saved successfully!
        </div>
      )}
    </div>
  );
};

export default Privacy;