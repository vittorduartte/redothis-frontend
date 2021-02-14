<template>
  <vs-popup
    title="Novo Trabalho"
    :color="color"
    background-color="rgba(98,39,255,.65)"
    :active.sync="registerProjectPopupPainel"
  >
    <vs-row vs-type="flex" vs-justify="center">
      <vs-col vs-w="11">
        <vs-input
          class="vs-input-register"
          label="Título:"
          v-model="titulo"
          :danger="$v.titulo.$error"
          danger-text="Por favor, preencha com o título do projeto."
          :color="$v.titulo.$error ? 'danger' : 'primary'"
          @change="$v.titulo.$touch()"
        ></vs-input>
        <vs-textarea
          counter="500"
          v-model="descricao"
          :danger="$v.descricao.$error"
          danger-text="Por favor, preencha com uma descrição do projeto."
          :color="$v.descricao.$error ? 'danger' : 'primary'"
          :counter-danger.sync="lengthLimiter"
          class="vs-input-register"
          label="Descrição:"
          @change="$v.descricao.$touch()"
        ></vs-textarea>
        <vs-row vs-type="flex" vs-justify="space-between">
          <vs-col vs-w="5">
            <vs-select
              class="vs-input-register"
              label="Categoria:"
              placeholder="Selecione uma categoria"
              v-model="categoria"
              :danger="$v.categoria.$error"
              danger-text="Por favor, selecione uma categoria para o projeto."
              :color="$v.categoria.$error ? 'danger' : 'primary'"
              @change="$v.categoria.$touch()"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.name"
                v-for="(item, index) in categorias.data"
              ></vs-select-item>
            </vs-select>
          </vs-col>
          <vs-col vs-w="5">
            <vs-select
              class="vs-input-register"
              label="Área de conhecimento:"
              placeholder="Selecione uma área de conhecimento"
              v-model="area_de_conhecimento"
              :danger="$v.area_de_conhecimento.$error"
              danger-text="Por favor, selecione uma área de conhecimento para o projeto."
              :color="$v.area_de_conhecimento.$error ? 'danger' : 'primary'"
              @change="$v.area_de_conhecimento.$touch()"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.name"
                v-for="(item, index) in areasDeConhecimento.data"
              ></vs-select-item>
            </vs-select>
          </vs-col>
        </vs-row>
        <vs-row vs-type="flex" vs-justify="space-around" vs-align="center">
          <vs-col vs-w="10">
            <vs-select
              autocomplete
              class="select-fullwidth"
              label="Orientado:"
              placeholder="Selecione um aluno"
              v-model="selecionadoAluno"
            >
              <vs-select-item
                :key="index"
                :value="index"
                :text="item.name"
                v-for="(item, index) in alunos.data"
              />
            </vs-select>
          </vs-col>
          <vs-col vs-w="1">
            <vs-button
              radius
              class="add-aluno"
              icon="add"
              type="border"
              :color="color"
              @click="selected_Aluno()"
            ></vs-button>
          </vs-col>
        </vs-row>
        <vs-row vs-type="flex" vs-justify="center">
          <vs-table
            noDataText="Nenhum aluno selecionado para o orientar."
            :data="selecionados_alunos"
          >
            <template slot="thead">
              <vs-th>#</vs-th>
              <vs-th>E-mail:</vs-th>
              <vs-th>Nome:</vs-th>
              <vs-th></vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="indextr + 1">
                  {{ indextr + 1 }}
                </vs-td>
                <vs-td :data="data[indextr].email">
                  {{ data[indextr].email }}
                </vs-td>
                <vs-td :data="data[indextr].name">
                  {{ data[indextr].name }}
                </vs-td>
                <vs-td>
                  <vs-button
                    radius
                    type="gradient"
                    icon="delete"
                    color="danger"
                    @click="selecionados_alunos.splice(indextr, 1)"
                  ></vs-button>
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
              v-model="selecionadoOrientador"
            >
              <vs-select-item
                :key="index"
                :value="index"
                :text="item.name"
                v-for="(item, index) in orientadores.data"
              />
            </vs-select>
          </vs-col>
          <vs-col vs-w="1">
            <vs-button
              radius
              class="add-aluno"
              icon="add"
              type="border"
              :color="color"
              @click="selected_Orientador()"
            ></vs-button>
          </vs-col>
        </vs-row>
        <vs-row vs-type="flex" vs-justify="center">
          <vs-table
            noDataText="Nenhum coorientador selecionado."
            :data="selecionados_orientadores"
          >
            <template slot="thead">
              <vs-th>#</vs-th>
              <vs-th>E-mail:</vs-th>
              <vs-th>Nome:</vs-th>
              <vs-th></vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="indextr + 1">
                  {{ indextr + 1 }}
                </vs-td>
                <vs-td :data="data[indextr].email">
                  {{ data[indextr].email }}
                </vs-td>
                <vs-td :data="data[indextr].name">
                  {{ data[indextr].name }}
                </vs-td>
                <vs-td>
                  <vs-button
                    radius
                    type="gradient"
                    icon="delete"
                    color="danger"
                    @click="selecionados_orientadores.splice(indextr, 1)"
                  ></vs-button>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-divider></vs-divider>
    <vs-row vs-justify="flex-end">
      <vs-col vs-w="4">
        <vs-button
          type="gradient"
          class="btn-fullwidth"
          color="dark"
          @click="registrar_Projeto_"
          >Salvar Projeto</vs-button
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
      color: "#5222d0",
      lengthLimiter: false,
      titulo: "",
      descricao: "",
      categoria: "",
      area_de_conhecimento: "",
      selecionadoAluno: 0,
      selecionadoOrientador: 0,
      selecionados_alunos: [],
      selecionados_orientadores: [],
      projeto: {},
    };
  },
  validations: {
    titulo: { required },
    descricao: { required },
    categoria: { required },
    area_de_conhecimento: { required }
  },
  watch: {
    popupRegistrarTrabalho: function (val) {
      if (val) {
        this.get_Alunos(
          JSON.parse(sessionStorage.getItem("user_logged")).id_course
        );
        this.get_Orientadores(
          JSON.parse(sessionStorage.getItem("user_logged")).id_course
        );
        this.get_AreasDeConhecimento();
        this.get_Categorias();
      }
    },
    lastProjetoRegistrado: function (val) {
      if (val.data) {
        this.$vs.notify({
          title:"Sucesso!",
          text:"Projeto registrado com sucesso!",
          color:"success"   
        });
        this.get_Projetos();
        this.openPopupRegistrarTrabalho();
      } else if(!val.data && val.message == 'user already working') {
        this.$vs.notify({
          title:"Error!",
          text:"Não foi possível registrar o projeto. Aluno com projeto em andamento!",
          icon:"error",
          color:"warning"
        })
      } else {
        this.$vs.notify({
          title:"Error!",
          text:"Não foi possível registrar o projeto. Tente novamente, ou entre em contato com o suporte.",
          icon:"error",
          color:"danger"
        })
      }
    },
  },
  computed: {
    ...mapState("Projeto", [
      "popupRegistrarTrabalho",
      "alunos",
      "areasDeConhecimento",
      "categorias",
      "orientadores",
      "lastProjetoRegistrado",
    ]),
    ...mapState("Painel", ["projetos"]),
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
    ...mapActions("Projeto", [
      "openPopupRegistrarTrabalho",
      "get_AreasDeConhecimento",
      "get_Categorias",
      "get_Alunos",
      "get_Orientadores",
      "registrar_Projeto",
    ]),
    ...mapActions("Painel", ["get_Projetos"]),
    selected_Aluno() {
      this.selecionados_alunos.push(this.alunos.data[this.selecionadoAluno]);
    },
    selected_Orientador() {
      this.selecionados_orientadores.push(
        this.orientadores.data[this.selecionadoOrientador]
      );
    },
    registrar_Projeto_() {
      if (this.$v.$invalid ||this.selecionados_alunos.length == 0) {
        this.$v.$touch();
        this.$vs.notify({
          color:"warning",
          title:"Campos vazios",
          text:"Preencha o todos os campos requeridos corretamente.",
          icon:"warning"
        })
      } else {
        this.projeto = {
          title: this.titulo,
          subtitle: this.descricao,
          category: this.categoria,
          knowledge_area: this.area_de_conhecimento,
          create_by: JSON.parse(sessionStorage.getItem("user_logged")).id,
          students: this.selecionados_alunos.map((item) => {
            return item.id;
          }),
          tutors: this.selecionados_orientadores.map((item) => {
            return item.id;
          }),
        };
        console.log(this.projeto);
        this.registrar_Projeto(this.projeto);
      }
    },
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
button.add-aluno {
  margin-top: 20px;
}
</style>