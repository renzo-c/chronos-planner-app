import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const Display = ({employee}) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Detalles">
        <IconButton aria-label="Detalles" onClick={handleOpen}>
          <i className={'material-icons'}>account_circle</i>
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Employee Information
        </DialogTitle>
        <DialogContent>
          <TextField
            disabled
            id="outlined-disabled"
            label="First Name"
            value={employee.firstName}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Last Name"
            value={employee.lastName}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="User"
            value={employee.user}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="DNI"
            value={employee.dni}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Address"
            value={employee.address}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Phone"
            value={employee.phone}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Email"
            value={employee.email}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Status"
            value="hi"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Display;
