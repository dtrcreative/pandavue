<template>
  <div class="scroll">
    <div class="wrapper">
      <div class="columnTitle" v-for="column in columNames" :key="column.id">
        <p>{{ column.body }}</p>
      </div>
    </div>
    <div>
      <transition-group name="unit-list">
        <adminka-row
            v-for="user in users"
            :key="user.username"
            :user="user"
            :statusList="statusList"
            :roleList="roleList"
            v-model="selectedSort"
            @remove="$emit('remove', user)"
            @save="$emit('save', user)"
        ></adminka-row>
      </transition-group>
    </div>
  </div>
</template>

<script>
import AdminkaRow from "@/components/profile/admin/AdminkaRow";

export default {
  name: "AdminkaTable",
  components: {AdminkaRow},
  emits: ["remove", "save"],
  data() {
    return {
      columNames: [
        {id: 1, body: 'UserName'},
        {id: 2, body: 'Email'},
        {id: 3, body: 'Role'},
        {id: 4, body: 'Status'},
        {id: 5, body: 'Save'},
        {id: 6, body: 'Del'},
      ],
      checked: true,
    }
  },
  props: {
    users: {
      type: Array,
      request: true
    },
    statusList:{
      type: Array,
      request: true
    },
    roleList:{
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

.wrapper {
  display: grid;
  grid-template-columns: 5fr 5fr 150px 150px 50px 50px;
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