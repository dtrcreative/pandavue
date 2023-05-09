<template>
  <div class="scroll">
    <div class="wrapper">
      <div class="columnTitle" v-for="column in columNames" :key="column.id">
        <p>{{ column.body }}</p>
      </div>
    </div>
    <div>
      <transition-group name="unit-list">
        <born-list-row
            v-for="unit in units"
            :key="unit.id"
            :unit="unit"
            :is-notify="unit.notify"
            @remove="$emit('remove', unit)"
            @update="$emit('update', unit)"
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
  emits: ["remove", "update"],
  data() {
    return {
      columNames: [
        {id: 1, body: 'FirstName'},
        {id: 2, body: 'LastName'},
        {id: 3, body: 'Date'},
        {id: 4, body: 'Days'},
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
  max-height: 800px;
}
@media screen and (max-width: 1370px) {
  .scroll{
    overflow-y: scroll;
    scroll-behavior: smooth;
    max-height: 450px;
  }
}
.wrapper {
  display: grid;
  grid-template-columns: 5fr 5fr 5fr 50px 50px 50px;
  grid-template-rows: repeat(1, 1fr);
}
.unit-list-item {
  display: inline-block;
  margin-right: 10px;
}
.unit-list-enter-active,
.unit-list-leave-active {
  transition: all 0.4s ease;
}
.unit-list-enter-from,
.unit-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.unit-list-move {
  transition: transform 0.4s ease;
}
</style>