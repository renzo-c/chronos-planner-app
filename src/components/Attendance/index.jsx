import React from 'react';
import { Query } from 'react-apollo';
import { ATTENDANCES } from './queries';
import Table from './table';
import Loading from '../../assets/Components/Loading';
import ErrorMessage from '../../assets/Components/ErrorMessage';
import { withAuthorization } from '../Session';
// import './style.css';

const Attendance = () => {
  return (
    <>
    <div id='backgroundAttendance'></div>
      <Query query={ATTENDANCES} fetchPolicy="network-only">
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <ErrorMessage error={error} />;
          let attendances = data.attendances;
          return <Table attendances={attendances} />;
        }}
      </Query>
      ;
    </>
  );
};

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Attendance);
