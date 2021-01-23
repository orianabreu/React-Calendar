import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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

export default function FormDialog({open, setOpen}) {

    const [value, setValue] = useState({
        title: '',
        start: '',
        end: ''
    })

    const classes = useStyles();
    const { title, start, end } = value;

    const handleClick = () => {
        setValue({...value});
        setOpen(false);
    }

    const handleChange = event => {
        setValue(event.target.value);
        console.log(value);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        handleClickOpen={handleClickOpen}
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
                    onChange={handleChange}
                    value={title}
                />
            
            <form className={classes.container} noValidate>
                <TextField
                    id="time"
                    type="time"
                    defaultValue="07:30"
                    label='Hora de inicio'
                    value={start}
                    onChange={handleChange}
                    className={classes.textField}
                />
                <TextField
                    id="time"
                    type="time"
                    defaultValue="08:30"
                    label='Hora de fin'
                    value={end}
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