import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

const useStyles = makeStyles({
  grid: {
    marginTop: '16px',
    marginBottom: '8px',
    width: '100%',
  },
});

const DateTimePickerModal = ({ value, onChange, label }) => {
  const classes = useStyles();
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          label={label}
          inputVariant="outlined"
          value={value}
          onChange={onChange}
          className={classes.grid}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DateTimePickerModal;
