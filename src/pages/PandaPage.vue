<template>
  <div v-if="isAuthorized" class="wrapper">
    <accounts-vue></accounts-vue>
    <BornListVue></BornListVue>
  </div>
  <div v-else style="text-align: center"><strong>Authorization required</strong></div>
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