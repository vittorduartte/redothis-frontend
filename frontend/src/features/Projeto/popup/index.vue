<template>
  <vs-popup
    title="Novo Trabalho"
    :color="color"
    background-color="rgba(98,39,255,.65)"
    :active.sync="registerProjectPopupPainel"
  >
  <vs-row vs-type="flex" vs-justify="justify-content">
  </vs-row>
  </vs-popup>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      color: "#5222d0",
    };
  },
  computed: {
    ...mapState("Projeto", ["popupRegistrarTrabalho"]),
    registerProjectPopupPainel: {
      get() {
        return this.popupRegistrarTrabalho;
      },
      set() {
        this.openPopupRegistrarTrabalho();
      },
    },
  },
  methods: {
    ...mapActions("Projeto", ["openPopupRegistrarTrabalho"]),
  },
};
</script>

<style scoped>
</style>