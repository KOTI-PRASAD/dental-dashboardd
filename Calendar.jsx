import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const formattedEvents = storedAppointments.map((appt) => ({
      title: appt.patientName + ' - ' + appt.reason,
      start: appt.date + 'T' + appt.time,
    }));
    setEvents(formattedEvents);
  }, []);

  const handleDateClick = (arg) => {
    alert(`You clicked on ${arg.dateStr}`);
  };

  return (
    <div className="calendar-container">
      <h2>📅 Calendar View</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events}
        dateClick={handleDateClick}
        height="auto"
      />
    </div>
  );
};

export default Calendar;
