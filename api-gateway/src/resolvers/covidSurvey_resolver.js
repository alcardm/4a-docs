const covidSurveyResolver = {
  Query: {
    surveysByDocument: async (
      _,
      { username,document },
      { dataSources, userIdToken }
    ) => {
      usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
      if (username == usernameToken)
        return dataSources.accountAPI.surveysByDocument(document);
      else return null;
    },
  },
  Mutation: {
    createSurvey: async (
      _,
      { survey },
      { dataSources, userIdToken }
    ) => {
      usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
      if (transaction.usernameOrigin == usernameToken)
        return dataSources.accountAPI.createTransaction(survey);
      else return null;
    },
  },
};

module.exports = covidSurveyResolver;
