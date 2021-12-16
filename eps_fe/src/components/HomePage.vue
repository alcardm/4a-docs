<template>
  <div>
    <div class="bg-img"></div>
    <div class="container">
      <nav class="nav">
        <img src="../assets/img/g-icon.png" alt="Gestify" class="gestify-icon" />
      </nav>
      <div class="content">
        <section class="welcome">
          <article class="welcome-text">
            <h1 class="welcome-text__title">EPS</h1>
            <p class="welcome-text__description">
              Crea tus encuestas de covid-19 y consultalas con facilidad
            </p>
            <button
              class="primary-btn custom-home-btn"
              v-on:click="sendToLogIn"
            >
              <ges-icon icon="sign-in-alt" size="lg" />
              Iniciar sesión
            </button>
            <button
              class="primary-btn custom-home-btn"
              v-on:click="sendToSignUp"
            >
              Registrarme
            </button>
          </article>
          <img
            class="welcome-img"
            src="../assets/img/img-home.png"
            alt="user-inventory"
          />
        </section>
      </div>
    </div>
    <div class="footer-container">
      <footer class="footer">
        <div class="footer-content">
          <p>Todos los derechos reservados</p>
          <p>EPS | 2021</p>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "homePage",
  methods: {
    sendToLogIn: function () {
      this.$router.push({ name: "logIn" });
    },
    sendToSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
  },
};
</script>