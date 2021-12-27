<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal-container"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            Detalle Afiliado No. {{ document_number }}
          </slot>
          <button
            type="button"
            class="close-btn"
            @click="close"
            aria-label="Close modal"
          >
            <ges-icon icon="times-circle" size="lg"></ges-icon>
          </button>
        </header>
        <form
          class="modal-form-container"
          v-on:submit.prevent="affiliateUpdated"
        >
          <div class="register-form">
            <div class="input-container">
              <label for="id" class="input-container__label">Código</label>
              <input
                type="text"
                class="input-container__input"
                name="id"
                id="id"
                required
                v-model="id"
                disabled
              />
            </div>
            <div class="input-container">
              <label for="name" class="input-container__label">Nombres</label>
              <input
                type="text"
                class="input-container__input"
                name="name"
                id="name"
                required
                v-model="name"
                maxlength="40"
                disabled
              />
            </div>
            <div class="input-container">
              <label for="lastname" class="input-container__label"
                >Apellidos</label
              >
              <input
                type="text"
                class="input-container__input"
                name="lastname"
                id="lastname"
                required
                v-model="lastname"
                maxlength="40"
                disabled
              />
            </div>
            <div class="input-container">
              <label for="document" class="input-container__label"
                >Tipo Documento</label
              >
              <input
                type="text"
                class="input-container__input"
                name="document"
                id="document"
                required
                v-model="document"
                maxlength="40"
                disabled
              />
            </div>

            <div class="input-container">
              <label for="document_number" class="input-container__label"
                >Número Document</label
              >
              <input
                type="number"
                class="input-container__input"
                name="document_number"
                id="document_number"
                required
                v-model="document_number"
                disabled
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
                v-model="email"
                disabled
              />
            </div>
            <div class="input-container">
              <label for="phone" class="input-container__label">Celular</label>
              <input
                type="number"
                class="input-container__input"
                name="phone"
                id="phone"
                required
                v-model="phone"
                disabled
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
                v-model="city"
                disabled
              />
            </div>
            <div class="input-container">
              <label for="address" class="input-container__label"
                >Dirección</label
              >
              <input
                type="text"
                class="input-container__input"
                name="address"
                id="address"
                required
                v-model="address"
                disabled
              />
            </div>
          </div>
          <!-- <button type="submit" class="primary-btn primary-btn--margin">
            Actualizar afiliado
          </button> -->
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button
            class="cancel-btn"
            @click="close"
            type="button"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
  name: "ModalEditAffiliate",

  data: function () {
    return {
      affiliateUpdated: {
        id: "",
        name: "",
        lastname: "",
        document: "",
        document_number: "",
        email: "",
        phone: "",
        city: "",
        address: "",
      },
      document: ["CC", "TI", "RC", "OT"],
    };
  },
  props: {
    id: "",
    name: "",
    lastname: "",
    document: "",
    document_number: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  },

  methods: {
    close() {
      this.$emit("close");
    },
    setDataAffiliate: function () {
      this.affiliateUpdated.id = this.id;
      this.affiliateUpdated.name = this.name;
      this.affiliateUpdated.lastname = this.lastname;
      this.affiliateUpdated.document = this.document;
      this.affiliateUpdated.document_number = this.document_number;
      this.affiliateUpdated.email = this.email;
      this.affiliateUpdated.phone = this.phone;
      this.affiliateUpdated.city = this.city;
      this.affiliateUpdated.address = this.address;
    },
    updateAffiliate: async function () {
      this.setDataAffiliate();
      await this.$apollo
        .mutate({
          mutation: gql``,
          variables: {
            afiliado: this.affiliateUpdated,
          },
        })
        .then((result) => {
          console.log(result);
          alert("Afiliado actualizado con éxito");
          this.$emit("close");
        })
        .catch((error) => {
          console.log(error);
          alert("Falló actualización de afiliado");
        });
    },
  },
};
</script>