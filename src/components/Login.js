import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserRole }) => {
  const [role, setRole] = useState('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Full-page container style
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(to right, #4a90e2, #5d9cec)',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center',
  };

  const headingStyle = {
    color: '#333',
    marginBottom: '20px',
    fontSize: '2rem',
    fontWeight: '600',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    textAlign: 'left',
    fontWeight: '500',
    color: '#555',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
    fontSize: '1rem',
  };

  const buttonStyle = {
    display: 'inline-block',
    width: '100%',
    padding: '12px',
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#357ab7',
  };

  const errorStyle = {
    color: '#e74c3c',
    fontSize: '0.9rem',
    marginTop: '10px',
  };

  const handleLogin = () => {
    if (username === '') {
      setError('Username cannot be empty');
    } else if (!validatePassword(password)) {
      setError('Password must include at least one uppercase letter, one number, and one special character');
    } else {
      setError('');
      setUserRole(role);
      navigate('/dashboard');
    }
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasUpperCase && hasNumber && hasSpecialChar;
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Welcome Back!</h2>
        <p style={{ color: '#777', marginBottom: '20px' }}>Please log in to continue.</p>
        <div>
          <label style={labelStyle} htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            style={inputStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {error && <p style={errorStyle}>{error}</p>}
        </div>
        <div>
          <label style={labelStyle} htmlFor="role">Select Role</label>
          <select
            id="role"
            style={inputStyle}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4a90e2')}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
