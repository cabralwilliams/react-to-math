//Import gql
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        first_name: String
		last_name: String
		email: String
		password: String
        reset_code: Int
        code_expiration: String
        overall_statistics: [StatsSchema]
        recent_statistics: [StatsSchema]
        accessGranted: Boolean
        isAdministrator: Boolean
        savedSets: [String]
    }

    type StatsSchema {
        category_name: String
        category_count: Int
        category_correct: Int
        update_date: String
    }

    type Administrator {
        _id: ID
        username: String
        first_name: String
		last_name: String
		email: String
		password: String
        reset_code: Int
        code_expiration: String
        assignedUsers: [User]
        isAdministrator: Boolean
        isSuperAdmin: Boolean
    }

    type SuperAdmin {
        _id: ID
        username: String
        first_name: String
		last_name: String
		email: String
		password: String
        reset_code: Int
        code_expiration: String
        isAdministrator: Boolean
        isSuperAdmin: Boolean
    }

    type Auth1 {
        token: ID
        user: User
    }

    type Auth2 {
        token: ID
        user: Administrator
    }

    type Auth3 {
        token: ID
        user: SuperAdmin
    }

    input StatsOb {
        category_name: String
        category_count: Int
        category_correct: Int
    }

    type Query {
        getUsers: [User]
        meUser: User
        meAdministrator: Administrator
        getAdministrators: [Administrator]
        queryUser(_id: ID!): User
    }

    type Mutation {
        addUser(first_name: String!, last_name: String!, email: String!, password: String!, username: String!): Auth1
        addAdministrator(first_name: String!, last_name: String!, email: String!, password: String!, username: String!): Administrator
        loginUser(username: String!, password: String!): Auth1
        loginAdministrator(username: String!, password: String!): Auth2
        updateUserPassword(username: String!, password: String!, reset_code: Int!): User
        updateAdministratorPassword(username: String!, password: String!, reset_code: Int!): Administrator
        updateSuperAdminPassword(username: String!, password: String!, reset_code: Int!): SuperAdmin
        addSuperAdmin(first_name: String!, last_name: String!, email: String!, password: String!, , username: String!): Auth3
        loginSuperAdmin(username: String!, password: String!): Auth3
        updateUserStatistics(input: [StatsOb]!, resultOb: String!): User
    }
`;

module.exports = typeDefs;