import React, { Component } from 'react';
import EMPLOYEES from './queries';
import Table from './table';
import { Query } from 'react-apollo';
import Loading from '../../assets/Components/Loading';
import '../../styles/constantStyle.css';

class Employee extends Component {
  render() {
    return (
      <>
        <Query query={EMPLOYEES}>
          {({ loading, error, data }) => {
            const { employees } = data;
            if (loading || !employees) return <Loading />;
            if (error) return `Error ${error.message}`;
            return <Table employees={employees} />;
          }}
        </Query>
      </>
    );
  }
}

export default Employee;
