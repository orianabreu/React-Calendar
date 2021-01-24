import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(5),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      width: 200,
    },
  }));

export default function FormDialog({open, setOpen, createEvent, selectedDate}) {
    const [value, setValue] = useState({
        title: '',
        start: '',
        end: ''
    })

    const classes = useStyles();
    const { title, start, end } = value;

    const handleClick = () => {
        setOpen(false);
        createEvent(value);
        setValue({
          title: '',
          start: '',
          end: ''
      });
    }

    const handleChange = event => {
      const { name, value } = event.target;

      const hoursAndMinutes = value.split(':');

      console.log(hoursAndMinutes);

      setValue((prevValue) => ({
        ...prevValue,
        [name]: name === 'title' ? value : moment(selectedDate).hour(Number(hoursAndMinutes[0])).minutes(Number(hoursAndMinutes[1])).toDate()
      }));
      
    }
    console.log(value);

    const handleClose = () => {
        setOpen(false);
    };

    console.log();

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
            
            <form className={classes.container} noValidate>
                <TextField
                    id="start"
                    type="time"
                    label='Hora de inicio'
                    value={moment(start).format('HH:mm')}
                    name='start'
                    onChange={handleChange}
                    className={classes.textField}
                />
                <TextField
                    id="end"
                    type="time"
                    label='Hora de fin'
                    value={moment(end).format('HH:mm')}
                    name='end'
                    onChange={handleChange}
                    className={classes.textField}
                />
            </form>

            </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
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