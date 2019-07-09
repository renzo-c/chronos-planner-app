import gql from 'graphql-tag';

export const SCHEDULES = gql`
  query schedules {
    schedules {
      id
      tagName
      start
      end
      status
      employee {
        firstName
        lastName
        user
        dni
        phone
        address
        email
        status
      }
    }
  }
`;
