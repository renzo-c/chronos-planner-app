import gql from 'graphql-tag';

export const SCHEDULES = gql`
  query schedules {
    schedules {
      id
      tagName
      start
      end
      employees {
        id
        firstName
        lastName
        user
        password
        dni
        phone
        address
        email
        status
      }
      status
    }
  }
`;
