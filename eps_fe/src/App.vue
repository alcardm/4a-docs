<template>
  <router-view
    v-on:logInSuccess="logInSuccess"
    v-on:completedSignUp="completedSignUp"
  >
  </router-view>
</template>

<script>
export default {
  name: "App",

  computed: {
    is_auth: {
      get: function () {
        return this.$route.meta.requiresAuth;
      },
      set: function () {},
    },
  },

  methods: {
    logInSuccess: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.$router.push({ name: "mainLayout" });
    },
    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.logInSuccess(data);
    },
  },
};
</script>
