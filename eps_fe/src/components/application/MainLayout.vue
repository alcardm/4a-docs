<template v-if="is_auth">
  <div class="main-layout">
    <nav class="sidenav">
      <div class="sidenav-content">
        <div>
          <h1>EPS</h1>
          <details
            v-for="option in options"
            :key="option"
            class="sidenav-options"
          >
            <summary class="sidenav-options__summary">
              <ges-icon icon="chevron-right"></ges-icon>
              <span> {{ option.title }}</span>
            </summary>
            <ul class="sidenav-list">
              <li
                v-for="subitem in option.children"
                :key="subitem"
                class="sidenav-list__subitem"
              >
                <router-link :to="subitem.url" class="sidenav-list__link">
                  {{ subitem.name }}
                </router-link>
              </li>
            </ul>
          </details>
        </div>
        <div class="sidenav-bottom-info">
          <!-- <p class="bottom-info__name">{{ userDetailById.name }}</p> -->
          <div class="bottom-actions-container">
            <router-link to="user/profile" class="bottom-info__profile"
              >Ver mi perfil</router-link
            >
            <a class="bottom-info__action" v-on:click="logOut">
              <ges-icon icon="sign-out-alt"></ges-icon> Cerrar sesión</a
            >
          </div>
        </div>
      </div>
    </nav>
    <div class="main-content">
      <div class="main-component">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>
<script>
import jwt_decode from "jwt-decode";
import gql from "graphql-tag";
export default {
  name: "mainLayout",

  data: () => {
    return {
      options: [
        {
          title: "Afiliados",
          children: [
            {
              name: "Registro de afiliados",
              url: "/dashboard/registro-affiliates",
            },
            {
              name: "Consultar afiliados",
              url: "/dashboard/consulta-affiliates",
            },
          ],
        },
        {
          title: "Encuestas",
          children: [
            {
              name: "Ingreso de encuestas",
              url: "/dashboard/registro-surveys",
            },
            {
              name: "Listado de encuestas",
              url: "/dashboard/consulta-surveys",
            },
          ],
        }
      ],
      username: localStorage.getItem("username") || "none",
      name: "",
      email: "",
      username: "",
      is_auth: Boolean,
    };
  },

  apollo: {
    userDetailById: {
      query: gql`
        query Query($userId: Int!) {
          userDetailById(userId: $userId) {
            id
            username
            password
            name
            email
          }
        }
      `,
      variables() {
        return {
          userId: this.userId,
        };
      },
    },
  },

  methods: {
    logOut: function () {
      localStorage.clear();
      this.$router.push({ name: "homePage" });
    },
  },
};
</script>
