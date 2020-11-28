<template>
  <vs-popup
    title="Novo Trabalho"
    fullscreen
    :color="color"
    background-color="rgba(98,39,255,.65)"
    :active.sync="registerProjectPopupPainel"
  >
  <vs-row vs-type="flex" vs-justify="center">
    <vs-col vs-w="11">
      <vs-input class="vs-input-register" label="Título:"></vs-input>
      <vs-textarea counter="500" v-model="projeto.descricao" :counter-danger.sync="lengthLimiter" class="vs-input-register" label="Descrição:"></vs-textarea>
      <vs-row vs-type="flex" vs-justify="space-between">
        <vs-col vs-w="5">
          <vs-select class="vs-input-register" label="Categoria:" placeholder="Selecione uma categoria" v-model="projeto.categoria">
            <vs-select-item :key="index" :value="item" :text="item.text" v-for="(item, index) in categorias"></vs-select-item>
          </vs-select>
        </vs-col>
        <vs-col vs-w="5">
          <vs-select class="vs-input-register" label="Área de conhecimento:" placeholder="Selecione uma área de conhecimento" v-model="projeto.area_de_conhecimento">
            <vs-select-item :key="index" :value="item" :text="item.text" v-for="(item,index) in areas_de_conhecimento"></vs-select-item>
          </vs-select>
        </vs-col>
      </vs-row>
      <vs-row vs-type="flex" vs-justify="center">
        <vs-col vs-w="5"></vs-col>
        <vs-col vs-w="5"></vs-col>
      </vs-row>
    </vs-col>
    <vs-col>
      
    </vs-col>
  </vs-row>
  </vs-popup>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      color: "#5222d0",
      lengthLimiter: false,
      projeto: {
        descricao:'',
        categoria:'',
        area_de_conhecimento:''
      },
      categorias: [
        {value:0, text:'Estudo de Caso'},
        {value:1, text:'Desenvolvimento de Software'},
        {value:3, text:'Projeto de Pesquisa'},
        {value:2, text:'Revisão Bibliográfica'},
      ],
      areas_de_conhecimento: [
        {value:0, text:'Engenharia de Software'},
        {value:1, text:'Engenharia da Computação'},
        {value:2, text:'Ciência da Computação'},
        {value:3, text:'Saúde Coletiva'},
      ]
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
.vs-input-register {
  width: 100%;
  margin: 14px auto;
}
</style>