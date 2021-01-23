import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from '../Modal';
require('moment/locale/es.js');

const localizer = momentLocalizer(moment);

export default function MyCalendar({handleClickOpen}) {

    const [open, setOpen] = useState(false);

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
            showMultiDayTimes='true'
            views={{
                month: true,
              }}
            messages={{
                next: "sig",
                previous: "ant",
                today: "Hoy",
                month: "Mes",
                week: "Semana",
                day: "Día"
              }}
            />
            <Modal handleClickOpen={handleClickOpen} open={open} setOpen={setOpen}/>
      </div>
    );
}