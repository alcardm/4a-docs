const { gql } = require("apollo-server");

const surveyTypeDefs = gql`
  type Survey {
    id: String!
    document: Int!
    question_one: Boolean!,
    question_two: Boolean!,
    question_three: Boolean!,
    question_four: Boolean!,
    question_five: Boolean!
  }
  input SurveyInput {
    document: Int!,
    question_one: Boolean!,
    question_two: Boolean!,
    question_three: Boolean!,
    question_four: Boolean!,
    question_five: Boolean!
  }
  extend type Query {
    surveysByDocument(document: Int!): [Survey]
  }
  extend type Mutation {
    createSurvey(survey: SurveyInput!): Survey
  }
`;

module.exports = surveyTypeDefs;

//Necesita modificacion
// Listop :D