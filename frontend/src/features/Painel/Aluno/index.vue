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
        <vs-table
        
        >

        </vs-table>
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
    ...mapState("Painel", ["projetos"]),
  },
  methods: {
    ...mapActions("Painel", ["get_Projetos", "get_Submissoes"]),

  },
};
</script>

<style scoped>
</style>