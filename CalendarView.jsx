import React from "react";

const CalendarView = () => {
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  // Group appointments by date
  const grouped = appointments.reduce((acc, appt) => {
    acc[appt.date] = acc[appt.date] || [];
    acc[appt.date].push(appt);
    return acc;
  }, {});

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Calendar View</h2>
      {Object.keys(grouped).length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        Object.entries(grouped).map(([date, appts]) => (
          <div key={date} className="mb-6">
            <h3 className="text-lg font-semibold text-blue-700">{date}</h3>
            <ul className="ml-4 list-disc">
              {appts.map((appt, i) => (
                <li key={i} className="my-2">
                  <strong>{appt.patientName}</strong> at {appt.time} — {appt.reason}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default CalendarView;
