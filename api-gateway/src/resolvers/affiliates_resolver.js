const affiliateResolver = {
    Query: {
        affiliatesByDocument_number: async(_, {document_number }, { dataSources, userIdToken }) => {
            return await dataSources.affiliatesAPI.affiliatesByDocument_number(document_number)
        },
        allAffiliates: async(_,{affiliateData},{dataSources}) => {
            return await dataSources.affiliatesAPI.allAffiliates()
        },
    },
    Mutation: {
        createAffiliate: async (_, { affiliateInput }, { dataSources }) => {
          const affiliateData = {
            name: affiliateInput.name,
            lastname: affiliateInput.lastname,
            document: affiliateInput.document,
            document_number: affiliateInput.document_number,
            email: affiliateInput.email,
            phone: affiliateInput.phone,
            city: affiliateInput.city,
            address: affiliateInput.address,
          };
          return await dataSources.affiliatesAPI.createAffiliate(affiliateData);
        },
        deleteAffiliate: async(_, { affiliateID }, { dataSources }) =>{
            return await dataSources.affiliatesAPI.deleteAffiliate(affiliateID);
        }
    }
};
module.exports = affiliateResolver;

//Necesita revision