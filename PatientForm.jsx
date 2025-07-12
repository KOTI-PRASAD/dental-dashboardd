import React, { useState } from 'react';

const PatientForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [disease, setDisease] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && disease) {
      onAdd({ id: Date.now(), name, age, disease });
      setName('');
      setAge('');
      setDisease('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" type="number" required />
      <input value={disease} onChange={(e) => setDisease(e.target.value)} placeholder="Disease" required />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default PatientForm;
