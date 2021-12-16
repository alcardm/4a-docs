import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { ApolloClient , createHttpLink , InMemoryCache } from "@apollo/client/core";

import { createApolloProvider } from "@vue/apollo-option";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: "https://eps-api-gateway.herokuapp.com/",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: localStorage.getItem("token_access") || "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const apolloProvider = new createApolloProvider({
  defaultClient: apolloClient,
});

// Aquí se importa la hoja de estilos global del proyecto
import "@/assets/css/main.css";

createApp(App)
  .component("ges-icon", FontAwesomeIcon)
  .use(router)
  .use(apolloProvider)
  .mount("#app");
