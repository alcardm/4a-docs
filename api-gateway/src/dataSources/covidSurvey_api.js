const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");
class SurveyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.covidSurvey_api_url;
  }
  async createSurvey(survey) {
    survey = new Object(JSON.parse(JSON.stringify(survey)));
    return await this.post(`/surveys`, survey);
  }
  async deleteSurveyById(id) {
    return await this.delete(`/surveys/${id}`);
  }
  async getSurveysByDocument(document) {
    return await this.get(`/surveys/${document}`);
  }
  async getAllSurveys() {
    return await this.get(`/surveys`);
  }
}

module.exports = SurveyAPI;