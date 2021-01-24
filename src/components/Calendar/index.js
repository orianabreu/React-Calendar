import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from '../Modal';
require('moment/locale/es.js');

const localizer = momentLocalizer(moment);

export default function MyCalendar() {

    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    
    const [events, setEvents] = useState([
        {
            start: moment().toDate(),
            end: moment()
              .add(1, "days")
              .toDate(),
            title: "Some title"
        }
    ]);

    const openModal = (date) => {
        setSelectedDate(date);
        setOpen(true);
    }

    const createEvent = (value) => {
        setEvents([...events, value])
    }

    return (
        <div>
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={events}
                style={{ height: "80vh", width: '80vw' }}
                onDrillDown={openModal}

                views={{
                    month: true,
                }}

                messages={{
                    next: ">>",
                    previous: "<<",
                    today: "Hoy",
                    month: "Mes"
                }}
            />
            <Modal 
                open={open} 
                setOpen={setOpen}
                createEvent={createEvent}
                selectedDate={selectedDate}
            />
           
      </div>
    );
}