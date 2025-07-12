import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AddPatient from './pages/AddPatient';
import Appointments from './pages/Appointments';
import Calendar from './pages/Calendar';
import Payments from './pages/Payments';
import Treatments from './pages/Treatments';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Patients from './pages/Patients'; // ✅ Import Patients page

const PrivateRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('user');
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  const isLoggedIn = !!localStorage.getItem('user');

  return (
    <div style={{ display: 'flex' }}>
      {isLoggedIn && <Sidebar />}
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/add-patient" element={<PrivateRoute><AddPatient /></PrivateRoute>} />
          <Route path="/patients" element={<PrivateRoute><Patients /></PrivateRoute>} /> {/* ✅ Add this */}
          <Route path="/appointments" element={<PrivateRoute><Appointments /></PrivateRoute>} />
          <Route path="/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
          <Route path="/payments" element={<PrivateRoute><Payments /></PrivateRoute>} />
          <Route path="/treatments" element={<PrivateRoute><Treatments /></PrivateRoute>} />
          <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
