<template>
  <vs-popup
    title=""
    :color="color"
    background-color="rgba(98,39,255,.65)"
    :active.sync="registerUserPopupHome"
  >
    <vs-row vs-type="flex" vs-justify="flex-start" vs-align="center"> </vs-row>
    <vs-row vs-type="flex" vs-justify="space-around">
      <vs-col vs-w="11">
        <vs-input
          class="register-input"
          label="Nome:"
          placeholder="John Doe"
        ></vs-input>
      </vs-col>
      <vs-col vs-w="5">
        <vs-input
          class="register-input"
          label="E-mail:"
          placeholder="email@exemplo.com"
        ></vs-input>
      </vs-col>
      <vs-col vs-w="5">
        <vs-input
          class="register-input"
          label="Confirmar e-mail:"
          placeholder="email@exemplo.com"
        ></vs-input>
      </vs-col>
      <vs-col vs-w="5">
        <vs-select
          class="register-input"
          label="Instituição:"
          placeholder="Selecione uma instituição"
        >
        </vs-select>
      </vs-col>
      <vs-col vs-w="5">
        <vs-select
          class="register-input"
          label="Título:"
          placeholder="Selecione um título"
        >
          <vs-select-item
            :value="item.value"
            :text="item.text"
            :key="index"
            v-for="(item, index) in modalidade"
          ></vs-select-item>
        </vs-select>
      </vs-col>
    </vs-row>
    <vs-row vs-type="flex" vs-justify="space-around" vs-align="center">
      <vs-col vs-w="5">
        <ul>
          <li>
            <vs-radio
              color="rgba(98,39,255)"
              v-model="tipoDeUsuario"
              vs-name="radios"
              vs-value="aluno"
              >Aluno</vs-radio
            >
          </li>
          <li>
            <vs-radio
              color="rgba(98,39,255)"
              v-model="tipoDeUsuario"
              vs-name="radios"
              vs-value="professor"
              >Professor</vs-radio
            >
          </li>
        </ul>
      </vs-col>
      <vs-col vs-w="5">
        <vs-select
          class="register-input"
          label="Curso:"
          placeholder="Selecione um curso"
        >
        </vs-select>
      </vs-col>
    </vs-row>
    <vs-row vs-type="flex" vs-justify="space-around">
        <vs-col vs-w="5">
            <vs-input class="register-input" label="Senha:" placeholder="••••••••••" type="password"></vs-input>
        </vs-col>
        <vs-col vs-w="5">
            <vs-input class="register-input" label="Confirmar senha:" placeholder="••••••••••" type="password"></vs-input>
        </vs-col>
    </vs-row>
    <vs-row vs-type="flex" vs-justify="center">
        <vs-col vs-type="flex" vs-justify="flex-start" vs-w="10">
            <vs-checkbox class="register-terms" icon="thumb_up_alt">Eu aceito todos os termos da <a href="#">política de uso</a> da empresa.</vs-checkbox>
        </vs-col>
        <vs-col vs-w="10">
            <vs-button type="gradient" :color="color" :gradient-color-secondary="colory" class="register-button">Vamos começar o trabalho!</vs-button>
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
      colory: "#e2115d",
      modalidade: [
        { text: "Ensino Médio", value: 1 },
        { text: "Graduação", value: 2 },
        { text: "Mestrado", value: 3 },
        { text: "Doutorado", value: 4 },
      ],
    };
  },
  methods: {
    ...mapActions("Register", ["openPopupUserRegister"]),
  },
  computed: {
    ...mapState("Register", ["popupUserRegister"]),
    registerUserPopupHome: {
      get() {
        return this.popupUserRegister;
      },
      set() {
        this.openPopupUserRegister();
      },
    },
  },
};
</script>

<style scoped>
.register-input {
  margin: 5px auto;
  width: 100%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  padding: 0 22px;
  margin: 15px 0px 0px 0px;
}

.register-terms{
    margin-top: 20px;
}

.register-button{
    width:100%;
    margin: 20px 0;
}
</style>