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
          <a class="navbar-item" href="#">Registrar-se</a>
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
          >Become a Sponsor</vs-button
        >
      </vs-navbar>
    </vs-row>
    <vs-row
      class="login-area"
      vs-type="flex"
      vs-justify="space-around"
      vs-align="center"
    >
      <vs-col vs-w="3">
        <img
          src="../../assets/images/teaching.png"
          class="login-illustration"
          alt="plan-illustration"
          srcset=""
        />
      </vs-col>
      <vs-col vs-w="3">
        <div class="login-form-section">
          <vs-row vs-type="flex" vs-justify="center">
            <h3 class="title-form">
              <span class="material-icons">person</span> Faça login na sua conta
            </h3>
          </vs-row>
          <vs-row vs-type="flex" vs-justify="center">
            <vs-col vs-w="10">
              <vs-input
                class="form-element"
                autofocus
                v-model="email"
                placeholder="Endereço de e-mail"
              ></vs-input>
            </vs-col>
            <vs-col vs-w="10">
              <vs-input
                class="form-element"
                v-model="senha"
                placeholder="••••••••••"
                type="password"
              ></vs-input>
            </vs-col>
            <vs-col vs-w="10">
              <vs-button class="login-button" type="gradient" color="danger"
                >Entrar</vs-button
              >
            </vs-col>
            <vs-vol vs-w="10">
              <p class="operations-login-form">
                <a href="#">Esqueceu sua senha?</a>
              </p>
              <p class="operations-login-form">
                Não tem uma conta no Redothis? <a href="#">Registre-se.</a>
              </p>
            </vs-vol>
          </vs-row>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      email: "",
      senha: "",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Viga&display=swap");

.brand {
  font-family: "Viga", sans-serif;
  color: #5222d0;
  padding: 0 20px;
}

.redo {
  font-family: "Viga", sans-serif;
  color: rgba(57, 57, 58);
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
  width: 450px;
  height: 350px;
}

.login-area {
  margin-top: calc(0.1 * 100vh);
}

.login-form-section {
  height: 400px;
  width: 100%;
  border-radius: 5px;
  background: #5222d0;
  box-shadow: 1px 3px 12px 2px rgba(57, 57, 58, 0.3);
}

.title-form {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #fff;
  margin: 30px 0;
}

.form-element {
  width: 100%;
  padding: 0 0 20px 0;
}

.login-button {
  width: 100%;
  margin-bottom: 20px;
}

.operations-login-form a {
  color: #2c8dff;
}

.operations-login-form {
  font-size: 14px;
  color: #fff;
}
</style>