import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'green',
  },
  centering: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.centering}>
      <CircularProgress />
      </div>
    </div>
  );
};

export default Loading;
