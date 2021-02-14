<template>
  <vs-popup
    title=""
    :color="color"
    background-color="rgba(98,39,255,.65)"
    :active.sync="registerUserPopupHome"
    @close="resetForm()"
  >
    <vs-row vs-type="flex" vs-justify="flex-start" vs-align="center"> </vs-row>
    <vs-row vs-type="flex" vs-justify="space-around">
      <vs-col vs-w="11">
        <vs-input
          class="register-input"
          :danger="$v.nome.$error"
          danger-text="Por favor, preencha o campo de nome corretamente."
          :color="$v.nome.$error ? 'danger' : 'primary'"
          label="Nome:"
          placeholder="John Doe"
          v-model="nome"
          @change="$v.nome.$touch()"
        ></vs-input>
      </vs-col>
      <vs-col vs-w="5">
        <vs-input
          class="register-input"
          :danger="$v.email.$error"
          danger-text="Por favor, preencha o campo de email corretamente."
          :color="$v.email.$error ? 'danger' : 'primary'"
          label="E-mail:"
          placeholder="email@exemplo.com"
          v-model="email"
          @change="$v.email.$touch()"
        ></vs-input>
      </vs-col>
      <vs-col vs-w="5">
        <vs-input
          class="register-input"
          :danger="$v.confemail.$error"
          danger-text="Este email não condiz com o e-mail principal."
          :color="$v.confemail.$error ? 'danger' : 'primary'"
          label="Confirmar e-mail:"
          placeholder="email@exemplo.com"
          v-model="confemail"
          @change="$v.confemail.$touch()"
        ></vs-input>
      </vs-col>
      <vs-col vs-w="5">
        <vs-select
          class="register-input"
          :danger="$v.titulo.$error"
          danger-text="Por favor, selecione um título."
          :color="$v.titulo.$error ? 'danger' : 'primary'"
          label="Título:"
          placeholder="Selecione um título"
          v-model="titulo"
          @change="$v.titulo.$touch()"
        >
          <vs-select-item
            :value="item.id"
            :text="item.name"
            :key="index"
            v-for="(item, index) in degrees.data"
          ></vs-select-item>
        </vs-select>
      </vs-col>
      <vs-col vs-w="5">
        <vs-select
          class="register-input"
          :danger="$v.curso.$error"
          danger-text="Por favor, selecione um curso."
          :color="$v.curso.$error ? 'danger' : 'primary'"
          label="Curso:"
          v-model="curso"
          placeholder="Selecione um curso"
        >
          <vs-select-item
            :value="item.id"
            :text="item.name"
            :key="index"
            v-for="(item, index) in courses.data"
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
              :vs-value="0"
              >Aluno</vs-radio
            >
          </li>
          <li>
            <vs-radio
              color="rgba(98,39,255)"
              v-model="tipoDeUsuario"
              vs-name="radios"
              :vs-value="1"
              >Professor</vs-radio
            >
          </li>
        </ul>
      </vs-col>
    </vs-row>
    <vs-row vs-type="flex" vs-justify="space-around">
      <vs-col vs-w="5">
        <vs-input
          class="register-input"
          :danger="$v.senha.$error"
          danger-text="Por favor, preencha o campo de senha."
          :color="$v.senha.$error ? 'danger' : 'primary'"
          label="Senha:"
          placeholder="••••••••••"
          type="password"
          v-model="senha"
          @change="$v.senha.$touch()"
        ></vs-input>
      </vs-col>
      <vs-col vs-w="5">
        <vs-input
          class="register-input"
          :danger="$v.nome.$error"
          danger-text="Esta senha não condiz com a escolhida."
          :color="$v.nome.$error ? 'danger' : 'primary'"
          label="Confirmar senha:"
          placeholder="••••••••••"
          type="password"
          v-model="confsenha"
          @change="$v.confsenha.$touch()"
        ></vs-input>
      </vs-col>
    </vs-row>
    <vs-row vs-type="flex" vs-justify="center">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-w="10">
        <vs-checkbox
          v-model="termos"
          :vs-value="true"
          class="register-terms"
          icon="thumb_up_alt"
          >Eu aceito todos os termos da <a href="#">política de uso</a> da
          empresa.</vs-checkbox
        >
      </vs-col>
      <vs-col vs-w="10">
        <vs-button
          type="gradient"
          @click="registerUserComponent()"
          :color="color"
          :gradient-color-secondary="colory"
          class="register-button"
          >Vamos começar o trabalho!</vs-button
        >
      </vs-col>
    </vs-row>
  </vs-popup>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      color: "#5222d0",
      colory: "#e2115d",
      nome: "",
      email: "",
      confemail: "",
      titulo: "",
      tipoDeUsuario: 0,
      curso: "",
      senha: "",
      confsenha: "",
      termos: false,
    };
  },
  mounted() {
    this.getCourses();
    this.getDegrees();
  },
  watch: {
    lastUserRegister: function (val) {
      if (val.data.email == false) {
        this.$vs.notify({
          title: "Não permitido",
          text: "Usuário já cadastrado, faça o seu login.",
          color: "warning",
          time: 4000,
        });
      } else if (val.data.email == undefined) {
        this.$vs.notify({
          title: "Ops!",
          text:
            "Ocorreu um erro. Por favor, repita a operação ou entre em contato com o suporte.",
          color: "danger",
          time: 4000,
        });
      } else {
        this.$vs.notify({
          title: "Sucesso",
          text: "Usuário cadastrado com sucesso. Acesse sua conta!",
          color: "success",
          time: 4000,
        });
        this.openPopupUserRegister();
      }
    },
  },
  validations: {
    nome: { required },
    email: { required },
    confemail: {
      confirmEmail: sameAs("email"),
    },
    senha: { required },
    confsenha: {
      confirmPassword: sameAs("senha"),
    },
    titulo: { required },
    curso: { required },
  },
  methods: {
    ...mapActions("Register", ["openPopupUserRegister", "registerUser", "getCourses", "getDegrees"]),
    registerUserComponent() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        if (this.termos != true) {
          this.$vs.notify({
            text: "Você precisa concordar com os termos de uso da plataforma.",
            color: "warning",
            time: 2000,
          });
        } else {
          const payload = {
            name: this.nome,
            email: this.email,
            degree: parseInt(this.titulo),
            type_user: this.tipoDeUsuario,
            course: parseInt(this.curso),
            password: this.senha,
          };

          this.registerUser(payload);
        }
      }
    },
    resetForm() {
      this.$v.$reset();
    },
  },
  computed: {
    ...mapState("Register", ["popupUserRegister", "lastUserRegister", "courses", "degrees"]),
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
  margin: 2px auto;
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

.register-terms {
  margin-top: 10px;
}

.register-button {
  width: 100%;
  margin: 15px 0;
}
</style>