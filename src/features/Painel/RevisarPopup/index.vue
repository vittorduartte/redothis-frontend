<template>
  <vs-popup title="Nova Revisão" :active.sync="triggerPopupRevisao">
    <vs-row vs-type="flex" vs-justify="space-around">
      <vs-col vs-w="10">
        <vs-textarea label="Descrição:" v-model="descricao" />
      </vs-col>
      <vs-col vs-w="10">
        <h4>Insira o arquivo para submissão:</h4>
        <vs-upload
          automatic
          text="Solte ou selecione um arquivo"
          action="https://jsonplaceholder.typicode.com/posts/"
          @on-success="successUpload"
        />
      </vs-col>
      <vs-col vs-w="12">
        <vs-divider> </vs-divider>
      </vs-col>
      <vs-col vs-w="4" vs-offset="8">
        <vs-button
          type="gradient"
          color="dark"
          class="btn-fullwidth"
          @click="_registrar_Revisao"
          >Enviar Revisao</vs-button
        >
      </vs-col>
    </vs-row>
  </vs-popup>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("Painel", ["popupRevisao", "projetoSelecionado","submissaoSelecionada"]),
    triggerPopupRevisao: {
      get() {
        return this.popupRevisao;
      },
      set() {
        this.actionPopupRegistrarRevisao();
      },
    },
  },
  methods: {
    ...mapActions("Painel", [
      "registrar_Revisao",
      "actionPopupRegistrarRevisao",
      "get_Revisoes",
    ]),
    _registrar_Revisao() {
      const payload = {
        comments: this.descricao,
        attachment_filepath: `filepath://${
          JSON.parse(sessionStorage.getItem("user_logged")).email
        }`,
        project_id: this.projetoSelecionado.id,
        user_id: JSON.parse(sessionStorage.getItem("user_logged")).id,
        submission_id: this.submissaoSelecionada.id
      };
      this.registrar_Revisao(payload);
    },
  },
};
</script>

<style>
</style>