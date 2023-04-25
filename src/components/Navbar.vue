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
    <div class="navbar-nav ml-auto" style="margin-left: auto">
      <!--      <li class="nav-item">-->
      <!--        <router-link to="/register" class="nav-link">-->
      <!--          <font-awesome-icon icon="user-plus" /> Register-->
      <!--        </router-link>-->
      <!--      </li>-->
      <li v-if="!currentUser" class="nav-item">
        <label @click="showLoginDialog" class="nav-link">
          <font-awesome-icon icon="sign-in-alt"/>
          LogIn
        </label>
      </li>
    </div>
    <panda-dialog
        v-model:show="logInDialogVisible">
      <auth-vue
          @hide="showLoginDialog"
      ></auth-vue>
    </panda-dialog>

    <div v-if="currentUser" class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link to="/profile" class="nav-link">
          <font-awesome-icon icon="user" />
          {{ currentUser.username }}
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="logOut">
          <font-awesome-icon icon="sign-out-alt" /> LogOut
        </a>
      </li>
    </div>
  </nav>
</template>

<script>
import PandaDialog from "@/components/UI/PDialog";
import AuthVue from "@/components/AuthVue";

export default {
  name: "MainVue",
  components: {AuthVue, PandaDialog},

  data() {
    return {
      logInDialogVisible: false,
    }
  },
  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user)
      return this.$store.state.auth.user;
    },
  },
  methods: {
    showLoginDialog() {
      console.log("hidedede")
      this.logInDialogVisible = !this.logInDialogVisible;
    },
    logOut() {
      this.$store.dispatch('auth/logout');
      // this.$router.push('/login');
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