<template>
  <div>
    <h1>Bienvenido a tu perfil,</h1>
    <div class="profile-information-container">
      <div>
        <h2>Información personal</h2>
        <p class="profile-information__title">Nombre</p>
        <p class="profile-information__data">{{ userDetailById.name }}</p>
      </div>
      <div>
        <h2>Información de contacto</h2>
        <p class="profile-information__title">Email</p>
        <p class="profile-information__data">{{ userDetailById.email }}</p>
      </div>
      <div>
        <h2>Información de Acceso al portal</h2>
        <p class="profile-information__title">Nombre de usuario</p>
        <p class="profile-information__data">{{ userDetailById.username }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";
export default {
  name: "Profile",
  data: function () {
    return {
      userId: jwt_decode(localStorage.getItem("token_refresh")).user_id,
      userDetailById: {
        username: "",
        name: "",
        email: "",
      },
    };
  },
  apollo: {
    userDetailById: {
      query: gql`
        query ($userId: Int!) {
          userDetailById(userId: $userId) {
            username
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
};
</script>
