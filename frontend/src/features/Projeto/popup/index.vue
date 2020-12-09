<template>
  <vs-popup
    title="Novo Trabalho"
    :color="color"
    background-color="rgba(98,39,255,.65)"
    :active.sync="registerProjectPopupPainel"
  >
  <vs-row vs-type="flex" vs-justify="center">
    <vs-col vs-w="11">
      <vs-input class="vs-input-register" label="Título:" v-model="titulo" @change="$v.titulo.$touch()"></vs-input>
      <vs-textarea counter="500" v-model="descricao" :counter-danger.sync="lengthLimiter" class="vs-input-register" label="Descrição:" @change="$v.descricao.$touch()"></vs-textarea>
      <vs-row vs-type="flex" vs-justify="space-between">
        <vs-col vs-w="5">
          <vs-select class="vs-input-register" label="Categoria:" placeholder="Selecione uma categoria" v-model="categoria">
            <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item, index) in categorias.data"></vs-select-item>
          </vs-select>
        </vs-col>
        <vs-col vs-w="5">
          <vs-select class="vs-input-register" label="Área de conhecimento:" placeholder="Selecione uma área de conhecimento" v-model="area_de_conhecimento">
            <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item,index) in areasDeConhecimento.data"></vs-select-item>
          </vs-select>
        </vs-col>
      </vs-row>
      <vs-row vs-type="flex" vs-justify="space-around" vs-align="center">
        <vs-col vs-w="10">
          <vs-select
          class="select-fullwidth"
          label="Orientado:"
          placeholder="Selecione um aluno"
          v-model="selecionado"
          >
          <vs-select-item :key="index" :value="index" :text="item.name" v-for="(item, index) in alunos.data"/>
          </vs-select>
        </vs-col>
        <vs-col vs-w="1">
          <vs-button radius class="add-aluno" icon="add" type="border" :color="color" @click="selected_Aluno()"></vs-button>
        </vs-col>
      </vs-row>
      <vs-row vs-type="flex" vs-justify="center">
        <vs-table
        noDataText="Nenhum aluno selecionado para o orientar."
        :data="selecionados"
        >
          <template slot="thead">
            <vs-th>E-mail:</vs-th>
            <vs-th>Nome:</vs-th>
          </template>
          <template slot-scope="{data}">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].email">
                  {{data[indextr].email}}
                </vs-td>
                <vs-td :data="data[indextr].name">
                  {{data[indextr].name}}
                </vs-td>
              </vs-tr>
          </template>
        </vs-table>
      </vs-row>
    </vs-col>
  </vs-row>
  <vs-divider></vs-divider>
  <vs-row vs-type="flex" vs-justify="center">
    <vs-col vs-w="11">
      <vs-row vs-justify="space-around" vs-align="center">
        <vs-col vs-w="10">
              <vs-select
              class="select-fullwidth"
              label="Coorientadores:"
              placeholder="Selecione um aluno"
              v-model="selecionado"
              >
              <vs-select-item :key="index" :value="index" :text="item.name" v-for="(item, index) in alunos.data"/>
              </vs-select>
            </vs-col>
            <vs-col vs-w="1">
              <vs-button radius class="add-aluno" icon="add" type="border" :color="color" @click="selected_Aluno()"></vs-button>
            </vs-col>
      </vs-row>
      <vs-row vs-type="flex" vs-justify="center">
        <vs-table
        noDataText="Nenhum aluno selecionado para o orientar."
        :data="selecionados"
        >
          <template slot="thead">
            <vs-th>#</vs-th>
            <vs-th>E-mail:</vs-th>
            <vs-th>Nome:</vs-th>
            <vs-th></vs-th>
          </template>
          <template slot-scope="{data}">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="indextr+1">
                  {{indextr+1}}
                </vs-td>
                <vs-td :data="data[indextr].email">
                  {{data[indextr].email}}
                </vs-td>
                <vs-td :data="data[indextr].name">
                  {{data[indextr].name}}
                </vs-td>
                <vs-td>
                  <vs-button radius type="gradient" icon="delete" color="danger" @click="selecionados.splice(indextr, 1)"></vs-button>
                </vs-td>
              </vs-tr>
          </template>
        </vs-table>
      </vs-row>
    </vs-col>
  </vs-row>
  <vs-divider></vs-divider>
  <vs-row vs-justify="flex-end">
    <vs-col vs-w="3">
      <vs-button :color="color" @click="registrar_Projeto">Salvar Projeto</vs-button>
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
      color: "#5222d0",
      lengthLimiter: false,
      titulo: '',
      descricao:'',
      categoria:'',
      area_de_conhecimento:'',
      orientado: '',
      selecionado: "",
      selecionados: [],
      projeto: {}
    };
  },
  validations:{
    projeto: {
      titulo: {required},
      descricao: {required},
      categoria: {required},
      area_de_conhecimento: {required},
      orientado: {required}
    }
  },
  watch:{
    popupRegistrarTrabalho: function(val) {
      if(val){
        this.get_Alunos(JSON.parse(sessionStorage.getItem("user_logged")).id_course);
        this.get_AreasDeConhecimento();
        this.get_Categorias();
      }
    }
  },
  computed: {
    ...mapState("Projeto", ["popupRegistrarTrabalho","alunos","areasDeConhecimento","categorias"]),
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
    ...mapActions("Projeto", ["openPopupRegistrarTrabalho","get_AreasDeConhecimento","get_Categorias","get_Alunos","registrar_Projeto"]),
    selected_Aluno(){
      this.selecionados.push(this.alunos.data[this.selecionado]);
      this.projeto.orientado = this.alunos.data[this.selecionado].id;
    },
    registrar_Projeto(){
      this.projeto = {
        title:this.titulo,
        subtitle:this.descricao,
        category:this.categoria,
        knowledge_area:this.area_de_conhecimento,
        create_by: JSON.parse(sessionStorage.getItem("user_logged")).id
      }
      console.log(this.projeto)
      //this.registrar_Projeto(projeto);
    }
  },
};
</script>

<style scoped>
.vs-input-register {
  width: 100%;
  margin: 14px auto;
}
.select-fullwidth {
  width: 100%;
}
button.add-aluno{
  margin-top: 20px;
}
</style>