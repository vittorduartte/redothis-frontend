<template>
  <vs-row vs-type="flex" vs-justify="space-between">
      <vs-button type="gradient" color="warning" @click="openPopupRegistrarTrabalho">Novo Trabalho</vs-button>
  </vs-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions('Projeto', ['openPopupRegistrarTrabalho'])
    },
}
</script>

<style scoped>

</style>