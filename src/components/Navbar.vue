<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">i113_Panda</a>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <font-awesome-icon icon="house"/>
          Home
        </router-link>
      </li>
    </div>
    <div v-if="!currentUser" class="navbar-nav ml-auto" style="margin-left: auto">
      <li class="nav-item">
        <label @click="showRegisterDialog" class="nav-link">
          <font-awesome-icon icon="sign-in-alt"/>
          Sign In
        </label>
      </li>
      <li class="nav-item">
        <label @click="showLoginDialog" class="nav-link">
          <font-awesome-icon icon="sign-in-alt"/>
          Login
        </label>
      </li>
    </div>

    <panda-dialog
        v-model:show="logInDialogVisible">
      <log-in-form
          @hide="showLoginDialog"
      ></log-in-form>
    </panda-dialog>

    <panda-dialog
        v-model:show="registerDialogVisible">
      <register-form
          @hide="showRegisterDialog"
      ></register-form>
    </panda-dialog>

    <div v-if="currentUser" class="navbar-nav ml-auto" style="margin-left: auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link"> <!-- TODO: user profile-->
          <font-awesome-icon icon="user"/>
          {{ currentUser.username }}
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="logOut">
          <font-awesome-icon icon="sign-out-alt"/>
          LogOut
        </a>
      </li>
    </div>
  </nav>
</template>

<script>
import PandaDialog from "@/components/UI/PDialog";
import LoginForm from "@/components/auth/LogInForm";
import RegisterForm from "@/components/auth/RegisterForm";

export default {
  name: "MainVue",
  components: {RegisterForm, LogInForm: LoginForm, PandaDialog},

  data() {
    return {
      logInDialogVisible: false,
      registerDialogVisible: false,
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    showLoginDialog() {
      this.logInDialogVisible = !this.logInDialogVisible;
    },
    showRegisterDialog() {
      this.registerDialogVisible = !this.registerDialogVisible;
    },
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    }
  }
}
</script>
export default {

}
<style scoped>

.navbar {
  height: 50px;
  background-color: bisque;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

</style>