<template>
  <div class="wrapper">
    <accounts-vue></accounts-vue>
<!--    <BornListVue></BornListVue>-->
  </div>
</template>

<script>
// import BornListVue from "@/components/BornListVue";
import AccountsVue from "@/components/AccountsVue";
export default {
  name: "MainPage",
  components: {
    AccountsVue,
    // BornListVue
  }
}
</script>

<style scoped>

.wrapper{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

</style>