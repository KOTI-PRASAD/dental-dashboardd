import React from 'react';
import './Dashboard.css';
import { useAuth } from '../context/AuthContext';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const { user, logout } = useAuth();

  // Sample Data
  const patientPieData = {
    labels: ['New Patients', 'Returning Patients'],
    datasets: [
      {
        data: [8, 4],
        backgroundColor: ['#0d6efd', '#ffc107'],
        hoverOffset: 4,
      },
    ],
  };

  const revenueBarData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue (₹)',
        data: [15000, 22000, 18000, 20000, 25000, 27000, 30000],
        backgroundColor: '#28a745',
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <div className="welcome-banner">
        <h1>Welcome, {user?.username}!</h1>
        <p>Role: <strong>{user?.role}</strong></p>
        <p>{new Date().toDateString()}</p>
      </div>

      <div className="cards-container">
        <div className="card"><h3>🧑‍⚕️ Patients</h3><p>12</p></div>
        <div className="card"><h3>📅 Appointments</h3><p>5 Today</p></div>
        <div className="card"><h3>💰 Payments</h3><p>₹8,500</p></div>
        <div className="card"><h3>🦷 Treatments</h3><p>7 Completed</p></div>
      </div>

      <div className="chart-sections">
        <div className="chart-box">
          <h2>🧑‍⚕️ Patient Summary</h2>
          <Pie data={patientPieData} />
        </div>
        <div className="chart-box">
          <h2>💰 Monthly Revenue</h2>
          <Bar data={revenueBarData} />
        </div>
      </div>

      <div className="info-sections">
        <div className="appointments-today">
          <h2>📆 Today's Appointments</h2>
          <ul>
            <li>10:00 AM - John Doe (Tooth Cleaning)</li>
            <li>11:30 AM - Priya Shah (Cavity Fill)</li>
            <li>01:00 PM - Ahmed Khan (Root Canal)</li>
          </ul>
        </div>

        <div className="dental-tips">
          <h2>🦷 Dental Tips</h2>
          <p>🪥 Brush twice a day with fluoride toothpaste.</p>
          <p>🥦 Eat healthy, avoid sugary snacks.</p>
          <p>🧼 Replace toothbrush every 3 months.</p>
        </div>
      </div>

      <div className="recent-patients">
        <h2>🧾 Recent Patients</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Last Visit</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Ravi Kumar</td><td>29</td><td>2025-07-05</td><td>Filling</td></tr>
            <tr><td>Anjali Mehta</td><td>34</td><td>2025-07-04</td><td>Cleaning</td></tr>
            <tr><td>Sameer Reddy</td><td>40</td><td>2025-07-02</td><td>Root Canal</td></tr>
          </tbody>
        </table>
      </div>

      <button onClick={logout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Dashboard;
