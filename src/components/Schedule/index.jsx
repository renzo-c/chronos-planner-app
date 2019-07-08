import React, { Component } from 'react';
import { SCHEDULES } from './queries';
import Table from './table';
import { Query } from 'react-apollo';
import Loading from '../../assets/Components/Loading';
import ErrorMessage from '../../assets/Components/ErrorMessage';
import '../../styles/constantStyle.css';

class Schedule extends Component {
  render() {
    return (
      <>
        <Query query={SCHEDULES}>
          {({ loading, error, data }) => {
            console.log('data', data);
            const { schedules } = data;
            if (error) return <ErrorMessage error={error} />;
            if (loading || !schedules) return <Loading />;
            return <Table schedules={schedules} />;
          }}
        </Query>
      </>
    );
  }
}

export default Schedule;
