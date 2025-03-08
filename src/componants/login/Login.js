import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address (example@domain.com).');
      return;
    }

    // Password validation
    if (!password) {
      setError('Please enter your password.');
      return;
    }
    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      setPassword(''); // Clear the password field
      return;
    }

    // Simulate login logic
    setIsLoading(true);
    try {
      console.log('Logging in with:', email, password);
      setError('');
      alert('Login successful!');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>TIKO SCHOOL</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <button type="submit" disabled={isLoading}>
          <Link to="/Home" >
              {isLoading ? 'Logging in...' : 'Log In'}
          </Link>
            
              
          </button>
        </div>
        <div className="form-group">
          <Link to="/forgot-password" aria-label="Forgot your password?">
            Forgot your password?
          </Link>
        </div>
      </form>
      <p>
        By logging in, you agree to our <a href="/terms">Terms of Service</a> and{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default Login;