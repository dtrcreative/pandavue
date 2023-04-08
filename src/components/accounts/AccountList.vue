<template>
  <div>
    <div class="wrapper">
      <div class="columnTitle" v-for="column in columNames" :key="column.id">
        <p>{{ column.body }}</p>
      </div>
    </div>
    <div v-if="accounts.length > 0">
      <transition-group name="account-list">
          <account-row
              v-for="account in accounts"
              :key="account.name"
              :account="account"
              @remove="$emit('remove', account)"
              @update="$emit('update', account)"
              v-on:mouseover="mouseover"
              v-on:mouseleave="mouseleave"
          />
      </transition-group>
    </div>
    <h2 v-else style="text-align: center">Нет Данных</h2>
  </div>
</template>

<script>
import AccountRow from "@/components/accounts/AccountRow";

export default {
  emits: ["remove", "update"],
  components: {AccountRow},
  data() {
    return {
      columNames: [
        {id: 1, body: 'Name'},
        {id: 2, body: 'Account'},
        {id: 3, body: 'Mail'},
        {id: 4, body: 'Password'},
        {id: 5, body: 'Upd'},
        {id: 6, body: 'Del'},
      ],
      checked: true,
      selectedAccounts: [],
    }
  },
  props: {
    accounts: {
      type: Array,
      request: true
    }
  },
  methods: {
    mouseover: function(){
      console.log("over")
      this.message = 'Good!'
    },
    mouseleave: function(){
      console.log("leave")
      this.message = 'Hover Me!'
    },
    mouseScroll: function(){
      console.log("scroll")
    }
  }
}
</script>

<style scoped>

.mouseover{
  border-radius: 4px;
}

.mouseleave{

}

.columnTitle {
  text-align: center;
  padding: 5px;
  border: 2px solid teal;
  border-radius: 8px;
  background-color: aliceblue;
}

.wrapper {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 4fr 1fr 1fr;
  grid-template-rows: repeat(1, 1fr);
}

.row {
  background-color: antiquewhite;
  padding: 10px;
  margin: 10px;
}

hoverClass{
  background-color: #85d269;
  padding: 10px;
  margin: 10px;
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