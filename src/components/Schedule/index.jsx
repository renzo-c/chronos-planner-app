import React from 'react';
import Table from './table';
import Loading from '../../assets/Components/Loading';
import ErrorMessage from '../../assets/Components/ErrorMessage';
import { useQuery } from 'react-apollo-hooks';
import { SCHEDULES } from './queries';
import { EMPLOYEES } from '../Employee/queries';
import { withAuthorization } from '../Session';
import './style.css';

const Schedule = () => {
  const {
    data: employees,
    loading: employeeLoading,
    error: employeeError,
  } = useQuery(EMPLOYEES);

  const {
    data: schedules,
    loading: scheduleLoading,
    error: scheduleError,
  } = useQuery(SCHEDULES);

  if (scheduleLoading || !schedules || employeeLoading || !employees)
    return <Loading />;
  if (employeeError) return <ErrorMessage error={employeeError} />;
  if (scheduleError) return <ErrorMessage error={scheduleError} />;
  return (
    <>
    <div id='backgroundSchedule'></div>
    <Table schedules={schedules.schedules} employees={employees.employees} />
    </>
  );
};

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Schedule);
