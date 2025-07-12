import React, { useEffect, useState } from 'react';

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState(() => {
    const storedAppointments = localStorage.getItem("appointments");
    return storedAppointments ? JSON.parse(storedAppointments) : [];
  });

  const [formData, setFormData] = useState({
    patientName: "",
    date: "",
    time: "",
    reason: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddAppointment = () => {
    const updated = [...appointments, formData];
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
    setFormData({ patientName: "", date: "", time: "", reason: "" });
  };

  const handleDelete = (index) => {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Appointment Management</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          className="p-2 border rounded"
          value={formData.patientName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          className="p-2 border rounded"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          className="p-2 border rounded"
          value={formData.time}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reason"
          placeholder="Reason"
          className="p-2 border rounded"
          value={formData.reason}
          onChange={handleChange}
        />
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAddAppointment}
      >
        Add Appointment
      </button>

      <ul className="mt-6">
        {appointments.map((appt, index) => (
          <li key={index} className="border p-2 mb-2 rounded flex justify-between items-center">
            <div>
              <p><strong>{appt.patientName}</strong> - {appt.date} at {appt.time}</p>
              <p className="text-sm text-gray-600">{appt.reason}</p>
            </div>
            <button
              className="text-red-600"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentManagement;
