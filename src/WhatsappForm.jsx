import React, { useState } from 'react';

const WhatsappForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuration
    const phoneNumber = "1234567890"; // Use country code, no + or -
    
    // Formatting the message
    // %0A is a line break in URL encoding
    const text = `*New Inquiry*%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Service:* ${formData.service}%0A` +
                 `*Message:* ${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    // Redirect to WhatsApp
    window.open(url, '_blank');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
      <h2>Inquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Service Interested In:</label><br />
          <select 
            name="service" 
            value={formData.service} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">Select a service</option>
            <option value="Web Design">Web Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Consulting">Consulting</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Message:</label><br />
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            style={{ width: '100%', height: '80px', padding: '8px' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ backgroundColor: '#25D366', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }}
        >
          Send to WhatsApp
        </button>
      </form>
    </div>
  );
};

export default WhatsappForm;