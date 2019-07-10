import gql from 'graphql-tag';

export const CREATE_SCHEDULE = gql`
mutation createSchedule(
    $tagName: String!
    $start: DateTime!
    $end: DateTime!
    $employeeUser: String
    $status: String!
) {createSchedule(
    tagName: $tagName
    start: $start
    end: $end
    employeeUser: $employeeUser
    status: $status
    ) {
        id
        tagName
        start
        end
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
        status
    }
}
`;
