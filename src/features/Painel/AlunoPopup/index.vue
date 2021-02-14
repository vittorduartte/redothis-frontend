<template>
  <vs-popup title="Nova Submissão" :active.sync="popupRegistrarSubmissoes_">
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
        <vs-divider>
        </vs-divider>
      </vs-col>
      <vs-col vs-w="4" vs-offset="8">
        <vs-button
          type="gradient"
          color="dark"
          class="btn-fullwidth"
          @click="_registrar_Submissoes"
          >Enviar Submissão</vs-button
        >
      </vs-col>
    </vs-row>
  </vs-popup>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      descricao: "",
    };
  },
  validations:{
    descricao:{ required }
  },
  watch: {
    lastSubmissionRegister: async function(val){
      console.log(val)
      if (val.data) {
        this.$vs.notify({
          title: "Sucesso!",
          text: "Submissão registrada com sucesso.",
          color: "success",
        });
        this.actionPopupRegistrarSubmissoes();
        await this.get_Submissoes();
      } else {
        this.$vs.notify({
          title: "Erro!",
          text: "Erro ao registrar sua submissão. Tente novamente, ou entre em contato com o suporte!",
          color: "danger",
        });
      }
    },
  },
  computed: {
    ...mapState("Painel", [
      "popupRegistrarSubmissoes",
      "projetos",
      "lastSubmissionRegister",
      "submissoes"
    ]),
    popupRegistrarSubmissoes_: {
      get() {
        return this.popupRegistrarSubmissoes;
      },
      set() {
        this.actionPopupRegistrarSubmissoes();
      },
    },
  },
  methods: {
    ...mapActions("Painel", [
      "actionPopupRegistrarSubmissoes",
      "registrar_Submissao",
      "get_Submissoes"
    ]),
    successUpload() {
      this.$vs.notify({
        title: "Upload Success",
        color: "success",
        text: "Arquivo enviado com sucesso.",
      });
    },
    _registrar_Submissoes() {
      const payload = {
        description: this.descricao,
        filepath: `filepath://${JSON.parse(sessionStorage.getItem("user_logged")).email}`,
        project_id: this.projetos.data[0].id,
        user_id: JSON.parse(sessionStorage.getItem("user_logged")).id,
      };
      console.log(payload);
      this.registrar_Submissao(payload);
    },
  },
};
</script>

<style scoped>
</style>