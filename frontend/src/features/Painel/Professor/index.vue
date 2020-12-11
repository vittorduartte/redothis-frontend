<template>
  <vs-row vs-type="flex" vs-justify="space-around">
    <vs-col vs-w="10" vs-type="flex" vs-justify="center">
      <h2>Painel do Orientador</h2>
    </vs-col>
    <vs-col vs-w="5">
      <vs-list>
        <vs-list-header
          icon="supervisor_account"
          title="Docente"
        ></vs-list-header>
        <vs-list-item
          :title="dados_usuario.name"
          subtitle="Nome"
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
          :title="dados_usuario.degree"
          subtitle="Título"
        ></vs-list-item>
      </vs-list>
    </vs-col>
    <vs-col vs-w="5">
      <vs-row vs-type="flex" vs-justify="center">
        <vs-col vs-w="12">
          <vs-table
            v-model="projeto_selecionado"
            @selected="handleSelected"
            :max-items="10"
            maxHeight="400px"
            noDataText="Não existem projetos para serem orientados ou exibidos."
            :data="projetos.data"
          >
            <template slot="header">
              <h3>Projetos Ativos</h3>
            </template>
            <template slot="thead">
              <vs-th>#</vs-th>
              <vs-th>Tipo:</vs-th>
              <vs-th>Título:</vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="indextr">
                  {{ indextr + 1 }}
                </vs-td>
                <vs-td :data="data[indextr].category">
                  {{ data[indextr].category }}
                </vs-td>
                <vs-td :data="data[indextr].title">
                  {{ data[indextr].title }}
                </vs-td>
              </vs-tr>
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
            :gradient-color-secondary="colory"
            @click="openPopupRegistrarTrabalho"
            >Novo Projeto</vs-button
          >
        </vs-col>
      </vs-row>
    </vs-col>
  </vs-row>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      color: "#5222d0",
      colory: "#e2115d",
      dados_usuario: {},
      projeto_selecionado: "",
    };
  },
  mounted() {
    this.dados_usuario = JSON.parse(sessionStorage.getItem("user_logged"));
    this.get_Projetos(JSON.parse(sessionStorage.getItem("user_logged")).id);
  },
  computed: {
    ...mapState("Painel", ["projetos"]),
  },
  methods: {
    ...mapActions("Projeto", ["openPopupRegistrarTrabalho"]),
    ...mapActions("Painel", ["get_Projetos", "openPopupSubmissoes","selecionar_Projeto"]),
    handleSelected(tr){
        this.openPopupSubmissoes()
        this.selecionar_Projeto(tr)
    }
  },
};
</script>

<style scoped>
.vs-table {
  height: 400px;
}
</style>