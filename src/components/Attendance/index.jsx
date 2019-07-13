import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { ATTENDANCES } from './queries';
// import Table from './table';
import Loading from '../../assets/Components/Loading';
import ErrorMessage from '../../assets/Components/ErrorMessage';
import '../../styles/constantStyle.css';

const Attendance = () => {
  const { data: attendances, loading, error } = useQuery(ATTENDANCES);

  console.log('attendances', attendances);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  return null;
  // <Table schedules={schedules.schedules} employees={employees.employees} />
};

export default Attendance;
