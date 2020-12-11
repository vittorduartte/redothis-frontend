<template>
  <vs-popup
    title="Submissões"
    :color="color"
    background-color="rgba(98,39,255,.65)"
    :active.sync="popupSubmissoesByProject"
  >
    <Revisao />
    <vs-row vs-type="flex" vs-justify="center">
      <vs-col vs-w="10">
        <vs-list>
          <vs-list-header
            title="Resumo do Trabalho"
            :color="color"
          ></vs-list-header>
          <vs-list-item
            :title="projetoSelecionado.title"
            subtitle="Título"
          ></vs-list-item>
          <vs-list-item
            :title="projetoSelecionado.category"
            subtitle="Categoria"
          ></vs-list-item>
          <vs-list-item
            :title="projetoSelecionado.knowledge_area"
            subtitle="Área de Conhecimento"
          ></vs-list-item>
        </vs-list>
      </vs-col>
    </vs-row>
    <vs-row vs-type="flex" vs-justify="center">
      <vs-col vs-w="12">
        <vs-table
          noDataText="Não há submissões para este trabalho."
          :data="submissoes.data.length >= 1 ? submissoes.data : []"
        >
          <template slot="thead">
            <vs-th>#</vs-th>
            <vs-th>Descrição:</vs-th>
            <vs-th>Autor:</vs-th>
            <vs-th></vs-th>
          </template>
          <template slot-scope="{ data }">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="indextr + 1">
                {{ indextr + 1 }}
              </vs-td>
              <vs-td :data="tr.description">
                {{ tr.description }}
              </vs-td>
              <vs-td :data="tr.create_by.name">
                {{ tr.create_by.name }}
              </vs-td>
              <vs-td>
                <vs-button color="warning" @click="_revisarSubmissao(tr)">Revisar</vs-button>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
  </vs-popup>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Revisao from "@/features/Painel/RevisarPopup";

export default {
  components:{
    Revisao
  },
  data() {
    return {
      color: "#5222d0",
    };
  },
  watch: {
    popupSubmissoes: async function () {
      await this.get_Submissoes(this.projetoSelecionado.id);
    },
  },
  computed: {
    ...mapState("Painel", [
      "popupSubmissoes",
      "projetoSelecionado",
      "submissoes",
    ]),
    popupSubmissoesByProject: {
      get() {
        return this.popupSubmissoes;
      },
      set() {
        this.openPopupSubmissoes();
      },
    },
  },
  methods: {
    ...mapActions("Painel", ["openPopupSubmissoes", "get_Submissoes", "actionPopupRegistrarRevisao","submissao_Selecionada"]),
    _revisarSubmissao(tr){
      this.submissao_Selecionada(tr);
      this.actionPopupRegistrarRevisao();
    }
  },
};
</script>

<style>
</style>