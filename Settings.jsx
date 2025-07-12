import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings = () => {
  const [user, setUser] = useState({
    role: '',
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('dentalUser')) || {
      role: 'Admin',
      name: 'Admin User',
      email: 'admin@dentalcenter.com',
      password: 'admin123'
    };
    setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('dentalUser', JSON.stringify(user));
    alert('✅ Settings saved successfully!');
  };

  return (
    <div className="settings-wrapper">
      <h2 className="settings-header">⚙️ User Settings</h2>

      <div className="settings-group">
        <label>👤 Role:</label>
        <input
          type="text"
          name="role"
          value={user.role}
          onChange={handleChange}
          disabled
        />
      </div>

      <div className="settings-group">
        <label>📝 Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>

      <div className="settings-group">
        <label>📧 Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>

      <div className="settings-group">
        <label>🔐 Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>

      <button className="settings-button" onClick={handleSave}>
        💾 Save Changes
      </button>
    </div>
  );
};

export default Settings;
