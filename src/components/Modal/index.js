import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment';
import useStyles from './styles';


export default function Modal({open, setOpen, createEvent, selectedDate}) {
    const [event, setEvent] = useState({
        title: '',
        start: '',
        end: ''
    })

    const {container, textField} = useStyles();

    const { title, start, end } = event;

    const handleClick = () => {
        setOpen(false);
        createEvent(event);
        setEvent({
          title: '',
          start: '',
          end: ''
      });
    }

    const handleChange = e => {
      const { name, value } = e.target;

      const hoursAndMinutes = value.split(':');

      setEvent((prevValue) => ({
        ...prevValue,
        [name]: name === 'title' ? value : moment(selectedDate).hour(Number(hoursAndMinutes[0])).minutes(Number(hoursAndMinutes[1])).toDate()
      }));
      
    }

    const handleClose = () => {
        setOpen(false);
    };


    return (
      <div>
        <Dialog 
          open={open} 
          onClose={handleClose} 
          aria-labelledby="form-dialog-title"
          >
          <DialogTitle id="form-dialog-title">
              Añadir Cita
          </DialogTitle>
              <DialogContent>
              <DialogContentText>
                  Añade el motivo de tu cita y selecciona la hora de tu preferencia
              </DialogContentText>
                  <TextField
                      autoFocus
                      margin="dense"
                      id="title"
                      label="Título"
                      type="text"
                      fullWidth
                      name='title'
                      onChange={handleChange}
                      value={title}
                  />
              
              <form className={container} noValidate>
                  <TextField
                      id="start"
                      type="time"
                      label='Hora de inicio'
                      value={moment(start).format('HH:mm')}
                      name='start'
                      onChange={handleChange}
                      className={textField}
                  />
                  <TextField
                      id="end"
                      type="time"
                      label='Hora de fin'
                      value={moment(end).format('HH:mm')}
                      name='end'
                      onChange={handleChange}
                      className={textField}
                  />
              </form>

              </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancelar
            </Button>
            <Button onClick={handleClick} color="primary">
              Agendar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  );
}