<template>
  <vs-row vs-type="flex" vs-justify="space-around">
      <vs-col vs-w="10" vs-type="flex" vs-justify="center">
          <h2>Painel do Orientador</h2>
      </vs-col>
      <vs-col vs-w="5">
          <vs-list>
              <vs-list-header icon="supervisor_account" title="Docente"></vs-list-header>
              <vs-list-item :title="dados_usuario.name" subtitle="Nome"></vs-list-item>
              <vs-list-item :title="dados_usuario.email" subtitle="Email"></vs-list-item>
              <vs-list-item :title="dados_usuario.course" subtitle="Curso"></vs-list-item>
              <vs-list-item :title="dados_usuario.degree" subtitle="Título"></vs-list-item>
          </vs-list>
      </vs-col>
      <vs-col vs-w="5">
      <vs-row vs-type="flex" vs-justify="center">
       <vs-col vs-w="12">
           <vs-table
           v-model="projeto_selecionado"
           noDataText="Não existem projetos para serem orientados ou exibidos."
           ></vs-table>
       </vs-col>
       <vs-col vs-w="6"></vs-col>
       <vs-col vs-w="6">
        <vs-button type="gradient" color="warning" @click="openPopupRegistrarTrabalho">Novo Trabalho</vs-button>
       </vs-col>
      </vs-row>
      </vs-col>
  </vs-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            dados_usuario: {},
            projeto_selecionado: ""
        }
    },
    mounted() {
        this.dados_usuario = JSON.parse(sessionStorage.getItem("user_logged"))
    },
    methods: {
        ...mapActions('Projeto', ['openPopupRegistrarTrabalho'])
    },
}
</script>

<style scoped>

</style>