const { gql } = require("apollo-server");

const affiliatesTypeDefs = gql`
  type Affiliates {
    id: Int!
    name: String!
    lastname: String!
    document: String!
    email: String!   
    phone: String!
    city: String!
    address: String!
    created: String!
    updated: String!
  }
  extend type Query {
    affiliatesByDocument(document: String!): Affiliates
  }
`;

module.exports = affiliatesTypeDefs;

//revisar