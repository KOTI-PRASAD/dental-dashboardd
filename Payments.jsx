import React, { useState, useEffect } from 'react';
import './Payments.css';

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [formData, setFormData] = useState({
    patientName: '',
    amount: '',
    date: '',
  });
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    const saved = localStorage.getItem('dentalPayments');
    if (saved) {
      setPayments(JSON.parse(saved));
    } else {
      const defaultPayments = [
        { patientName: 'John Doe', amount: '2500', date: '2025-07-07' },
        { patientName: 'Jane Smith', amount: '1800', date: '2025-07-08' },
      ];
      setPayments(defaultPayments);
      localStorage.setItem('dentalPayments', JSON.stringify(defaultPayments));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updated;
    if (editingIndex >= 0) {
      updated = [...payments];
      updated[editingIndex] = formData;
      setEditingIndex(-1);
    } else {
      updated = [...payments, formData];
    }
    setPayments(updated);
    localStorage.setItem('dentalPayments', JSON.stringify(updated));
    setFormData({ patientName: '', amount: '', date: '' });
  };

  const handleEdit = (index) => {
    setFormData(payments[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = payments.filter((_, i) => i !== index);
    setPayments(updated);
    localStorage.setItem('dentalPayments', JSON.stringify(updated));
  };

  return (
    <div className="payments-container">
      <h2>💳 Payments</h2>
      <form onSubmit={handleSubmit} className="payments-form">
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (₹)"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingIndex >= 0 ? 'Update' : 'Add'} Payment</button>
      </form>

      <table className="payments-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Amount (₹)</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.patientName}</td>
              <td>{payment.amount}</td>
              <td>{payment.date}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
          {payments.length === 0 && (
            <tr>
              <td colSpan="4">No payments available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
