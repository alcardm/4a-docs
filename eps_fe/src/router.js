import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
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
  },
  {
    path: "/user/login",
    name: "logIn",
    component: LogIn,
  },
  {
    path: "/user/signup",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/dashboard",
    name: "mainLayout",
    component: MainLayout,
    children: [
      {
        path: "registro-affiliates",
        component: RegistroAffiliate,
      },
      {
        path: "consulta-affiliates",
        component: ConsultaAffiliate,
      },
      {
        path: "registro-surveys",
        component: RegistroSurvey,
      },
      {
        path: "consultar-surveys",
        component: ConsultaSurvey,
      },
      {
        path: "/user/profile",
        component: Profile,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
