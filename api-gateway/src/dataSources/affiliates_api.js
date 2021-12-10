const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");
class AffiliatesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.affiliates_api_url;
  }
  async createAffiliate(affiliate) {
    affiliate = new Object(JSON.parse(JSON.stringify(affiliate)));
    return await this.post("/affiliates", affiliate);
  }
  async affiliatesByDocument_number(document_number) {
    return await this.get(`/affiliates/${document_number}`);
  }
  async createSurvey(covidSurvey) {
    covidSurvey = new Object(JSON.parse(JSON.stringify(covidSurvey)));
    return await this.post("/surveys", covidSurvey);
  }
  async surveysByDocument(document) {
    return await this.get(`/surveys/${document}`);
  }
}

module.exports = AffiliatesAPI;

//revisar cuando se tenga el microservicio de encuentas covid
//si necesita alguna modificación
//Según leí, esta bien todo por esta parte, veo al parecer que las transacciones se hacen desde aquí