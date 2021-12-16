<template>
  <div>
    <h1 class="form-title">Registro Encuestas</h1>
    <form class="global-form-container" v-on:submit.prevent="registerSurvey">
      <div class="register-form">
        <div class="input-container">
          <label for="document" class="input-container__label">Documento</label>
          <input
            type="number"
            class="input-container__input"
            name="document"
            id="document"
            required
            v-model="survey.document"
          />
        </div>
        <div class="input-container">
          <label for="question_one" class="input-contailer__label"
            >¿Ha sufrido de covid-19?</label
          >
          <select
            class="input-container__input"
            name="question_one"
            id="question_one"
            required
            v-model="survey.question_one"
          >
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="input-container">
          <label for="question_two" class="input-contailer__label"
            >¿Ha estado en contacto con personas que han sufrido de
            covid-19?</label
          >
          <select
            class="input-container__input"
            name="question_two"
            id="question_two"
            required
            v-model="survey.question_two"
          >
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="input-container">
          <label for="question_three" class="input-contailer__label"
            >¿Ha tenido temperatura mayor a 37° grados?</label
          >
          <select
            class="input-container__input"
            name="question_three"
            id="question_three"
            required
            v-model="survey.question_three"
          >
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="input-container">
          <label for="question_four" class="input-contailer__label"
            >¿Ha tenido dificultad para respirar durante la última
            semana?</label
          >
          <select
            class="input-container__input"
            name="question_four"
            id="question_four"
            required
            v-model="survey.question_four"
          >
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="input-container">
          <label for="question_five" class="input-contailer__label"
            >¿Se ha sentido más cansado que de costumbre durante la última
            semana?</label
          >
          <select
            class="input-container__input"
            name="question_five"
            id="question_five"
            required
            v-model="survey.question_five"
          >
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
      <button class="primary-btn primary-btn--margin" type="submit">
        Registrar encuesta
      </button>
    </form>
  </div>
</template>
<script>
import gql from "graphql-tag";
export default {
  name: "registroEncuestas",
  data: function () {
    return {
      survey: {
        document: "",
        question_one: "",
        question_two: "",
        question_three: "",
        question_four: "",
        question_five: "",
      },
    };
  },
  methods: {
    registerSurvey: async function(){
      this.survey.question_one = this.survey.question_one === "true";
      this.survey.question_two = this.survey.question_two === "true";
      this.survey.question_three = this.survey.question_three === "true";
      this.survey.question_four = this.survey.question_four === "true";
      this.survey.question_five = this.survey.question_five === "true";
      await this.$apollo
      .mutate({
        mutation: gql`
          mutation($survey: SurveyInput!) {
            createSurvey(survey: $survey) {
              id
              document
            }
          }
        `,
        variables: {
          survey: this.survey
        },
      })
      .then(res => {
        alert(`Se subio la encuesta con id ${res.data.createSurvey.id} para el afiliado con documento ${res.data.createSurvey.document}`)
      })
      .catch(err => {
        alert("Hubo un error");
        console.log(err)
      })
    },
    clearData: function () {
      this.survey.id = "";
      this.survey.document = "";
      this.survey.question_one = "";
      this.survey.question_two = "";
      this.survey.question_three = "";
      this.survey.question_four = "";
      this.survey.question_five = "";
    },
  },
};
</script>