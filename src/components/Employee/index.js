import React, { Component } from 'react';
import EMPLOYEES from './queries';
import Table from './table';
import { Query } from 'react-apollo';
import '../../styles/constantStyle.css';

class Employee extends Component {
  render() {
    return (
      <>
        <Query query={EMPLOYEES}>
        {({loading, error, data}) => {
            if (loading) return "Loading";
            if (error) return `Error ${error.message}`;
            const { employees } = data;
            return <Table employees={employees} />;
        }}
        </Query>
      </>
    );
  }
}

export default Employee;
