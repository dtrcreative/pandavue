<template>
  <div class="scroll">
    <div class="wrapper">
      <div class="columnTitle" v-for="column in columnNames" :key="column.id">
        <p>{{ column.body }}</p>
      </div>
    </div>
    <div>
      <transition-group name="account-list">
          <account-row
              v-for="account in accounts"
              :key="account.name"
              :account="account"
              @remove="$emit('remove', account)"
              @update="$emit('update', account)"
              @password="$emit('password', account)"
          />
      </transition-group>
    </div>
  </div>
</template>

<script>
import AccountRow from "@/components/accounts/AccountRow";

export default {
  emits: ["remove", "update", "password"],
  components: {AccountRow},
  data() {
    return {
      columnNames: [
        {id: 1, body: 'Name'},
        {id: 2, body: 'Account'},
        {id: 3, body: 'Mail'},
        {id: 4, body: 'Pwd'},
        {id: 5, body: 'Upd'},
        {id: 6, body: 'Del'},
      ],
      checked: true,
    }
  },
  props: {
    accounts: {
      type: Array,
      request: true
    },
  },
  methods: {
  },
}
</script>

<style scoped>

.columnTitle {
  max-height: 40px;
  text-align: center;
  padding: 5px;
  border: 2px solid teal;
  border-radius: 8px;
  background-color: aliceblue;
}

.scroll{
  overflow-y: scroll;
  scroll-behavior: smooth;
  max-height: 600px;
}

.wrapper {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 50px 50px 50px;
  grid-template-rows: repeat(1, 1fr);
}

.account-list-item {
  display: inline-block;
  margin-right: 10px;
}
.account-list-enter-active,
.account-list-leave-active {
  transition: all 0.4s ease;
}
.account-list-enter-from,
.account-list-leave-to {
  opacity: 0;
  transform: translateX(-130px);
}
.account-list-move {
  transition: transform 0.4s ease;
}
</style>