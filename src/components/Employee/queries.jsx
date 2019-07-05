import gql from 'graphql-tag';

export const EMPLOYEES = gql`
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
