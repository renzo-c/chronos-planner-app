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
import { scheduleInitValues } from '../../../../constants/models';
import { Mutation } from 'react-apollo';
import { CREATE_SCHEDULE } from '../../../../components/Schedule/mutations';
import { SCHEDULES } from '../../../../components/Schedule/queries';

const getScheduleCleanObject = obj => JSON.parse(JSON.stringify(obj));

const update = (cache, { data: { createSchedule } }) => {
  const { schedules } = cache.readQuery({ query: SCHEDULES });
  cache.writeQuery({
    query: SCHEDULES,
    data: { schedules: schedules.concat([createSchedule]) },
  });
};

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

// const dateTimeAdornment = (
//   <InputAdornment position={'start'}>

//   </InputAdornment>
// );

const Create = () => {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState(
    getScheduleCleanObject(scheduleInitValues)
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setValues(getScheduleCleanObject(scheduleInitValues));
    setOpen(false);
  };

  const handleChange = name => event => {
    if (event instanceof Date) {
      setValues({ ...values, [name]: event });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const handleSave = (createSchedule, variables) => {
    createSchedule(variables).then(() => handleClose());
  };
  console.log("values-Create", values);
  return (
    <>
      <Tooltip title="New Schedule">
        <IconButton aria-label="New Schedule" onClick={handleOpen}>
          <i className={'material-icons'}>add_alarm</i>
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Create Schedule
        </DialogTitle>
        <DialogContent>
          <TextField
            id="name"
            label="Name"
            placeholder="Tag name"
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
          <Mutation
            mutation={CREATE_SCHEDULE}
            variables={values}
            update={update}
          >
            {(createSchedule, { data, loading, error }) => {
              if (loading) {
                return <Loading />;
              }
              return (
                <>
                  <Button
                    onClick={() =>
                      handleSave(createSchedule, { variables: data })
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

export default Create;
