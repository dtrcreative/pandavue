<template>

  <talbe class="app">
    <tbody>
      <tr>
        <td>
          <accounts-vue></accounts-vue>
        </td>

      </tr>
    </tbody>
  </talbe>

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

td {
  padding: 5px;
  border: 1px solid teal;
}

.app {
  padding: 5px;

}
</style>
