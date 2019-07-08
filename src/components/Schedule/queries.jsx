import gql from 'graphql-tag';

export const SCHEDULES = gql`
  query schedules {
    schedules {
      tagName
      start
      end
      status
    }
  }
`;
