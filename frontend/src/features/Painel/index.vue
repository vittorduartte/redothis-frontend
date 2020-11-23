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
          <a class="navbar-item" href="#">Painel</a>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <a class="navbar-item" href="#">Suporte</a>
        </vs-navbar-item>
        <vs-navbar-item index="2">
          <a class="navbar-item" @click="logOut()">Log Out</a>
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
    <PainelDoAluno v-if="user_type == 'professor'"/>
    <PainelDoProfessor />
    <!-- Popup - Registro de Trabalho -->
    <RegistrarTrabalho />
  </div>
</template>

<script>
import PainelDoAluno from '@/features/Painel/Aluno'
import PainelDoProfessor from '@/features/Painel/Professor'
import RegistrarTrabalho from '@/features/Projeto/popup'

export default {
    components:{
        PainelDoAluno,
        PainelDoProfessor,
        RegistrarTrabalho
    },
    data() {
        return {
            index: 0
        }
    },
    methods: {
        logOut(){
            window.sessionStorage.clear();
            window.location.reload();
        }
    },
    computed: {
      user_type(){
        let type_user = JSON.parse(window.sessionStorage.getItem('user_logged')).type_user;
        return type_user ? 'professor' : 'aluno';
      }
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
</style>