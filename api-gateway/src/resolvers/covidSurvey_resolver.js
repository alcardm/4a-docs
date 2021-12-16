const covidSurveyResolver = {
  Query: {
    surveysByDocument: async(_, { document }, { dataSources }) => {
      return await dataSources.surveysAPI.getSurveysByDocument(document)
    },
    getAllSurveys: async(_, { document }, { dataSources }) => {
      return await dataSources.surveysAPI.getAllSurveys()
    },
},
  Mutation: {
    createSurvey: async (_, { surveyInput }, { dataSources }) => {
      const surveyData = {
        document: surveyInput.document,
        question_one: surveyInput.question_one,
        question_two: surveyInput.question_two,
        question_three: surveyInput.question_three,
        question_four: surveyInput.question_four,
        question_five: surveyInput.question_five,
      };
      return await dataSources.surveysAPI.createSurvey(surveyData);
    },
    deleteSurveyById: async (_, { id }, { dataSources }) => {
      return await dataSources.surveysAPI.deleteSurveyById(id);
    },
  }
};

module.exports = covidSurveyResolver;
