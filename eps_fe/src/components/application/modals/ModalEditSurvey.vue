<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal-container modal-container--provider"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> Detalle encuesta No. {{ document }} </slot>
          <button
            type="button"
            class="close-btn"
            @click="close"
            aria-label="Close modal"
          >
            <ges-icon icon="times-circle" size="lg"></ges-icon>
          </button>
        </header>
        <form class="modal-form-container" v-on:submit.prevent="updateSurvey">
          <div class="register-form edit-form">
            <div class="input-container">
              <label for="id" class="input-container__label">ID</label>
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
              <label for="document" class="input-container__label"
                >Documento</label
              >
              <input
                type="number"
                class="input-container__input"
                name="document"
                id="document"
                required
                v-model="document"
                disabled
              />
            </div>
            <div class="input-container">
              <label for="question_one" class="input-contailer__label"
                >¿Ha sufrido de covid-19?</label
              >
              <input
                type="text"
                class="input-container__input"
                name="question_one"
                id="question_one"
                required
                v-model="question_one"
                disabled
              />
            </div>
            <div class="input-container">
              <label for="question_two" class="input-contailer__label"
                >¿Ha estado en contacto con personas que han sufrido de
                covid-19?</label
              >
              <input
                type="text"
                class="input-container__input"
                name="question_two"
                id="question_two"
                required
                v-model="question_two"
                disabled
              />
            </div>
            <div class="input-container">
              <label for="question_three" class="input-contailer__label"
                >¿Ha tenido temperatura mayor a 37° grados?</label
              >
              <input
                type="text"
                class="input-container__input"
                name="question_three"
                id="question_three"
                required
                v-model="question_three"
                disabled
              />
            </div>
            <div class="input-container">
              <label for="question_four" class="input-contailer__label"
                >¿Ha tenido dificultad para respirar durante la última
                semana?</label
              >
              <input
                type="text"
                class="input-container__input"
                name="question_four"
                id="question_four"
                required
                v-model="question_four"
                disabled
              />
            </div>
            <div class="input-container">
              <label for="question_five" class="input-contailer__label"
                >¿Se ha sentido más cansado que de costumbre durante la última
                semana?</label
              >
              <input
                type="text"
                class="input-container__input"
                name="question_five"
                id="question_five"
                required
                v-model="question_five"
                disabled
              />
            </div>
          </div>
          <div class="buttons-container">
            <!-- <button class="primary-btn primary-btn--margin" type="submit">
              Actualizar encuesta
            </button> -->
            <button class="cancel-btn" v-on:click="close" type="button">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
  name: "ModalEditSurvey",
  data: function () {
    return {
      surveyUpdated: {
        id: "",
        document: "",
        question_one: "",
        question_two: "",
        question_three: "",
        question_four: "",
        question_five: "",
      },
    };
  },
  props: {
    id: "",
    document: "",
    question_one: "",
    question_two: "",
    question_three: "",
    question_four: "",
    question_five: "",
  },
  methods: {
    updateSurvey: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`

          `,
          variables: {
            encuesta: this.surveyUpdated,
          },
        })
        .then((result) => {
          console.log(result);
          alert("Encuesta editada con éxito");
          this.$emit("close");
        })
        .catch((error) => {
          console.log(error);
          alert("Falló edición de encuesta");
        });
    },

    close() {
      this.$emit("close");
    },


    setDataSurvey: function () {
      this.surveyUpdated.id = this.id;
      this.surveyUpdated.document = this.document;
      this.surveyUpdated.question_one = this.question_one;
      this.surveyUpdated.question_two = this.question_two;
      this.surveyUpdated.question_three = this.question_three;
      this.surveyUpdated.question_four = this.question_four;
      this.surveyUpdated.question_five = this.question_five;
    },

  },
};
</script>