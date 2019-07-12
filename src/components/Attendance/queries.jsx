import gql from 'graphql-tag';

export const ATTENDANCES = gql`
  query attendances {
    attendances {
      employee {
          user
      }
      schedule {
          id
      }
    }
  }
`;
