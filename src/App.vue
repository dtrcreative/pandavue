<template>

  <talbe class="app">
    <tbody>
      <tr>
        <td>
          <accounts-vue></accounts-vue>
        </td>
        <td>
          <auth-vue></auth-vue>
        </td>
      </tr>
    </tbody>
  </talbe>

</template>

<script>
import AccountsVue from "@/elements/components/AccountsVue";
import AuthVue from "@/elements/components/AuthVue";

export default {
  components: {
    AccountsVue,
    AuthVue
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
  padding: 5px;
}
</style>
