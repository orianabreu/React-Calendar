import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
require('moment/locale/es.js');

const localizer = momentLocalizer(moment);

export default function MyCalendar() {

    const events = [
        {
          start: moment().toDate(),
          end: moment()
            .add(1, "days")
            .toDate(),
          title: "Some title"
        }
      ]

    return (
        <div className="App">
            <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{ height: "80vh", width: '80vw' }}
            messages={{
                next: "sig",
                previous: "ant",
                today: "Hoy",
                month: "Mes",
                week: "Semana",
                day: "Día"
              }}
            />
      </div>
    );
}