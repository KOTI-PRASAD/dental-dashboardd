import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dental Center</h2>
      <nav className="sidebar-nav">
        <NavLink to="/" className="sidebar-link">Dashboard</NavLink>
        <NavLink to="/add-patient" className="sidebar-link">Add Patient</NavLink>
        <NavLink to="/patients" className="sidebar-link">Patients</NavLink> {/* ✅ Added */}
        <NavLink to="/appointments" className="sidebar-link">Appointments</NavLink>
        <NavLink to="/calendar" className="sidebar-link">Calendar</NavLink>
        <NavLink to="/payments" className="sidebar-link">Payments</NavLink>
        <NavLink to="/treatments" className="sidebar-link">Treatments</NavLink>
        <NavLink to="/reports" className="sidebar-link">Reports</NavLink>
        <NavLink to="/settings" className="sidebar-link">Settings</NavLink>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </nav>
    </div>
  );
}

export default Sidebar;
