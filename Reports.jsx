import React from 'react';
import './Reports.css';

const Reports = () => {
  const reportData = [
    {
      name: "🧑‍⚕️ John Doe",
      date: "📅 2025-07-10",
      treatment: "🦷 Root Canal",
      status: "Paid",
      amount: "💰 ₹4500",
      notes: "✅ Completed successfully",
    },
    {
      name: "👩‍⚕️ Jane Smith",
      date: "📅 2025-07-09",
      treatment: "🦷 Tooth Extraction",
      status: "Pending",
      amount: "💰 ₹1500",
      notes: "📌 Follow-up in 3 days",
    },
    {
      name: "🧑‍⚕️ Anil Kumar",
      date: "📅 2025-07-08",
      treatment: "🪥 Braces Fixing",
      status: "Paid",
      amount: "💰 ₹12000",
      notes: "📆 Next visit after 6 weeks",
    },
  ];

  return (
    <div className="reports-container">
      <h2 className="reports-title">📊 Clinic Reports Overview</h2>
      <div className="reports-table-wrapper">
        <table className="reports-table">
          <thead>
            <tr>
              <th>👤 Patient</th>
              <th>📅 Visit Date</th>
              <th>🦷 Treatment</th>
              <th>💳 Status</th>
              <th>💰 Amount</th>
              <th>📝 Notes</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((r, index) => (
              <tr key={index}>
                <td>{r.name}</td>
                <td>{r.date}</td>
                <td>{r.treatment}</td>
                <td className={r.status === "Paid" ? "paid" : "pending"}>
                  {r.status === "Paid" ? "✅ Paid" : "⏳ Pending"}
                </td>
                <td>{r.amount}</td>
                <td>{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
