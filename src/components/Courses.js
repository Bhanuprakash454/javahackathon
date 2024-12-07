import React, { useState, useEffect } from 'react';

const Courses = ({ setEnrolledCourses, enrolledCourses }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Load previously saved courses from local storage
    const savedEnrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    setEnrolledCourses(savedEnrolledCourses);
    setSelectedCourses(savedEnrolledCourses);
  }, [setEnrolledCourses]);

  // List of available courses
  const courses = [
    { id: 1, name: 'Java Full Stack Web Development (Adv)' },
    { id: 2, name: 'Enterprise Programming (Adv)' },
    { id: 3, name: 'Software Verification and Validation' },
    { id: 4, name: 'Management Information Systems' },
    { id: 5, name: 'Database Management Systems' },
    { id: 6, name: 'Cloud Computing' },
    { id: 7, name: 'Advanced Data Structures' },
    { id: 8, name: 'Web Technologies' },
    { id: 9, name: 'Project Management' },
    { id: 10, name: 'User Experience Design' },
    { id: 11, name: 'Machine Learning' },
  ];

  const enroll = (course) => {
    if (!selectedCourses.some((c) => c.id === course.id)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const saveEnrollment = () => {
    // Save selected courses to local storage
    localStorage.setItem('enrolledCourses', JSON.stringify(selectedCourses));
    setEnrolledCourses(selectedCourses);
    setNotification('Courses enrolled successfully!');
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background 0.3s',
  };

  const enrolledButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#8e44ad',
    cursor: 'not-allowed',
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    height: '100vh',
    overflowY: 'auto',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    margin: '10px',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>Available Subjects</h2>
      {courses.map((course) => (
        <div key={course.id} style={cardStyle}>
          <h3>{course.name}</h3>
          <button
            style={selectedCourses.some((c) => c.id === course.id) ? enrolledButtonStyle : buttonStyle}
            onClick={() => enroll(course)}
            disabled={selectedCourses.some((c) => c.id === course.id)}
          >
            {selectedCourses.some((c) => c.id === course.id) ? 'Enrolled' : 'Enroll'}
          </button>
        </div>
      ))}
      <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
          onClick={saveEnrollment}
          disabled={selectedCourses.length === 0}
        >
          Save Selection
        </button>
        {notification && (
          <div style={{ marginTop: '10px', color: 'green', fontWeight: 'bold' }}>
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
