<template>
  <vs-row vs-type="flex" vs-justify="space-around">
    <vs-col vs-w="10" vs-type="flex" vs-justify="center">
      <h2>Painel do Aluno</h2>
    </vs-col>
    <vs-col vs-w="5">
      <vs-list>
        <vs-list-header
          icon="supervisor_account"
          title="Aluno"
          color="warning"
        ></vs-list-header>
        <vs-list-item
          :title="projetos.data[0].title"
          subtitle="Título"
        ></vs-list-item>
        <vs-list-item
          :title="projetos.data[0].category"
          subtitle="Categoria"
        ></vs-list-item>
        <vs-list-item
          :title="dados_usuario.name"
          subtitle="Autor"
        ></vs-list-item>
        <vs-list-item
          :title="dados_usuario.email"
          subtitle="Email"
        ></vs-list-item>
        <vs-list-item
          :title="dados_usuario.course"
          subtitle="Curso"
        ></vs-list-item>
        <vs-list-item
          :key="index"
          :title="item.name"
          subtitle="Orientador"
          v-for="(item, index) in projetos.data[0].thesis_advisors"
        ></vs-list-item>
      </vs-list>
    </vs-col>
    <vs-col vs-w="5">
      <vs-row vs-type="flex" vs-justify="center">
        <vs-col vs-w="12">
          <vs-table
            noDataText="Nenhuma submissão registrada para este trabalho."
            :data="submissoes"
            maxHeight="500px"
          >
            <template slot="header">
              <h3>Submissões</h3>
            </template>
            <template slot="thead">
              <vs-th>#</vs-th>
              <vs-th>Descrição:</vs-th>
              <vs-th>Autor:</vs-th>
              <vs-th>Status:</vs-th>
            </template>
          </vs-table>
        </vs-col>
        <vs-col vs-w="12">
          <vs-divider></vs-divider>
        </vs-col>
        <vs-col vs-w="4" vs-offset="8">
          <vs-button
            type="gradient"
            color="dark"
            class="btn-fullwidth"
            @click="popupRegistrarSubmissoes"
            >Nova Submissão</vs-button
          >
        </vs-col>
      </vs-row>
    </vs-col>
  </vs-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      dados_usuario: {},
    };
  },
  watch: {},
  mounted() {
    this.dados_usuario = JSON.parse(sessionStorage.getItem("user_logged"));
    this.get_Projetos(JSON.parse(sessionStorage.getItem("user_logged")).id);
  },
  computed: {
    ...mapState("Painel", ["projetos", "submissoes"]),
  },
  methods: {
    ...mapActions("Painel", ["get_Projetos", "get_Submissoes", "popupRegistrarSubmissoes"]),
  },
};
</script>

<style scoped>
</style>