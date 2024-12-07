import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Schedule from './components/Schedule';
import AdminPanel from './components/AdminPanel';
import Feedback from './components/Feedback';

const App = () => {
  const [userRole, setUserRole] = useState('');
  const [courses, setCourses] = useState([
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Physics' },
    { id: 3, name: 'Chemistry' },
    { id: 4, name: 'Biology' },
    { id: 5, name: 'Computer Science' },
    { id: 6, name: 'History' },
    { id: 7, name: 'Geography' },
    { id: 8, name: 'English Literature' },
    { id: 9, name: 'Economics' },
    { id: 10, name: 'Psychology' }
  ]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const savedEnrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    setEnrolledCourses(savedEnrolledCourses);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUserRole={setUserRole} />} />
        <Route path="/dashboard" element={<Dashboard userRole={userRole} />} />
        <Route path="/courses" element={<Courses courses={courses} setEnrolledCourses={setEnrolledCourses} enrolledCourses={enrolledCourses} />} />
        <Route path="/schedule" element={<Schedule enrolledCourses={enrolledCourses} />} />
        <Route path="/admin" element={<AdminPanel courses={courses} setCourses={setCourses} />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default App;
