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
import Loading from '../../Loading';
import ErrorMessage from '../../ErrorMessage';
import { scheduleInitValues } from '../../../../constants/models';
import { Mutation } from 'react-apollo';
import { CREATE_EMPLOYEE } from '../../../../components/Employee/mutations';
import { EMPLOYEES } from '../../../../components/Employee/queries';

const getScheduleCleanObject = obj =>
  JSON.parse(JSON.stringify(scheduleInitValues));

// const update = (cache, { data: { createEmployee } }) => {
//   const { employees } = cache.readQuery({ query: EMPLOYEES });
//   cache.writeQuery({
//     query: EMPLOYEES,
//     data: { employees: employees.concat([createEmployee]) },
//   });
// };

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

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
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSave = (createEmployee, variables) => {
    createEmployee(variables).then(() => handleClose());
  };

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
          <TextField
            id="start"
            label="Start"
            placeholder="Starts at..."
            value={values.start}
            onChange={handleChange('start')}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="end"
            label="End"
            placeholder="Ends at..."
            value={values.end}
            onChange={handleChange('end')}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="'user'"
            label="Responsible"
            placeholder="Identity Document"
            value={values.user}
            onChange={handleChange('user')}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
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
          {/* <Mutation
            mutation={CREATE_EMPLOYEE}
            variables={values}
            update={update}
          >
            {(createEmployee, { data, loading, error }) => {
              if (loading) {
                return <Loading />;
              }
              return (
                <> */}
                  <Button
                    onClick={() =>
                      handleSave(createEmployee, { variables: data })
                    }
                    color="primary"
                  >
                    Save
                  </Button>
                  {/* {error && <ErrorMessage error={error} />} */}
                {/* </>
              );
            }}
          </Mutation> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Create;
