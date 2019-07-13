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
      employees {
        id
        user
      }
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

export const ADD_EMPLOYEE_TO_SCHEDULE = gql`
  mutation addEmployeeToSchedule($scheduleId: ID!, $employeeUser: String!) {
    addEmployeeToSchedule(
      scheduleId: $scheduleId
      employeeUser: $employeeUser
    ) {
      id
      tagName
      start
      end
      employees {
        id
        user
      }
      status
    }
  }
`;
