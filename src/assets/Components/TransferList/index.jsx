import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Loading from '../Loading';
import { Mutation } from 'react-apollo';
import { ADD_EMPLOYEE_TO_SCHEDULE } from '../../../components/Schedule/mutations';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginRight: '2.33em',
    marginTop: '1.2em',
  },
}));

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

function getAvailableEmployees(totalEmployees, assignedEmployees) {
  let usersList = totalEmployees.map(employee => employee.user);
  return not(usersList, assignedEmployees);
}
export default function TransferList({ schedule, employees, closeModal }) {
  const classes = useStyles();
  const assignedEmployees = schedule.employees.map(employee => employee.user);
  const availableEmployees = getAvailableEmployees(
    employees,
    assignedEmployees
  );
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(availableEmployees);
  const [right, setRight] = React.useState(assignedEmployees);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = items => intersection(checked, items).length;

  const handleToggleAll = items => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleClose = () => {
    closeModal();
  };

  const handleSave = (addEmployeeToSchedule, scheduleId, assignedEmployees) => {
    if (assignedEmployees.length > 0) {
      assignedEmployees.map(employeeUser => {
        addEmployeeToSchedule({
          variables: {
            scheduleId,
            employeeUser: employeeUser || '',
          },
        }).then(() => handleClose());
      });
    } else {
      addEmployeeToSchedule({
        variables: {
          scheduleId,
          employeeUser: '',
        },
      }).then(() => handleClose());
    }
  };

  const customList = (title, items) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'all items selected' }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map(value => {
          const labelId = `transfer-list-all-item-${value}-label`;
          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );
  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>{customList('Not assigned', left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Assigned', right)}</Grid>
      <div className={classes.modalButtons}>
        <Mutation mutation={ADD_EMPLOYEE_TO_SCHEDULE}>
          {(addEmployeeToSchedule, { loading, error }) => {
            if (loading) {
              return <Loading />;
            }
            return (
              <>
                <Button
                  onClick={() => {
                    handleSave(addEmployeeToSchedule, schedule.id, right);
                  }}
                  color="primary"
                >
                  Save
                </Button>
                {error && <ErrorMessage error={error} />}
              </>
            );
          }}
        </Mutation>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </div>
    </Grid>
  );
}
