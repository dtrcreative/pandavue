<template>
  <div>
    <div class="wrapper">
      <div class="columnTitle" v-for="column in columNames" :key="column.id">
        <p>{{ column.body }}</p>
      </div>
    </div>
    <div class="wrapper" v-if="accounts.length > 0">
        <account-row
            v-for="account in accounts"
            :key="account.name"
            :account="account"
            @remove="$emit('remove', account)"
        />
    </div>
    <h2 v-else style="text-align: center">Нет Данных</h2>
  </div>
</template>

<script>
import AccountRow from "@/components/accounts/AccountRow";

export default {
  emits: ["remove"],
  components: {AccountRow},
  data() {
    return {
      columNames: [
        {id: 1, body: 'Name'},
        {id: 2, body: 'Account'},
        {id: 3, body: 'Mail'},
        {id: 4, body: 'Password'},
        {id: 5, body: 'Del'},
      ]
    }
  },
  props: {
    accounts: {
      type: Array,
      request: true
    }
  }
}
</script>

<style scoped>

.columnTitle {
  text-align: center;
  padding: 5px;
  border: 2px solid teal;
  border-radius: 8px;
  background-color: aliceblue;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
}

</style>