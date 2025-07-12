import React, { useEffect, useState } from 'react';
import './Patients.css';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(storedPatients);
  }, []);

  const handleRemove = (indexToRemove) => {
    const updatedPatients = patients.filter((_, index) => index !== indexToRemove);
    setPatients(updatedPatients);
    localStorage.setItem('patients', JSON.stringify(updatedPatients));
  };

  return (
    <div className="patients-page">
      <h2>🧑‍⚕️ All Patients</h2>
      {patients.length === 0 ? (
        <p>No patients added yet.</p>
      ) : (
        <table className="patients-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
              <th>Blood Group</th>
              <th>Action</th> {/* ✅ New column */}
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.contact}</td>
                <td>{patient.email}</td>
                <td>{patient.address}</td>
                <td>{patient.bloodGroup}</td>
                <td>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Patients;
