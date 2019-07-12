import gql from 'graphql-tag';

export const CREATE_SCHEDULE = gql`
  mutation createSchedule(
    $tagName: String!
    $start: DateTime!
    $end: DateTime!
    $status: String!
  ) {
    createSchedule(
      tagName: $tagName
      start: $start
      end: $end
      status: $status
    ) {
      id
      tagName
      start
      end
      status
    }
  }
`;

export const UPDATE_SCHEDULE = gql`
  mutation updateSchedule(
    $id: ID!
    $tagName: String!
    $start: DateTime!
    $end: DateTime!
    $status: String!
  ) {
    updateSchedule(
      id: $id
      tagName: $tagName
      start: $start
      end: $end
      status: $status
    ) {
      id
      tagName
      start
      end
      status
    }
  }
`;

export const DELETE_SCHEDULE = gql`
  mutation deleteSchedule($id: ID!) {
    deleteSchedule(id: $id) {
      id
      tagName
      start
      end
      status
    }
  }
`;
