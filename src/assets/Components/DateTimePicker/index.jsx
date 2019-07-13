// import 'date-fns';
// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

// const useStyles = makeStyles({
//   grid: {
//     display: "flex",
//     justifyContent: "space-around",
//     position: "absolute",
//   },
// });

// export default function DateTimePicker() {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

//   const classes = useStyles();

//   function handleDateChange(date) {
//     setSelectedDate(date);
//   }

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils} >
//       <div className={classes.grid}>
//         <KeyboardDatePicker
//           margin="normal"
//           id="mui-pickers-date"
//           label="Date picker"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//           InputProps={{
//             disableUnderline: true,
//            }}
//         />
//         <KeyboardTimePicker
//           margin="normal"
//           id="mui-pickers-time"
//           label="Time picker"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change time',
//           }}
//           InputProps={{
//             disableUnderline: true,
//            }}
//         />
//       </div>
//     </MuiPickersUtilsProvider>
//   );
// }

import 'date-fns';
import React, { Fragment, useState } from 'react';
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
console.log("value", value);
  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          label={label}
          inputVariant="outlined"
          value={value}
          onChange={onChange}
          className={classes.grid}
        />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
};

export default DateTimePickerModal;
