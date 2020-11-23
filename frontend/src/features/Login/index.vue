<template>
  <div class="container">
    <vs-row vs-type="flex" vs-justify="space-around" vs-align="center">
      <vs-navbar v-model="index" active-text-color="rgba(98,39,255,.7)">
        <div slot="title">
          <vs-navbar-title>
            <a href="/">
              <h2 class="brand"><span class="redo">Redo</span>.this</h2>
            </a>
          </vs-navbar-title>
        </div>
        <vs-navbar-item index="0">
          <a class="navbar-item" href="#">Sign In</a>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <a class="navbar-item" @click="openPopupUserRegister()"
            >Registrar-se</a
          >
        </vs-navbar-item>
        <vs-navbar-item index="2">
          <a class="navbar-item" href="#">Sobre Nós</a>
        </vs-navbar-item>
        <vs-spacer></vs-spacer>
        <vs-button
          class="sponsor-button"
          icon="favorite"
          type="gradient"
          color="danger"
          >Seja um Apoiador</vs-button
        >
      </vs-navbar>
    </vs-row>
    <vs-row
      class="login-area"
      vs-type="flex"
      vs-justify="space-around"
      vs-align="center"
    >
      <vs-col vs-type="flex" vs-justify="center" vs-w="7">
        <img
          src="../../assets/images/teaching.png"
          class="login-illustration"
          alt="plan-illustration"
          srcset=""
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-w="3">
        <div class="login-form-section">
          <vs-row vs-type="flex" vs-justify="center">
            <h3 class="title-form">
              <span class="material-icons">person</span> Faça login na sua conta
            </h3>
          </vs-row>
          <vs-row vs-type="flex" vs-justify="center">
            <vs-col vs-w="10">
              <span class="label-login-input">Email:</span>
              <vs-input
                class="form-element"
                :danger="$v.email.$error"
                :color="$v.email.$error ? 'danger' : 'primary'"
                danger-text="O e-mail inserido não é válido."
                autofocus
                v-model="email"
                placeholder="Endereço de e-mail"
                @change="$v.email.$touch()"
              ></vs-input>
            </vs-col>
            <vs-col vs-w="10">
              <span class="label-login-input">Senha:</span>
              <vs-input
                class="form-element"
                :danger="$v.senha.$error"
                :color="$v.senha.$error ? 'danger' : 'primary'"
                danger-text="A senha inserida não é válido."
                v-model="senha"
                placeholder="••••••••••"
                type="password"
                @change="$v.senha.$touch()"
              ></vs-input>
            </vs-col>
            <vs-col vs-w="10">
              <vs-button
                class="login-button"
                type="gradient"
                color="danger"
                @click="login()"
                >Entrar</vs-button
              >
            </vs-col>
            <vs-col vs-w="10">
              <p class="operations-login-form">
                <a href="#">Esqueceu sua senha?</a>
              </p>
              <p class="operations-login-form">
                Não tem uma conta no Redothis? <a href="#">Registre-se.</a>
              </p>
            </vs-col>
          </vs-row>
        </div>
      </vs-col>
    </vs-row>
    <RegisterPopup />
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";
import RegisterPopup from "@/features/Register/popup";

export default {
  components: {
    RegisterPopup,
  },
  data() {
    return {
      index: 0,
      email: "",
      senha: "",
    };
  },
  validations: {
    email: { required },
    senha: { required },
  },
  watch: {
    lastUserLogin: function (value) {
      if (value.data) {
        sessionStorage.setItem("user_logged", JSON.stringify(value.data));
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapActions("Register", ["openPopupUserRegister"]),
    ...mapActions("Login", ["setUserAuth"]),
    login() {
      if (!this.$v.$invalid) {
        this.setUserAuth({
          email: this.email,
          password: this.senha,
        });
        window.location.replace('/painel');
      } else {
        this.$v.$touch();
        this.$vs.notify({
          icon: "verified_user",
          title: "Não permitido!",
          text: "O usuário ou senha incorretos.",
          color: "warning",
          time: 4000,
        });
      }
    },
  },
  computed: {
    ...mapState("Login", ["lastUserLogin"]),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Viga&display=swap");

.brand {
  padding: 0 20px;
}

.navbar-item {
  font-size: 1.2rem;
  padding: 20px 20px;
  transition: 0.2s;
}

.navbar-item:hover {
  background: #f5f5f5;
}

.sponsor-button {
  margin: 0 20px 0 20px;
}

img.login-illustration {
  margin-left: 30px;
  width: 513px;
  height: 400px;
}

.login-area {
  margin-top: calc(0.1 * 100vh);
}

.login-form-section {
  height: 400px;
  width: 100%;
  border-radius: 5px;
  background: #5222d0;
  box-shadow: 1px 3px 12px 2px rgba(57, 57, 58, 0.35);
}

.title-form {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #fff;
  margin: 20px 0;
}

.label-login-input {
  font-size: 12px;
  color: #fff;
  font-weight: 300;
}

.form-element {
  width: 100%;
}

.login-button {
  width: 100%;
  margin: 20px auto;
}

.operations-login-form a {
  color: #2c8dff;
}

.operations-login-form {
  font-size: 14px;
  color: #fff;
}
</style>