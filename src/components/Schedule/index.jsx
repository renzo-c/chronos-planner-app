import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { SCHEDULES } from './queries';
import { EMPLOYEES } from '../Employee/queries';
import Table from './table';
import { Query } from 'react-apollo';
import Loading from '../../assets/Components/Loading';
import ErrorMessage from '../../assets/Components/ErrorMessage';
import '../../styles/constantStyle.css';

const Schedule = () => {
  const { data: employees, loading: emplLoading, error: emplError } = useQuery(
    EMPLOYEES
  );
  const { data: schedules, loading: scheLoading, error: scheError } = useQuery(
    SCHEDULES
  );
  if (scheLoading || !schedules || emplLoading || !employees)
    return <Loading />;
  if (emplError) return <ErrorMessage error={emplError} />;
  if (scheError) return <ErrorMessage error={scheError} />;

  return <Table schedules={schedules.schedules} employees={employees}/>;
};

export default Schedule;
