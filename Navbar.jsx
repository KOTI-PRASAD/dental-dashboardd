import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ onNav }) => {
  const { logout, user } = useAuth();

  return (
    <div style={{ padding: '10px', background: '#eee' }}>
      <span><strong>Dental Center</strong></span> |
      <button onClick={() => onNav('dashboard')}>Dashboard</button> |
      <button onClick={() => onNav('addPatient')}>Add Patient</button> |
      <span>User: {user?.username}</span> |
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
