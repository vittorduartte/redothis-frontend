<template>
  <vs-popup
    title="Nova Submissão"
    :active.sync="triggerPopupRegistrarSubmissoes"
  >
    <h3>Minha nova submissão</h3>
  </vs-popup>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("Painel", ["popupRegistrarSubmissoes"]),
    triggerPopupRegistrarSubmissoes: {
      get() {
        return this.popupRegistrarSubmissoes;
      },
      set() {
        this.popupRegistrarSubmissoes();
      },
    },
  },
  methods: {
    ...mapActions("Painel", ["popupRegistrarSubmissoes"]),
  },
};
</script>

<style scoped>
</style>