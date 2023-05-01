<template>
  <div v-if="isAuthorized" class="wrapper">
    <accounts-vue></accounts-vue>
    <BornListVue></BornListVue>
  </div>
  <div v-else style="text-align: center">
    <div>
      <strong>Authorization required</strong>
    </div>
    <div>
      <router-link to="/" class="nav-link"> <!-- TODO: user profile-->
        <img src="../assets/panda-angry.png">
      </router-link>
    </div>
  </div>
</template>

<script>
import BornListVue from "@/components/BornListVue";
import AccountsVue from "@/components/AccountsVue";
export default {
  name: "MainPage",
  data() {
    return{
      isAuthorized: false,
    }
  },
  methods:{
    checkAuthorization(){
      this.isAuthorized = JSON.parse(localStorage.getItem('user')) !== null;
    }
  },
  mounted() {
    this.checkAuthorization()
  },
  components: {
    AccountsVue,
    BornListVue
  }
}
</script>

<style scoped>

.wrapper{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

</style>