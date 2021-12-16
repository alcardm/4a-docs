const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");
class AffiliatesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.affiliates_api_url;
  }
  async createAffiliate(affiliate) {
    affiliate = new Object(JSON.parse(JSON.stringify(affiliate)));
    return await this.post("/affiliates/", affiliate);
  }
  async deleteAffiliate(affiliateID){
    return await this.get(`/affiliates-delete/${affiliateID}/`);
  }
  async allAffiliates() {
    return await this.get(`/affiliates-list/`);
  }
  async affiliatesByDocument_number(document_number) {
    return await this.get(`/affiliates/${document_number}`);
  }
}

module.exports = AffiliatesAPI;

//revisar cuando se tenga el microservicio de encuentas covid
//si necesita alguna modificación
//Según leí, esta bien todo por esta parte, veo al parecer que las transacciones se hacen desde aquí