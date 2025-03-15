import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; 
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address (example@domain.com).');
      return;
    }
    console.log('Reset link sent to:', email);
    setError('');
    setEmail('');
    alert('Reset link sent! Check your email.');
  };
  return (
    <div className="login-container">
      <h2>TIKO SCHOOL</h2>
      <p>Please enter your email address. You will receive an email with instructions on how to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <button type="submit">Request Reset Link</button>
        </div>
        <div className="form-group">
          <Link to="/" aria-label="Back to login">Back to Login</Link>
        </div>
      </form>
      <p>
        By using this service, you agree to our <a href="/terms">Terms of Service</a> and{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </div>
  );
};
export default ForgotPassword;