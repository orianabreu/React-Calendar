import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={(value, event) => alert('New date is: ', value)}
        value={value}
      />
    </div>
  );
}