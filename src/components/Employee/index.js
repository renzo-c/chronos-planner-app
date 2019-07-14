import React, { Component } from 'react';
import { EMPLOYEES } from './queries';
import Table from './table';
import { Query } from 'react-apollo';
import Loading from '../../assets/Components/Loading';
import { withAuthorization } from '../Session';
import '../../styles/constantStyle.css';

class Employee extends Component {
  render() {
    return (
      <>
        <Query query={EMPLOYEES}>
          {({ loading, error, data }) => {
            const { employees } = data;
            if (error) return `Error ${error.message}`;
            if (loading || !employees) return <Loading />;
            return <Table employees={employees} />;
          }}
        </Query>
      </>
    );
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Employee);
