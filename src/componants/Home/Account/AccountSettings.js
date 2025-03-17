import { useState } from "react";
import { users, updateUsers } from "../../login/data";

import "./AccountSetting.css";


const AccountSettings = () => {
  const [email, setEmail] = useState(users.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleSaveChanges = () => {
    if (password !== confirmPassword) {
      alert("كلمتا السر غير متطابقتين!");
      return;
    }
    updateUsers.email = email;
    updateUsers.password = password;
    alert("تم تحديث البيانات بنجاح!");
  };

  const checkPasswordStrength = (pass) => {
    if (pass.length < 6) return "Very weak";
    if (pass.length < 8) return "Weak";
    if (pass.match(/[A-Z]/) && pass.match(/\d/)) return "Strong";
    return "Medium";
  };

  return (
    
    <div className="settings-container">
      
      <div className="settings-content">
        <h2>Login Information</h2>
        <label>Account Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Add Your New Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordStrength(checkPasswordStrength(e.target.value));
          }}
        />

        <label>Repeat Your New Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <p className={`password-strength ${passwordStrength.replace(" ", "-").toLowerCase()}`}>
          {passwordStrength}
        </p>

        <button onClick={handleSaveChanges}>Save Changes</button>
      </div>
    </div>
    
  );
};

export default AccountSettings;
