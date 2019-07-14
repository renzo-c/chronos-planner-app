import gql from 'graphql-tag';

export const ATTENDANCES = gql`
  query attendances {
    attendances {
      id
      photo
      latitude
      longitude
      start
      employee {
          user
      }
      schedule {
          id
          tagName
          start
          end
      }
      status
    }
  }
`;
