<template>
  <div class="wrapper">
    <accounts-vue></accounts-vue>
  </div>
</template>

<script>
import AccountsVue from "@/components/AccountsVue";
export default {
  name: "MainPage",
  components: {
    AccountsVue
  }
}
</script>

<style scoped>

.wrapper{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 50%;
}

</style>