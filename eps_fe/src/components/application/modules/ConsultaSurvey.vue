<template>
  <div>
    <h1 class="form-title">Encuestas</h1>
    <form action="" class="search-form">
      <div class="flex">
        <div class="input-container input-container--search">
          <label for="search" class="input-container__label">Buscar</label>
          <input
            type="text"
            class="input-container__input"
            name="search"
            id="search"
            required
            v-model="filterSurveysInput"
          />
          <small>Buscar por documento</small>
        </div>
        <button v-on:click="filterSurveys" class="primary-btn primary-btn--search">Filtrar</button>
      </div>
    </form>
  </div>
  <br />
  <div>
    <table class="scroll-table">
      <table class="table">
        <thead>
          <tr class="table__header">
            <th class="table__header-item">Id</th>
            <th class="table__header-item">N° Doc</th>
            <th class="table__header-item">Pregunta N° 1</th>
            <th class="table__header-item">Pregunta N° 2</th>
            <th class="table__header-item">Pregunta N° 3</th>
            <th class="table__header-item">Pregunta N° 4</th>
            <th class="table__header-item">Pregunta N° 5</th>
            <th class="table__header-item"></th>
          </tr>
        </thead>
        <tbody class="table__body">
          <tr v-for="(survey, index) in getAllSurveys" :key="index">
            <td class="table__body-item">{{ survey.id }}</td>
            <td class="table__body-item">{{ survey.document }}</td>
            <td class="table__body-item">
              {{ survey.question_one ? "sí" : "no" }}
            </td>
            <td class="table__body-item">
              {{ survey.question_two ? "sí" : "no" }}
            </td>
            <td class="table__body-item">
              {{ survey.question_three ? "sí" : "no" }}
            </td>
            <td class="table__body-item">
              {{ survey.question_four ? "sí" : "no" }}
            </td>
            <td class="table__body-item">
              {{ survey.question_five ? "sí" : "no" }}
            </td>
            <td class="table__body-item">
              <button class="edit-btn" @click="openEditModal(index)">
                <ges-icon icon="edit" size="lg"></ges-icon>
              </button>
              <button
                type="button"
                class="close-btn"
                @click="openConfirmationModal(index)"
              >
                <ges-icon size="lg" icon="trash-alt"></ges-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </table>
    <ModalEditProduct
      v-show="isModalVisible"
      @close="closeModal"
      v-bind="editSurveys"
    >
    </ModalEditProduct>
    <ConfirmationModal
      v-show="isConfirmationModalVisible"
      @close="closeConfirmationModal"
      @delete-item="deleteSurvey"
      :idItem="deleteSurveysId"
    ></ConfirmationModal>
  </div>
</template>
<script>
import gql from "graphql-tag";
import ModalEditSurvey from "../modals/ModalEditSurvey.vue";
import ConfirmationModal from "../modals/ConfirmationModal.vue";
export default {
  name: "consultaEncuestas",
  components: {
    ModalEditSurvey,
    ConfirmationModal,
  },
  data: function () {
    return {
      survey: {
        id: "",
        document: "",
        question_one: "",
        question_two: "",
        question_three: "",
        question_four: "",
        question_five: "",
      },
      editSurveys: {},
      isModalVisible: false,
      filterSurveysInput: "",
      isConfirmationModalVisible: false,
      deleteSurveysId: {},
    };
  },
  apollo: {
    getAllSurveys: {
      query: gql`
        query getAllSurveys {
          getAllSurveys {
            id
            document
            question_one
            question_two
            question_three
            question_four
            question_five
          }
        }
      `,
    },
    surveysByDocument: {
      query: gql`
        query surveysByDocument($documentNumber: Int!) {
          surveysByDocument(document: $document) {
            id
            document
            question_one
            question_two
            question_three
            question_four
            question_five
          }
        }
      `,
    },
  },
  methods: {
    openEditModal(surveyId) {
      this.isModalVisible = true;
      this.editSurveys = this.getAllSurveys[surveyId];
    },
    closeModal() {
      this.isModalVisible = false;
      this.getAllSurveys();
    },
    closeConfirmationModal() {
      this.isConfirmationModalVisible = false;
    },
    openConfirmationModal(surveyId) {
      this.isConfirmationModalVisible = true;
      this.deleteSurveysId = surveyId;
    },

    deleteSurvey(deleteSurveysId) {
      // let userToken = localStorage.getItem("token_access");
      // let userId = jwt_decode(userToken).user_id.toString();
      let surveyId = this.getAllSurveys[deleteSurveysId].id;
      this.$apollo.mutate({
        mutation: gql`
          mutation DeleteSurveyById($deleteSurveyByIdId: ID!) {
            deleteSurveyById(id: $deleteSurveyByIdId)
          }
        `,
        variables: {
          deleteSurveyByIdId: surveyId,
        },
      });
    },
  },

  filterSurveysInput(surveysByDocument) {
    let surveyDocument = this.getAllSurveys[surveysByDocument].document;
    this.$apollo.mutate({
      mutation: gql`
        query SurveysByDocument($document: Int!) {
          surveysByDocument(document: $document) {
            id
            document
            question_one
            question_two
            question_three
            question_four
            question_five
          }
        }
      `,
      variables() {
        return {
          surveysByDocument: surveyDocument,
        };
      },
    });
  },
    created: function () {
    this.$apollo.queries.surveysByDocument.refetch();
  },
};
</script>