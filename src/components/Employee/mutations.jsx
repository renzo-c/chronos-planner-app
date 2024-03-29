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
        id
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

export const UPDATE_EMPLOYEE = gql`
mutation updateEmployee(
    $firstName: String
    $lastName: String
    $user: String!
    $password: String
    $dni: String
    $address: String
    $phone: String
    $email: String
    $status: String
) {updateEmployee(
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
        id
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

export const DELETE_EMPLOYEE = gql`
mutation deleteEmployee(
    $user: String!
) {deleteEmployee(
    user: $user
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
