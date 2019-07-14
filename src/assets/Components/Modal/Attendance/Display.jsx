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

const Display = ({ attendance }) => {
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
      <Tooltip title="Show info">
        <IconButton aria-label="Show info" onClick={handleOpen}>
          <i className={'material-icons'}>alarm</i>
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Attendance Information
        </DialogTitle>
        <DialogContent>
          <TextField
            disabled
            id="tagName"
            label="Schedule"
            value={attendance.schedule.tagName}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="user"
            label="Employee"
            value={attendance.employee.user}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="photo"
            label="Photo"
            value={attendance.photo || 'Does not start yet'}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="latitude"
            label="Latitude"
            value={attendance.latitude || 'Does not start yet'}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="longitud"
            label="Longitud"
            value={attendance.longitud || 'Does not start yet'}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="start"
            label="start"
            value={
              attendance.start
                ? new Date(attendance.start).toString().slice(0, 21)
                : 'Does not start yet'
            }
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="shouldHaveStarted"
            label="Should have started"
            value={new Date(attendance.schedule.start).toString().slice(0, 21)}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="end"
            label="Should have ended"
            value={new Date(attendance.schedule.end).toString().slice(0, 21)}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="status"
            label="Status"
            value={attendance.status}
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
};

export default Display;
