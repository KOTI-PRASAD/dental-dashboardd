import React, { useEffect, useState } from 'react';
import './Appointments.css';

const Appointments = () => {
  const [appointments, setAppointments] = useState(() => {
    const stored = localStorage.getItem('appointments');
    return stored ? JSON.parse(stored) : [
      {
        id: 1,
        patientName: 'John Doe',
        date: '2025-07-10',
        time: '10:00',
        reason: 'Teeth Cleaning',
      },
      {
        id: 2,
        patientName: 'Jane Smith',
        date: '2025-07-11',
        time: '14:30',
        reason: 'Root Canal',
      }
    ];
  });

  const [formData, setFormData] = useState({
    patientName: '',
    date: '',
    time: '',
    reason: ''
  });

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!formData.patientName || !formData.date || !formData.time || !formData.reason) {
      alert("Please fill all fields");
      return;
    }
    const newAppointment = {
      ...formData,
      id: Date.now()
    };
    setAppointments([...appointments, newAppointment]);
    setFormData({ patientName: '', date: '', time: '', reason: '' });
    alert("Appointment added successfully!");
  };

  const handleDelete = (id) => {
    const filtered = appointments.filter((appt) => appt.id !== id);
    setAppointments(filtered);
  };

  return (
    <div className="appointments-page">
      <h2>📅 Appointments</h2>

      <div className="appointment-form">
        <h3>Add Appointment</h3>
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reason"
          placeholder="Reason"
          value={formData.reason}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add Appointment</button>
      </div>

      <div className="appointment-image">
        <img src="https://cdn-icons-png.flaticon.com/512/3926/3926269.png" alt="Dental" />
      </div>

      <div className="appointment-table">
        <h3>Upcoming Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Time</th>
                <th>Reason</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.patientName}</td>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                  <td>{appt.reason}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDelete(appt.id)}>
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Appointments;
