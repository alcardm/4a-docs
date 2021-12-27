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
            v-model="search"
            v-on:keyup.enter="filteredSurvey"
          />
          <small>Buscar por documento</small>
        </div>
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
            <th class="table__header-item">Acciones</th>
          </tr>
        </thead>
        <tbody class="table__body">
          <tr v-for="(survey, index) in filteredSurvey" :key="index">
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
                @click="openConfirmationModal(survey.id)"
              >
                <ges-icon size="lg" icon="trash-alt"></ges-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </table>
    <ModalEditSurvey
      v-show="isModalVisible"
      @close="closeModal"
      v-bind="editSurveys"
    >
    </ModalEditSurvey>
    <ConfirmationModal
      v-show="isConfirmationModalVisible"
      @close="closeConfirmationModal"
      @delete-item="deleteSurvey"
      :idItem="deleteSurveyId"
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
      search: "",
      isConfirmationModalVisible: false,
      deleteSurveyId: {},
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
  },

  methods: {
    openEditModal(deleteSurveyByIdId) {
      this.isModalVisible = true;
      this.editSurveys = this.getAllSurveys[deleteSurveyByIdId];
    },
    closeModal() {
      this.isModalVisible = false;
    },
    closeConfirmationModal() {
      this.isConfirmationModalVisible = false;
    },
    openConfirmationModal(deleteSurveyByIdId) {
      this.isConfirmationModalVisible = true;
      this.deleteSurveyId = deleteSurveyByIdId;
    },

    deleteSurvey: async function () {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($deleteSurveyByIdId: ID!) {
              deleteSurveyById(id: $deleteSurveyByIdId)
            }
          `,
          variables: {
            deleteSurveyByIdId: this.deleteSurveyId,
          },
        })
        .then((res) => {
          alert("Se eliminó encuesta");
          this.$apollo.queries.getAllSurveys.refetch();
          console.log(res);
        })
        .catch((err) => {
          alert("Hubo un error");
          console.log(err);
        });
    },
  },

  computed: {
    filteredSurvey() {
      if (this.search) {
        return this.getAllSurveys.filter(item => {
          return this.filteredSurvey

        });
      } else {
      alert("Búsqueda sin resultados")
        return this.getAllSurveys;
      }
    }
  }


};
</script>