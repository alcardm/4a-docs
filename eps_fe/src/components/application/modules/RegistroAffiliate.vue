<template>
  <div>
    <h1 class="form-title">Registro de afiliados</h1>
    <form class="global-form-container" v-on:submit.prevent="registerAffiliate">
      <div class="register-form">
        <div class="input-container">
          <label for="name" class="input-container__label">Nombres</label>
          <input
            type="text"
            class="input-container__input"
            name="name"
            id="name"
            required
            v-model="affiliateInput.name"
            maxlength="40"
          />
        </div>
        <div class="input-container">
          <label for="lastname" class="input-container__label">Apellidos</label>
          <input
            type="text"
            class="input-container__input"
            name="lastname"
            id="lastname"
            required
            v-model="affiliateInput.lastname"
            maxlength="40"
          />
        </div>
        <div class="input-container">
          <label for="document" class="input-container__label"
            >Tipo Documento</label
          >
          <select
            class="input-container__input"
            name="document"
            id="document"
            required
            v-model="affiliateInput.document"
          >
            <option disabled>Seleccione</option>
            <option v-for="tipo in document" :key="tipo">
              {{ tipo }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label for="document_number" class="input-container__label"
            >Número Documento</label
          >
          <input
            type="text"
            class="input-container__input"
            name="price"
            id="price"
            required
            v-model="affiliateInput.document_number"
          />
        </div>
        <div class="input-container">
          <label for="email" class="input-contailer__label">Email</label>
          <input
            type="email"
            class="input-container__input"
            name="email"
            id="email"
            required
            v-model="affiliateInput.email"
          />
        </div>
        <div class="input-container">
          <label for="phone" class="input-container__label">Celular</label>
          <input
            type="text"
            class="input-container__input"
            name="phone"
            id="phone"
            required
            v-model="affiliateInput.phone"
          />
        </div>
        <div class="input-container">
          <label for="city" class="input-container__label">Ciudad</label>
          <input
            type="text"
            class="input-container__input"
            name="city"
            id="city"
            required
            v-model="affiliateInput.city"
          />
        </div>
        <div class="input-container">
          <label for="address" class="input-container__label">Dirección</label>
          <input
            type="text"
            class="input-container__input"
            name="address"
            id="address"
            required
            v-model="affiliateInput.address"
          />
        </div>
      </div>
      <button type="submit" class="primary-btn primary-btn--margin">
        Ingresar afiliado a la eps
      </button>
    </form>
  </div>
</template>
<script>
import gql from "graphql-tag";
export default {
  name: "registroAfiliados",
  data: function () {
    return {
      affiliateInput: {
        name: "",
        lastname: "",
        document: "",
        document_number: "",
        email: "",
        phone: "",
        city: "",
        address: "",
      },
      document: ["CC","TI","RC","OT"],
    };
  },
  methods: {
    registerAffiliate: async function(){
      await this.$apollo
      .mutate({
        mutation: gql`
          mutation($affiliateInput: affiliateInput) {
            createAffiliate(affiliateInput: $affiliateInput) {
              name
              document_number
            }
          }
        `,
        variables: {
          affiliateInput: this.affiliateInput
        },
      })
      .then(res => {
        alert("Se creo el afiliado")
        console.log(res);
        this.clearData()
      })
      .catch(err => {
        alert("Hubo un error");
        console.log(err)
      })
    },
    clearData: function () {
      this.affiliate.id = "";
      this.affiliate.name = "";
      this.affiliate.lastname = "";
      this.affiliate.document = "";
      this.affiliate.document_number = "";
      this.affiliate.email = "";
      this.affiliate.phone = "";
      this.affiliate.city = "";
      this.affiliate.address = "";

    },
  },
};
</script>