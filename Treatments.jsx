import React, { useState, useEffect } from 'react';
import './Treatments.css';

const defaultTreatments = [
  {
    id: 1,
    patient: 'Ravi Kumar',
    name: 'Root Canal',
    doctor: 'Dr. Nisha',
    cost: 4500,
    date: '2025-07-10',
  },
  {
    id: 2,
    patient: 'Sneha Reddy',
    name: 'Tooth Filling',
    doctor: 'Dr. Ramesh',
    cost: 1200,
    date: '2025-07-08',
  },
  {
    id: 3,
    patient: 'Arjun Das',
    name: 'Braces Consultation',
    doctor: 'Dr. Meera',
    cost: 500,
    date: '2025-07-05',
  },
];

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);
  const [newTreatment, setNewTreatment] = useState({
    patient: '',
    name: '',
    doctor: '',
    cost: '',
    date: '',
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('treatments'));
    if (storedData && storedData.length > 0) {
      setTreatments(storedData);
    } else {
      setTreatments(defaultTreatments);
      localStorage.setItem('treatments', JSON.stringify(defaultTreatments));
    }
  }, []);

  const handleEdit = (id, field, value) => {
    const updated = treatments.map((t) =>
      t.id === id ? { ...t, [field]: value } : t
    );
    setTreatments(updated);
    localStorage.setItem('treatments', JSON.stringify(updated));
  };

  const handleAddTreatment = () => {
    if (
      !newTreatment.patient ||
      !newTreatment.name ||
      !newTreatment.doctor ||
      !newTreatment.cost ||
      !newTreatment.date
    ) {
      alert('Please fill in all fields');
      return;
    }

    const newEntry = {
      id: Date.now(),
      ...newTreatment,
    };

    const updated = [...treatments, newEntry];
    setTreatments(updated);
    localStorage.setItem('treatments', JSON.stringify(updated));
    setNewTreatment({
      patient: '',
      name: '',
      doctor: '',
      cost: '',
      date: '',
    });
  };

  return (
    <div className="treatments-container">
      <h2>🦷 Treatments</h2>

      <div className="add-treatment">
        <h3>Add Treatment</h3>
        <div className="form-grid">
          <input
            type="text"
            placeholder="Patient Name"
            value={newTreatment.patient}
            onChange={(e) =>
              setNewTreatment({ ...newTreatment, patient: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Treatment Type"
            value={newTreatment.name}
            onChange={(e) =>
              setNewTreatment({ ...newTreatment, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Doctor"
            value={newTreatment.doctor}
            onChange={(e) =>
              setNewTreatment({ ...newTreatment, doctor: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Cost (₹)"
            value={newTreatment.cost}
            onChange={(e) =>
              setNewTreatment({ ...newTreatment, cost: e.target.value })
            }
          />
          <input
            type="date"
            value={newTreatment.date}
            onChange={(e) =>
              setNewTreatment({ ...newTreatment, date: e.target.value })
            }
          />
          <button onClick={handleAddTreatment}>Add Treatment</button>
        </div>
      </div>

      <table className="treatments-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Treatment Type</th>
            <th>Doctor</th>
            <th>Cost (₹)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {treatments.map((t) => (
            <tr key={t.id}>
              <td>
                <input
                  type="text"
                  value={t.patient}
                  onChange={(e) =>
                    handleEdit(t.id, 'patient', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={t.name}
                  onChange={(e) =>
                    handleEdit(t.id, 'name', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={t.doctor}
                  onChange={(e) =>
                    handleEdit(t.id, 'doctor', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={t.cost}
                  onChange={(e) =>
                    handleEdit(t.id, 'cost', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="date"
                  value={t.date}
                  onChange={(e) =>
                    handleEdit(t.id, 'date', e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Treatments;
