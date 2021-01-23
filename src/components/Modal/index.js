import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog({open, setOpen}) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" handleClickOpen={handleClickOpen}>
        <DialogTitle id="form-dialog-title">Añadir Cita</DialogTitle>
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Agendar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}