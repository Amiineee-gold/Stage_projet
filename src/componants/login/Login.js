import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import users from './data'; // Import the users data
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address (example@domain.com).');
      return;
    }

    if (!password) {
      setError('Please enter your password.');
      return;
    }
    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      setPassword('');
      return;
    }

    setIsLoading(true);
    try {
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        setError('');
        alert('Login successful!');
        
        // Redirection based on user status
        if (user.status === "owner") {
          navigate('/Home');
        } else if (user.status === "Teacher") {
          navigate('/HomeTeachers');
        }
      } else {
        setError('Invalid email or password.');
      }
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
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log In'}
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
