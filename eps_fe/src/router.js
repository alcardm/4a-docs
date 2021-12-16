// import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import gql from "graphql-tag";
import { createRouter, createWebHistory } from "vue-router";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignUp.vue";
import HomePage from "./components/HomePage.vue";
import MainLayout from "./components/application/MainLayout.vue";
import RegistroAffiliate from "./components/application/modules/RegistroAffiliate.vue";
import ConsultaAffiliate from "./components/application/modules/ConsultaAffiliate.vue";
import RegistroSurvey from "./components/application/modules/RegistroSurvey.vue";
import ConsultaSurvey from "./components/application/modules/ConsultaSurvey.vue";
import Profile from "./components/application/modules/Profile.vue";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: HomePage,
    meta: { requiresAuth: false },
  },
  {
    path: "/user/login",
    name: "logIn",
    component: LogIn,
    meta: { requiresAuth: false },
  },
  {
    path: "/user/signup",
    name: "signUp",
    component: SignUp,
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    name: "mainLayout",
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "registro-affiliates",
        component: RegistroAffiliate,
        meta: { requiresAuth: true },
      },
      {
        path: "consulta-affiliates",
        component: ConsultaAffiliate,
        meta: { requiresAuth: true },
      },
      {
        path: "registro-surveys",
        component: RegistroSurvey,
        meta: { requiresAuth: true },
      },
      {
        path: "consulta-surveys",
        component: ConsultaSurvey,
        meta: { requiresAuth: true },
      },
      {
        path: "user/profile",
        component: Profile,
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const apolloClient = new ApolloClient({
  link: createHttpLink({ uri: "https://eps-api-gateway.herokuapp.com/" }),
  cache: new InMemoryCache(),
});

async function isAuth() {
  if (
    localStorage.getItem("token_access") === null ||
    localStorage.getItem("token_refresh") === null
  ) {
    return false;
  }
  try {
    var result = await apolloClient.mutate({
      mutation: gql`
        mutation ($refresh: String!) {
          refreshToken(refresh: $refresh) {
            access
          }
        }
      `,
      variables: {
        refresh: localStorage.getItem("token_refresh"),
      },
    });
    localStorage.setItem("token_access", result.data.refreshToken.access);
    return true;
  } catch {
    localStorage.clear();
    alert("Su sesión expiró, por favor vuelva a iniciar sesión");
    return false;
  }
}

router.beforeEach(async (to, from) => {
  var is_auth = await isAuth();
  if (is_auth == to.meta.requiresAuth) return true;
  if (is_auth) return { name: "mainLayout" };
  return { name: "logIn" };
});

export default router;
