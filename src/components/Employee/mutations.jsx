import gql from 'graphql-tag';

export const CREATE_EMPLOYEE = gql`
mutation createEmployee(
    $firstName: String!
    $lastName: String!
    $user: String!
    $password: String!
    $dni: String!
    $address: String!
    $phone: String!
    $email: String!
    $status: String
) {createEmployee(
    firstName: $firstName
    lastName: $lastName
    user: $user
    password: $password
    dni: $dni
    address: $address
    phone: $phone
    email: $email
    status: $status
    ) {
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