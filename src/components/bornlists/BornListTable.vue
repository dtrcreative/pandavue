<template>
  <div class="scroll">
    <div class="wrapper">
      <div class="columnTitle" v-for="column in columNames" :key="column.id">
        <p>{{ column.body }}</p>
      </div>
    </div>
    <div  v-if="accounts.length > 0">
      <transition-group name="account-list">
        <born-list-row
            v-for="unit in units"
            :key="unit.name"
            :account="unit"
            @remove="$emit('remove', unit)"
            @update="$emit('update', unit)"
            @password="$emit('password', unit)"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import BornListRow from "@/components/bornlists/BornListRow";
export default {
  name: "BornList",
  components: {BornListRow},
  data() {
    return {
      columNames: [
        {id: 1, body: 'FirstName'},
        {id: 2, body: 'LastName'},
        {id: 3, body: 'DaysLeft'},
        {id: 4, body: 'Date'},
        {id: 5, body: 'Upd'},
        {id: 6, body: 'Del'},
      ],
      checked: true,
    }
  },
  props: {
    units: {
      type: Array,
      request: true
    }
  },
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

.scroll{
  overflow-y: scroll;
  scroll-behavior: smooth;
  max-height: 700px;
}

.wrapper {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 1fr 1fr 1fr;
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