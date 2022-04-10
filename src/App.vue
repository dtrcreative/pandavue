<template>

  <div class="app">
    <accounts-vue></accounts-vue>
  </div>

</template>

<script>
  import AccountsVue from "@/elements/accounts/AccountsVue";

  export default {
    components: {
      AccountsVue
    }
  }

</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app {
        padding: 20px;
    }
</style>
