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
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Loading from '../../Loading';
import ErrorMessage from '../../ErrorMessage';
import { Mutation } from 'react-apollo';
import { UPDATE_EMPLOYEE } from '../../../../components/Employee/mutations';

const getEmployeeCleanObject = obj => JSON.parse(JSON.stringify(obj));

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const Update = ({ employee }) => {
  const [values, setValues] = React.useState(getEmployeeCleanObject(employee));
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleOpen = () => {
    setValues(getEmployeeCleanObject(employee));
    setOpen(true);
  };

  const handleClose = () => {
    setValues(getEmployeeCleanObject(employee));
    setOpen(false);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSave = (updateEmployee, variables) => {
    updateEmployee(variables).then(() => handleClose());
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const passwordAdornment = (
    <InputAdornment position={'end'}>
      <IconButton
        aria-label="Toggle password visibility"
        onClick={handleClickShowPassword}
      >
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
  return (
    <>
      <Tooltip title="Update Employee Information">
        <IconButton
          aria-label="Update Employee Information"
          onClick={handleOpen}
        >
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
          Create Employee
        </DialogTitle>
        <DialogContent>
          <TextField
            id="firstName"
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
            id="lastName"
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
            disabled
            id="user"
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
            id="password"
            type={showPassword ? 'text' : 'password'}
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
            InputProps={{
              endAdornment: passwordAdornment,
            }}
          />
          <TextField
            id="dni"
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
            id="address"
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
            id="phone"
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
            id="email"
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
          <Mutation mutation={UPDATE_EMPLOYEE} variables={values}>
            {(updateEmployee, { data, loading, error }) => {
              if (loading) {
                return <Loading />;
              }
              return (
                <>
                  <Button
                    onClick={() =>
                      handleSave(updateEmployee, { variables: data })
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
