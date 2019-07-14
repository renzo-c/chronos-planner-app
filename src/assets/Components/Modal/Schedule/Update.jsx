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
import MenuItem from '@material-ui/core/MenuItem';
import DateTimePickerModal from '../../DateTimePicker';
import Loading from '../../Loading';
import ErrorMessage from '../../ErrorMessage';
import { Mutation } from 'react-apollo';
import { UPDATE_SCHEDULE } from '../../../../components/Schedule/mutations';

const getScheduleObject = obj => JSON.parse(JSON.stringify(obj));

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const Update = ({ schedule }) => {
  const [values, setValues] = React.useState(getScheduleObject(schedule));
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setValues(getScheduleObject(schedule));
    setOpen(true);
  };

  const handleClose = () => {
    setValues(getScheduleObject(schedule));
    setOpen(false);
  };

  const handleChange = name => event => {
    if (event instanceof Date) {
      setValues({ ...values, [name]: event });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const handleSave = (updateSchedule, variables) => {
    updateSchedule(variables).then(() => handleClose());
  };

  return (
    <>
      <Tooltip title="Update Schedule">
        <IconButton aria-label="Update Schedule" onClick={handleOpen}>
          <i className={'material-icons'}>edit</i>
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Update Schedule
        </DialogTitle>
        <DialogContent>
          <TextField
            id="tagName"
            label="Tag Name"
            placeholder="Tag Name"
            value={values.tagName}
            onChange={handleChange('tagName')}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <DateTimePickerModal
            id="start"
            label="Start"
            value={values.start}
            onChange={handleChange('start')}
          />
          <DateTimePickerModal
            id="start"
            label="End"
            value={values.end}
            onChange={handleChange('end')}
          />
          <TextField
            id="status"
            select
            label="Status"
            fullWidth
            value={values.status}
            onChange={handleChange('status')}
            margin="normal"
            variant="outlined"
          >
            {['enabled', 'disabled'].map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Mutation mutation={UPDATE_SCHEDULE} variables={values}>
            {(updateSchedule, { data, loading, error }) => {
              if (loading) {
                return <Loading />;
              }
              return (
                <>
                  <Button
                    onClick={() =>
                      handleSave(updateSchedule, { variables: data })
                    }
                    color="primary"
                  >
                    Save
                  </Button>
                  {error && <ErrorMessage error={error} />}
                </>
              );
            }}
          </Mutation>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Update;
