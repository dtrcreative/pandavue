<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">i113_Panda</a>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <font-awesome-icon icon="house" /> Home
        </router-link>
      </li>
    </div>
    <div class="navbar-nav ml-auto" style="margin-left: auto">
<!--      <li class="nav-item">-->
<!--        <router-link to="/register" class="nav-link">-->
<!--          <font-awesome-icon icon="user-plus" /> Register-->
<!--        </router-link>-->
<!--      </li>-->
      <li class="nav-item">
        <label @click="showLoginDialog" class="nav-link">
          <font-awesome-icon icon="sign-in-alt" /> LogIn
        </label>
      </li>
    </div>
      <panda-dialog v-model:show="logInDialogVisible">
        <auth-vue></auth-vue>
      </panda-dialog>
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
    // currentUser() {
    //   return this.$store.state.auth.user;
    // },
  },
  methods:{
    showLoginDialog(){
      this.logInDialogVisible = !this.logInDialogVisible;
    },
    logOut() {
      // this.$store.dispatch('auth/logout');
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

.navbar__btns {
  margin-left: auto;
}

</style>