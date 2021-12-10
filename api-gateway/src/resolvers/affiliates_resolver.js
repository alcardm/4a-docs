const affiliateResolver = {
    Query: {
    affiliatesByDocument: async(_, { document }, { dataSources, userIdToken }) => {
    documentToken = (await dataSources.authAPI.getUser(userIdToken)).document
    if (username == usernameToken)
        return await dataSources.accountAPI.affiliatesByDocument(document)
    else
        return null
    },
    },
    Mutation: {}
};
module.exports = affiliateResolver;

//Necesita revision