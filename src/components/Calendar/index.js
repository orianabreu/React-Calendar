import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Modal from '../Modal';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import useStyles from './styles';
require('moment/locale/es.js');

const localizer = momentLocalizer(moment);

export default function MyCalendar() {

    const {calendar} = useStyles();

    const [open, setOpen] = useState(false);

    const [selectedDate, setSelectedDate] = useState();
    
    const [events, setEvents] = useState([]);

    const openModal = (date) => {
        setSelectedDate(date);
        setOpen(true);
    }

    const createEvent = (value) => {
        setEvents([...events, value])
    }

    return (
        <>
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={events}
                className={calendar}
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
      </>
    );
}