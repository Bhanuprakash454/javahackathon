import React, { useState } from 'react';

const AdminDashboard = () => {
  // Initial data
  const [courses, setCourses] = useState(['Math', 'Science', 'History']); // Example courses
  const [students, setStudents] = useState([
    { id: '2200090167', name: 'Nikhilesh Majety', email: '2200090167@kluniversity.in' },
  ]);
  const [timetable, setTimetable] = useState({});
  const [feedbacks, setFeedbacks] = useState([
    { studentName: 'Nikhilesh Majety', feedback: 'The course material was very informative and engaging.' },
    { studentName: 'Aarav Kumar', feedback: 'I found the assignments challenging but helpful for learning.' },
    { studentName: 'Sanya Patel', feedback: 'Great teaching approach, and the practical examples were useful.' },
  ]);

  // State for new entries
  const [newStudent, setNewStudent] = useState({ name: '', email: '' });
  const [newCourse, setNewCourse] = useState('');
  const [newFeedback, setNewFeedback] = useState({ studentName: '', feedback: '' });

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('students');

  // Function to add a new student
  const addStudent = () => {
    if (newStudent.name && newStudent.email) {
      const newStudentData = { ...newStudent, id: Date.now().toString() };
      setStudents([...students, newStudentData]);
      setNewStudent({ name: '', email: '' });
      alert('Student added successfully.');
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Function to remove a student
  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    alert('Student removed successfully.');
  };

  // Function to add a new course
  const addCourse = () => {
    if (newCourse) {
      setCourses([...courses, newCourse]);
      setNewCourse('');
      alert('Course added successfully.');
    } else {
      alert('Please enter a course name.');
    }
  };

  // Function to remove a course
  const removeCourse = (course) => {
    setCourses(courses.filter((c) => c !== course));
    alert('Course removed successfully.');
  };

  // Function to add feedback
  const addFeedback = () => {
    if (newFeedback.studentName && newFeedback.feedback) {
      setFeedbacks([...feedbacks, newFeedback]);
      setNewFeedback({ studentName: '', feedback: '' });
      alert('Feedback added successfully.');
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Function to add a course to the timetable
  const addToTimetable = (day, time, course) => {
    setTimetable({
      ...timetable,
      [day]: {
        ...timetable[day],
        [time]: course,
      },
    });
    alert('Course assigned to timetable successfully.');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Panel</h2>

      {/* Navigation Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {['students', 'courses', 'timetable', 'feedback'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 20px',
              margin: '0 5px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: activeTab === tab ? '#4CAF50' : '#ddd',
              color: activeTab === tab ? '#fff' : '#333',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Students Management */}
      {activeTab === 'students' && (
        <div style={{ marginBottom: '30px' }}>
          <h3>Manage Students</h3>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              placeholder="Student Name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '5px', width: '200px' }}
            />
            <input
              type="email"
              placeholder="Student Email"
              value={newStudent.email}
              onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '5px', width: '200px' }}
            />
            <button
              onClick={addStudent}
              style={{
                padding: '8px 15px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#4CAF50',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Add Student
            </button>
          </div>
          <h4>Students List</h4>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {students.map((student) => (
              <li key={student.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #ddd' }}>
                <span>{student.name} ({student.email})</span>
                <button
                  onClick={() => removeStudent(student.id)}
                  style={{
                    padding: '5px 10px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Courses Management */}
      {activeTab === 'courses' && (
        <div style={{ marginBottom: '30px' }}>
          <h3>Manage Courses</h3>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              placeholder="Course Name"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '5px', width: '200px' }}
            />
            <button
              onClick={addCourse}
              style={{
                padding: '8px 15px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#4CAF50',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Add Course
            </button>
          </div>
          <h4>Courses List</h4>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {courses.map((course, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #ddd' }}>
                <span>{course}</span>
                <button
                  onClick={() => removeCourse(course)}
                  style={{
                    padding: '5px 10px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Timetable Management */}
      {activeTab === 'timetable' && (
        <div style={{ marginBottom: '30px' }}>
          <h3>Timetable Scheduler</h3>
          <h4>Weekly Timetable</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15px' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Time</th>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <th key={day} style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {['08:00 AM', '09:20 AM', '10:40 AM', '11:10 AM', '12:30 PM', '01:45 PM', '03:00 PM', '03:40 PM', '04:30 PM', '05:30 PM', '06:30 PM'].map((timeSlot) => (
                <tr key={timeSlot}>
                  <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{timeSlot}</td>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                    <td key={`${day}-${timeSlot}`} style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                      {timetable[day] && timetable[day][timeSlot] ? timetable[day][timeSlot] : 'Free'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Feedback Management */}
      {activeTab === 'feedback' && (
        <div style={{ marginBottom: '30px' }}>
          <h3>Feedback from Students</h3>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              placeholder="Student Name"
              value={newFeedback.studentName}
              onChange={(e) => setNewFeedback({ ...newFeedback, studentName: e.target.value })}
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '5px', width: '200px' }}
            />
            <input
              type="text"
              placeholder="Feedback"
              value={newFeedback.feedback}
              onChange={(e) => setNewFeedback({ ...newFeedback, feedback: e.target.value })}
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '5px', width: '300px' }}
            />
            <button
              onClick={addFeedback}
              style={{
                padding: '8px 15px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#4CAF50',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Add Feedback
            </button>
          </div>
          <h4>Predefined Feedbacks</h4>
          <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', backgroundColor: '#fff', marginBottom: '15px' }}>
            {feedbacks.map((feedback, index) => (
              <div key={index} style={{ marginBottom: '10px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{feedback.studentName}</div>
                <div style={{ marginBottom: '5px' }}>{feedback.feedback}</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="text"
                    placeholder="Reply..."
                    style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', flex: 1, marginRight: '5px' }}
                  />
                  <button
                    style={{
                      padding: '5px 10px',
                      borderRadius: '5px',
                      border: 'none',
                      backgroundColor: '#2196F3',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
