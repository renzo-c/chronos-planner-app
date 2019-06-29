import gql from 'graphql-tag';

const employees = gql`
  query employees {
    employees {
      id
      firstName
      user
      createdAt
      deletedAt
    }
  }
`;

export default employees;
