import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ userRole }) => {
  const navigate = useNavigate();

  // Inline styles for the page layout
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures the page takes up the full height of the viewport
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    width: '100vw', // Ensure full width for larger screens
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    padding: '15px 40px',
    color: 'white',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
  };

  const navItemStyle = {
    margin: '0 15px',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    color: 'white',
    textAlign: 'center',
  };

  const navItemHoverStyle = {
    backgroundColor: '#357ab7',
  };

  const mainContentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    overflow: 'auto',
  };

  const buttonStyle = {
    padding: '12px 25px',
    margin: '15px',
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background 0.3s',
    minWidth: '180px', // To ensure consistent button size
  };

  const buttonHoverStyle = {
    backgroundColor: '#357ab7',
  };

  return (
    <div style={pageStyle}>
      {/* Navbar */}
      <div style={navbarStyle}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>Dashboard</div>
        <div>
          <span
            style={{ ...navItemStyle, ...navItemHoverStyle }}
            onClick={() => navigate('/home')}
          >
            Home
          </span>
          <span
            style={{ ...navItemStyle, ...navItemHoverStyle }}
            onClick={() => navigate('/courses')}
          >
            Courses
          </span>
          <span
            style={{ ...navItemStyle, ...navItemHoverStyle }}
            onClick={() => navigate('/schedule')}
          >
            Schedule
          </span>
          <span
            style={{ ...navItemStyle, ...navItemHoverStyle }}
            onClick={() => navigate('/feedback')}
          >
            Feedback
          </span>
        </div>
      </div>

      {/* Main content */}
      <div style={mainContentStyle}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Welcome, {userRole}!</h1>
        {userRole === 'student' ? (
          <>
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#4a90e2')}
              onClick={() => navigate('/courses')}
            >
              View Courses
            </button>
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#4a90e2')}
              onClick={() => navigate('/schedule')}
            >
              View Schedule
            </button>
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#4a90e2')}
              onClick={() => navigate('/feedback')}
            >
              Give Feedback
            </button>
          </>
        ) : (
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#4a90e2')}
            onClick={() => navigate('/admin')}
          >
            Admin Panel
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
