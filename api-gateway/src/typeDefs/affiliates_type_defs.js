const { gql } = require("apollo-server");

const affiliatesTypeDefs = gql`
  type Affiliates {
    id: Int!
    name: String!
    lastname: String!
    document: String!
    document_number: String!
    email: String!   
    phone: String!
    city: String!
    address: String!
    created: String!
    updated: String!
  }
  input affiliateIUInput {
    id: Int!
    name: String!
    lastname: String!
    document: String!
    document_number: String!
    email: String!   
    phone: String!
    city: String!
    address: String!
  }
  input affiliateInput {
    name: String!
    lastname: String!
    document: String!
    document_number: String!
    email: String!   
    phone: String!
    city: String!
    address: String!
  }
  type Mutation {
    createAffiliate(affiliateInput: affiliateInput): Affiliates!
    deleteAffiliate(affiliateID: ID!): String!
  }
  extend type Query {
    allAffiliates: [Affiliates]
    affiliatesByDocument_number(document_number: String!): Affiliates
  }
  
`;

module.exports = affiliatesTypeDefs;

//revisar