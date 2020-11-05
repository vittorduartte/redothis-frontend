<template>
  <div class="container">
    <vs-row class="bg-hero" justify="center" align="center">
      <vs-col w="4">
        <div class="hero-logo">
          <h2 class="icon-logo">Redo.This</h2>
          <h5><strong>_</strong>gerenciamento de trabalhos e projetos</h5>
        </div>
      </vs-col>
    </vs-row>
    <vs-row justify="center">
      <vs-col class="login-form" w="4">

      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap");

.bg-hero {
  background-image: url("../../assets/images/header-login-bg.jpg");
  background-size: cover;
}

.hero-logo {
  display: flex !important;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: calc(0.4 * 100vh) !important;
}

.hero-logo h5 {
  font-weight: 350;
  font-size: 20px;
}

.icon-logo {
  font-family: "Syne Mono", monospace;
  font-size: 50px;
  color: #fff;
}

.login-form {
    height: 300px;
    margin-top: 50px;
    border-radius: 5px;
    background-color: #bcbbaa;
}
</style>