import React, { useState } from 'react';
import './AddPatient.css';
import { useNavigate } from 'react-router-dom';

const AddPatient = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    email: '',
    address: '',
    bloodGroup: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const patients = JSON.parse(localStorage.getItem('patients') || '[]');
    localStorage.setItem('patients', JSON.stringify([...patients, formData]));
    alert('✅ Patient added successfully!');
    setFormData({
      name: '',
      age: '',
      gender: '',
      contact: '',
      email: '',
      address: '',
      bloodGroup: ''
    });
    navigate('/patients'); // 👈 Go to Patients page after adding
  };

  return (
    <div className="add-patient-container">
      <h2>🧑‍⚕️ Add New Patient</h2>
      <form onSubmit={handleSubmit} className="add-patient-form">
        <label>👤 Full Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>🎂 Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        <label>🚻 Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">👦 Male</option>
          <option value="Female">👧 Female</option>
          <option value="Other">🧑 Other</option>
        </select>

        <label>📞 Contact Number</label>
        <input name="contact" value={formData.contact} onChange={handleChange} required />

        <label>📧 Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>🏡 Address</label>
        <textarea name="address" value={formData.address} onChange={handleChange} />

        <label>🩸 Blood Group</label>
        <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A−</option>
          <option value="B+">B+</option>
          <option value="B-">B−</option>
          <option value="O+">O+</option>
          <option value="O-">O−</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB−</option>
        </select>

        <button type="submit">✅ Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatient;
