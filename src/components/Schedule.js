import React, { useState } from 'react';

const Schedule = () => {
  // Enrolled courses with updated subjects
  const [enrolledCourses] = useState([
    { id: 1, name: 'Java Full Stack Web Development (Adv)', day: 'Monday', time: '9:20 AM' },
    { id: 2, name: 'Enterprise Programming (Adv)', day: 'Monday', time: '11:10 AM' },
    { id: 3, name: 'Software Verification and Validation', day: 'Wednesday', time: '1:45 PM' },
    { id: 4, name: 'Management Information Systems', day: 'Thursday', time: '3:40 PM' },
    { id: 5, name: 'Database Management Systems', day: 'Tuesday', time: '10:40 AM' },
    { id: 6, name: 'Cloud Computing', day: 'Wednesday', time: '3:00 PM' },
    { id: 7, name: 'Advanced Data Structures', day: 'Friday', time: '8:00 AM' },
    { id: 8, name: 'Web Technologies', day: 'Friday', time: '9:20 AM' },
    { id: 9, name: 'Project Management', day: 'Thursday', time: '12:30 PM' },
    { id: 10, name: 'User Experience Design', day: 'Tuesday', time: '1:45 PM' },
    { id: 11, name: 'Machine Learning', day: 'Monday', time: '3:00 PM' },
  ]);

  // Time slots (11 slots for each day)
  const timeSlots = [
    '8:00 AM',
    '9:20 AM',
    '10:40 AM',
    '11:10 AM',
    '12:30 PM',
    '1:45 PM',
    '3:00 PM',
    '3:40 PM',
    '4:30 PM',
    '5:30 PM',
    '6:30 PM',
  ];

  // Days of the week
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // Create a timetable structure
  const timetable = daysOfWeek.map(day => {
    return {
      day,
      slots: timeSlots.map(slot => {
        // Check if there's a course scheduled for this day and time
        const course = enrolledCourses.find(course => course.day === day && course.time === slot);
        return course ? course.name : '';
      }),
    };
  });

  return (
    <div className="schedule" style={{ padding: '20px', overflowX: 'auto' }}>
      <h2>Your Weekly Schedule</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '10px' }}>Time</th>
            {daysOfWeek.map(day => (
              <th key={day} style={{ border: '1px solid black', padding: '10px' }}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{slot}</td>
              {timetable.map((day, dayIndex) => (
                <td key={dayIndex} style={{
                  border: '1px solid black',
                  padding: '10px',
                  textAlign: 'center',
                  backgroundColor: day.slots[index] ? '#d4edda' : '#f9f9f9',
                }}>
                  {day.slots[index] || 'Free'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
