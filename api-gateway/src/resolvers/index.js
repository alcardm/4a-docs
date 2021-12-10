const accountResolver = require('./affiliates_resolver');
const surveyResolver = require('./covidSurvey_resolver');
const authResolver = require('./auth_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(accountResolver, surveyResolver, authResolver);

module.exports = resolvers;