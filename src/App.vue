<template>

  <div class="wrapper">
    <accounts-vue></accounts-vue>
  </div>


</template>

<script>
import AccountsVue from "@/elements/components/AccountsVue";
// import AuthVue from "@/elements/components/AuthVue";

export default {
  components: {
    AccountsVue,
    // AuthVue
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

td {
  padding: 5px;
  border: 1px solid teal;
}

.app {
  width: 50%;
  padding: 20px;
}

.wrapper{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-rows: 50%;
}
</style>
