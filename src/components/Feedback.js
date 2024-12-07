import React, { useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    idNo: '',
    phone: '',
    feedback: '',
    rating: 0,
  });

  const [submitted, setSubmitted] = useState(false); // State to manage submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setSubmitted(true); // Mark feedback as submitted
    alert('Thank you for your feedback!');
    setFormData({ name: '', idNo: '', phone: '', feedback: '', rating: 0 });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage:
          'url(https://www.shutterstock.com/shutterstock/photos/1914992353/display_1500/stock-photo-hand-holding-paper-cut-smile-face-positive-thinking-mental-health-assessment-world-mental-1914992353.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          padding: '30px',
          width: '100%',
          maxWidth: '800px', // Adjusted to make it wider if needed
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '12px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
        }}
      >
        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#2E7D32' }}>Thank You for Your Feedback!</h2>
            <p>Your feedback has been successfully submitted. We appreciate your input!</p>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#357a36')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
            >
              Provide More Feedback
            </button>
          </div>
        ) : (
          <div>
            <h2 style={{ marginBottom: '15px', color: '#333' }}>Student Feedback Form</h2>
            <p style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#555' }}>
              We value your thoughts and suggestions. Please fill out the form below to help us
              improve your learning experience.
            </p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    fontSize: '0.9rem',
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>ID Number:</label>
                <input
                  type="text"
                  name="idNo"
                  value={formData.idNo}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    fontSize: '0.9rem',
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Phone Number:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    fontSize: '0.9rem',
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Feedback:</label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    backgroundColor: '#e0f7fa',
                    fontSize: '0.9rem',
                  }}
                  required
                ></textarea>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Rating (1-5):</label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    fontSize: '0.9rem',
                  }}
                  min="1"
                  max="5"
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: '12px 20px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#357a36')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
              >
                Submit Feedback
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
