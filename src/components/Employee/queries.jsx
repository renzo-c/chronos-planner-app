import gql from 'graphql-tag';

const employees = gql`
  query employees {
    employees {
      id
      firstName
      lastName
      user
      password
      dni
      address
      phone
      email
      status
    }
  }
`;

export default employees;