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
import { employeeInitValues } from '../../../../constants/models';
import { Mutation } from 'react-apollo';
import { CREATE_EMPLOYEE } from '../../../../components/Employee/mutations';

const getEmployeeCleanObject = obj =>
  JSON.parse(JSON.stringify(employeeInitValues));

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
    getEmployeeCleanObject(employeeInitValues)
  );
  const [loadSnippet, setLoadSnippet] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setValues(getEmployeeCleanObject(employeeInitValues));
    setOpen(false);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const { firstName, lastName, user, password, address, phone, email } = values;
  const dni = parseInt(values.dni);

  return (
    <>
      <Tooltip title="New Employee">
        <IconButton aria-label="New Employee" onClick={handleOpen}>
          <i className={'material-icons'}>add</i>
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Create Employee
        </DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-full-width"
            label="First Name"
            placeholder="Name(s)"
            value={values.firstName}
            onChange={handleChange('firstName')}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-full-width"
            label="Last Name"
            placeholder="Last name(s)"
            value={values.lastName}
            onChange={handleChange('lastName')}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-full-width"
            label="User"
            placeholder="User account"
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
            id="outlined-full-width"
            label="Password"
            placeholder="Password account"
            value={values.password}
            onChange={handleChange('password')}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-full-width"
            label="DNI"
            placeholder="Identity Document"
            value={values.dni}
            onChange={handleChange('dni')}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-full-width"
            label="Address"
            placeholder="Address"
            value={values.address}
            onChange={handleChange('address')}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-full-width"
            label="Phone"
            placeholder="Phone (fixed or mobile)"
            value={values.phone}
            onChange={handleChange('phone')}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-full-width"
            label="Email"
            placeholder="Email account"
            value={values.email}
            onChange={handleChange('email')}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-select-currency"
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
            mutation={CREATE_EMPLOYEE}
            variables={{
              firstName,
              lastName,
              user,
              password,
              dni,
              address,
              phone,
              email,
            }}
          >
            {(createEmployee, { data, loading, error }) => {
              if (error) {
                return <ErrorMessage error={error} />;
              }
              if (loading) return <Loading />;
              return (
                <Button onClick={createEmployee} color="primary">
                  Save
                </Button>
              );
            }}
          </Mutation>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Create;
